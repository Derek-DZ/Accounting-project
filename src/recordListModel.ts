const localStorageKeyName = 'recordList';

const recordListModel = {
  data: [] as RecordItem[],
  clone(data: RecordItem[] | RecordItem) {
    return JSON.parse(JSON.stringify(data));
  },
  create(record: RecordItem) {
    const recordClone: RecordItem = this.clone(record);
    this.data.push(recordClone);
    this.save()
  },
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  save() {
    window.localStorage.setItem('recordList', JSON.stringify(this.data));
  }
};

export default recordListModel;