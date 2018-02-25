// remember to look for ES6 importing in docs
import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

import './styles/styles.scss';
import 'normalize.css/normalize.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 100, createdAt: 21000 }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 200, createdAt: 11000 }));
store.dispatch(setTextFilter('water'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log(visibleExpenses);

ReactDOM.render(<AppRouter />, document.getElementById('app'));