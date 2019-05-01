import axios from "axios";

const initialState = { 
  purchases: [],
  budgetLimit: null,
  loading: false
}

const REQUEST_BUDGET_DATA = 'REQUEST_BUDGET_DATA'

export function requestBudgetData(){
  const data = axios.get('/api/budget-data')
  return {
    type : REQUEST_BUDGET_DATA,
    payload: data 
  }
}


export default function(state = initialState, action ) {
  return state 
}