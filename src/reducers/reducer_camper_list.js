import { GET_LIST, BTN_ACTIVE, SORT_LIST } from '../actions/index';

const INITIAL_STATE = {mode: 'all-time', sort: 'desc', sortColumn: 'all-time', campers: []};


const CamperListReducer = (state=INITIAL_STATE, action) => {

  const compareASC = (a,b) => {
    var sortColumn = action.sortColumn;

    var colA = a.alltime;
    var colB = b.alltime;

    if (sortColumn !== 'all-time') {
        colA = a.recent;
        colB = b.recent;
    }

      if (colA > colB) {
        return 1;
      }

      if (colA < colB) {
        return -1;
      }

      return 0;
    }

  const compareDESC = (a,b) => {
    var sortColumn = action.sortColumn;

    var colA = a.alltime;
    var colB = b.alltime;

    if (sortColumn !== 'all-time') {
        colA = a.recent;
        colB = b.recent;
    }

      if (colA > colB) {
        return -1;
      }

      if (colA < colB) {
        return 1;
      }

      return 0;


  }

  switch (action.type) {
    case GET_LIST:
      return {...state, campers: action.payload.data};
    case BTN_ACTIVE:
      return {...state, mode: action.mode, sortColumn: action.mode}
    case SORT_LIST:
      var toSort = (state.sort === 'desc') ? 'asc' : 'desc';
      var sorted = [...state.campers];
      (toSort === 'desc') ? sorted.sort(compareDESC) : sorted.sort(compareASC);
      return {...state, sort: toSort, sortColumn: action.sortColumn, campers: sorted}
    default:
      return state;
  }


}



export default CamperListReducer;
