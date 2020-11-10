import recordStore from '@/store/recordStore';
import recordListTreeStore from '@/store/recordListTreeStore';
import beautifyDateStore from '@/store/beautifyDateStore';

const store = {
  ...recordStore,
  ...recordListTreeStore,
  ...beautifyDateStore
};

export default store;