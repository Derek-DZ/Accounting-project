import recordStore from '@/store/recordStore';
import recordListTreeStore from '@/store/recordListTreeStore';

const store = {
  ...recordStore,
  ...recordListTreeStore
};

export default store;