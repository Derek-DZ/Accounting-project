import clone from '@/lib/clone';
import dayjs from 'dayjs';
import store from '@/store/index2';

const recordDateTypeStore = {

  fetchRecordList() {
    return store.fetchRecords();
  },
  updateRecordListTree(recordList: RecordItem[], recordTree: RecordTree, unit: dayjs.OpUnitType) {
    if (recordList === [] || recordTree === []) {return recordTree = [];}
    for (let i = 0; i < recordList.length - 1; i++) {
      const current = recordList[i + 1];
      const last = recordTree[recordTree.length - 1];

      if (dayjs(current.date).isSame(dayjs(last.title), unit)) {
        last.data.push(current);
      } else {
        recordTree.push({title: current.date, data: [current]});
      }
    }

  },
  fetchRecordListTree(unit: dayjs.OpUnitType) {
    const recordList = this.fetchRecordList();
    if (recordList.length === 0) {return [];}
    const newRecordList: RecordItem[] = clone(recordList).sort((a: RecordItem, b: RecordItem) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());
    const recordTree: RecordTree = [{
      title: newRecordList[0].date,
      data: [newRecordList[0]]
    }];
    this.updateRecordListTree(newRecordList, recordTree, unit);
    return recordTree;
  },
  fetchNewRecordTree(unit: dayjs.OpUnitType, type: string) {
    const newRecordTree = this.fetchRecordListTree(unit);
    if (newRecordTree.length === 0) {return newRecordTree;}
    for (let i = newRecordTree.length - 1; i >= 0; i--) {
      for (let j = newRecordTree[i].data.length - 1; j >= 0; j--) {
        if (newRecordTree[i].data[j].type !== type) {
          newRecordTree[i].data.splice(j, 1);
        }
      }
      if (newRecordTree[i].data.length === 0) {
        newRecordTree.splice(i, 1);
      }
    }
    return newRecordTree;
  },

};

export default recordDateTypeStore;