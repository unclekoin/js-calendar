import moment from 'moment';
import 'moment-precise-range-plugin';

export const getDate = (date) => {
  return moment(date).format('MMM Do YYYY'); 
}

export const getPreciseDateDifference = (dateOne, dataTwo) => {
  const dateOneFormat = moment(dateOne);
  const dateTwoFormat = moment(dataTwo);
  return moment.preciseDiff(dateOneFormat, dateTwoFormat);
}