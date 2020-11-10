import store from '@/store/index2';

export default Object.freeze([
  {type: '-', date: 'day', beautifyTitle: store.beautifyDate, beautifyAccount: store.beautifyTime},
  {type: '+', date: 'day', beautifyTitle: store.beautifyDate, beautifyAccount: store.beautifyTime},
  {type: '-', date: 'week', beautifyTitle: store.beautifyWeek, beautifyAccount: store.beautifyDate},
  {type: '+', date: 'week', beautifyTitle: store.beautifyWeek, beautifyAccount: store.beautifyDate},
  {type: '-', date: 'month', beautifyTitle: store.beautifyMonth, beautifyAccount: store.beautifyDate},
  {type: '+', date: 'month', beautifyTitle: store.beautifyMonth, beautifyAccount: store.beautifyDate}
]);


