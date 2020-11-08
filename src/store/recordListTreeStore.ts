import clone from '@/lib/clone';
import dayjs from 'dayjs';
import store from '@/store/index2';

const recordListTreeStore = {

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
  }
};

export default recordListTreeStore;