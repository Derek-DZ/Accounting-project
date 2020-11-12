import recordStore from '@/store/recordStore';
import recordListTreeStore from '@/store/recordListTreeStore';
import beautifyDateStore from '@/store/beautifyDateStore';
import chartDateListStore from '@/store/chartDateListStore';

const store = {
  ...recordStore,
  ...recordListTreeStore,
  ...beautifyDateStore,
  ...chartDateListStore
};

export default store;