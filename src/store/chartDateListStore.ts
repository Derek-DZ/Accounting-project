import store from '@/store/index2';
import chartKeyValueList from '@/constant/chartKeyValueList';
import dayjs, {OpUnitType} from 'dayjs';
import tagsList from '@/constant/tagsList';
import chartLabelsList from '@/constant/chartLabelsList';


const chartDateListStore = {
  fetchChartDateListArray() {
    const newRecordTreeList: RecordTree[] = [];
    for (let i = 0; i < chartKeyValueList.length; i++) {
      newRecordTreeList.push(store.fetchNewRecordTree(chartKeyValueList[i].date as OpUnitType, chartKeyValueList[i].type));
    }
    return newRecordTreeList;
  },
  fetchChartData(type: string, unit: OpUnitType) {
    let n = 0;
    let chartDate: number[][] = [];

    if (unit === 'day') {
      chartDate = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
      ];
      n = type === '-' ? 2 : 3;
    } else if (unit === 'week') {
      chartDate = [
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ];
      n = type === '-' ? 4 : 5;
    } else if (unit === 'month') {
      chartDate = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ];
      n = type === '-' ? 6 : 7;
    }
    if (this.fetchChartDateListArray()[n].length !== 0) {
      const chosenList = this.fetchChartDateListArray()[n][0].data;
      const newList: RecordTree = [{title: chosenList[0].date, data: [chosenList[0]]}];
      store.updateRecordListTree(chosenList, newList, unit);
      for (let i = 0; i < newList.length; i++) {
        for (let j = 0; j < newList[i].data.length; j++) {
          for (let k = 0; k < tagsList.length; k++) {
            if (newList[i].data[j].tagName === tagsList[k].key) {
              if (unit === 'day') {
                if (dayjs(newList[i].data[j].date).day() === 0) {
                  chartDate[k][chartDate.length - 1] += parseFloat(newList[i].data[j].number);
                } else {
                  chartDate[k][dayjs(newList[i].data[j].date).day() - 1] += parseFloat(newList[i].data[j].number);
                }
              } else if (unit === 'week') {
                chartDate[k][dayjs(newList[i].data[j].date).week() - dayjs().startOf('month').week()] += parseFloat(newList[i].data[j].number);
              } else if (unit === 'month') {
                chartDate[k][dayjs(newList[i].data[j].date).month()] += parseFloat(newList[i].data[j].number);
              }
            }
          }
        }
      }
      return chartDate;
    }
  },
  fetchChartLabels(unit: OpUnitType) {
    let chartLabels: string[] | undefined = [];
    const newChartLabelsList = chartLabelsList;
    if (unit === 'day') {
      chartLabels = newChartLabelsList[0].weekDay;
      if (dayjs().day() !== 0) {
        if (chartLabels![dayjs().day() - 1].length < 4) {chartLabels?.splice(dayjs().day() - 1, 1, '# ' + chartLabels[dayjs().day() - 1]);}
      } else {
        if (chartLabels![dayjs().day() + 6].length < 4) {chartLabels?.splice(dayjs().day() + 6, 1, '# ' + chartLabels[dayjs().day() + 6]);}
      }
    } else if (unit === 'week') {
      chartLabels = newChartLabelsList[1].monthWeek;
      if (chartLabels![dayjs().week() - dayjs().startOf('month').week()].length < 4) {chartLabels?.splice(dayjs().week() - dayjs().startOf('month').week(), 1, '# ' + chartLabels[dayjs().week() - dayjs().startOf('month').week()]);}
    } else if (unit === 'month') {
      chartLabels = newChartLabelsList[2].yearMonth;
      if (chartLabels![dayjs().month()].length < 4) {chartLabels?.splice(dayjs().month(), 1, '# ' + chartLabels[dayjs().month()]);}

    }
    return chartLabels;
  }
};

export default chartDateListStore;