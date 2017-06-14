import axios from 'axios';

export const GET_LIST = 'GET_LIST';
export const BTN_ACTIVE = 'BTN_ACTIVE';
export const SORT_LIST = 'SORT_LIST';

export function GetList(mode) {

  const URL_PREFIX = 'https://fcctop100.herokuapp.com/api/fccusers/top/';
  var URL = (mode === '30-days') ? `${URL_PREFIX}recent` : `${URL_PREFIX}alltime`;

  const REQUEST = axios.get(URL);
  return(
    {
      type: GET_LIST,
      payload: REQUEST
    }
  );
}

export function BtnActive(mode) {
  return(
    {
      type: BTN_ACTIVE,
      mode
    }
  );
}

export function SortList(sortColumn){
  return(
    {
      type: SORT_LIST,
      sortColumn
    }
  );
}
