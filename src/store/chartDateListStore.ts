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
  },
  fetchChartLabels(unit: OpUnitType) {
    let chartLabels: string[] | undefined = [];
    if (unit === 'day') {
      chartLabels = chartLabelsList[0].weekDay;
    } else if (unit === 'week') {
      chartLabels = chartLabelsList[1].monthWeek;
    } else if (unit === 'month') {
      chartLabels = chartLabelsList[2].yearMonth;
    }
    return chartLabels;
  }
};

export default chartDateListStore;