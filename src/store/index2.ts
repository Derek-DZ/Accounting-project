import recordStore from '@/store/recordStore';
import recordListTreeStore from '@/store/recordListTreeStore';
import recordDateTypeStore from '@/store/recordDateTypeStore';

const store = {
  ...recordStore,
  ...recordListTreeStore,
  ...recordDateTypeStore
};

export default store;