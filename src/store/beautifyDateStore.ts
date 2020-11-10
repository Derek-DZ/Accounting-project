import dayjs from 'dayjs';
const weekOfYear = require('dayjs/plugin/weekOfYear');
dayjs.extend(weekOfYear);
const beautifyDateStore ={
  beautifyDate(string: string) {
    const day = dayjs(string);
    const today = dayjs();
    if (day.isSame(today, 'day')) {
      return '今天';
    } else if (day.isSame(today, 'year')) {
      return day.format('M月D日');
    } else {
      return day.format('YYYY年M月D日');
    }
  },
  beautifyTime(string: string) {
    return dayjs(string).format('HH:mm');
  },

  beautifyWeek(string: string) {
    const week = dayjs(string);
    const thisWeek = dayjs();
    if (week.isSame(thisWeek, 'week')) {
      return '本周';
    } else if (week.week() === (thisWeek.week() - 1)) {
      return '上周';
    } else if (week.isSame(thisWeek, 'year')) {
      return (week.startOf('w').format('M月D日') + " - " + week.endOf('w').format('M月D日'))
    } else {
      return (week.startOf('w').format('YYYY年M月D日') + " - " + week.endOf('w').format('YYYY年M月D日'))
    }
  },

  beautifyMonth(string: string) {
    const month = dayjs(string);
    const thisWeek = dayjs();
    if (month.isSame(thisWeek, 'month')) {
      return '本月';
    } else if (month.month() === (thisWeek.month() - 1)) {
      return '上月';
    } else if (month.isSame(thisWeek, 'year')) {
      return (month.startOf('m').format('M月D日') + " - " + month.endOf('m').format('M月D日'))
    } else {
      return (month.startOf('m').format('YYYY年M月D日') + " - " + month.endOf('m').format('YYYY年M月D日'))
    }
  }
}
export default beautifyDateStore