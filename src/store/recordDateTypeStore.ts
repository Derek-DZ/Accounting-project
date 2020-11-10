import clone from '@/lib/clone';
import dayjs from 'dayjs';
import store from '@/store/index2';

const weekOfYear = require('dayjs/plugin/weekOfYear');
dayjs.extend(weekOfYear);

const recordDateTypeStore = {

  fetchNewRecordWeekTree() {
    const newRecoudTree = clone(store.fetchRecords());



    // for (let i = oldRecoudTree.length - 1; i >= 0; i--){
    //
    // }

    return newRecoudTree;

  },

};

export default recordDateTypeStore;