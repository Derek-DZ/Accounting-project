type RecordItem = {
  type: string;
  number: string;
  tagName: string;
  note: string;
  date: string;
}

type RecordTree = {
  title: string;
  data: RecordItem[];
}[]

// interface Window {
// }