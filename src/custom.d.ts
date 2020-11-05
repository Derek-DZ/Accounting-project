type RecordItem = {
  type: string;
  number: string;
  tagName: string;
  note: string;
  date: string;
}

interface Window {
  recordList: RecordItem[];
  createRecord: (record: RecordItem) => void;
}