import clone from '@/lib/clone';
import dayjs from 'dayjs';
import store from '@/store/index2';

const recordDateTypeStore = {

  fetchRecordList() {
    return store.fetchRecords();
  },
  fetchRecordListTree() {
    const recordList = this.fetchRecordList();
    if (recordList.length === 0) {return [];}
    const newRecordList: RecordItem[] = clone(recordList).sort((a: RecordItem, b: RecordItem) => dayjs(b.date).valueOf() - dayjs(a.date).valueOf());
    const recordTree: RecordTree = [{
      title: newRecordList[0].date,
      data: [newRecordList[0]]
    }];
    for (let i = 0; i < newRecordList.length - 1; i++) {
      const current = newRecordList[i + 1];
      const last = recordTree[recordTree.length - 1];
      if (dayjs(current.date).isSame(dayjs(last.title), 'date')) {
        last.data.push(current);
      } else {
        recordTree.push({title: current.date, data: [current]});
      }
    }
    return recordTree;
  },
  fetchNewRecordTree(type) {
    const newRecordTree = this.fetchRecordListTree();
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