import clone from '@/lib/clone';
import dayjs from 'dayjs';
import store from '@/store/index2';

const weekOfYear = require('dayjs/plugin/weekOfYear');
dayjs.extend(weekOfYear);

const recordDateTypeStore = {
  formatRecordWeekTree(oldRecoudTree) {
    for (let i = oldRecoudTree.length - 1; i >= 0; i--) {
      oldRecoudTree[i].title = dayjs(oldRecoudTree[i].title).week().toString();
    }
    return oldRecoudTree;
  },
  fetchOutlayRecordWeekTree() {
    const outlayRecoudTree = clone(store.fetchOutlayRecordTree());
    this.formatRecordWeekTree(outlayRecoudTree);

    return outlayRecoudTree;

  },

  fetchIncomeRecordWeekTree() {
    const outlayRecoudTree = clone(store.fetchIncomeRecordTree());
    return outlayRecoudTree;
  }


};

export default recordDateTypeStore;