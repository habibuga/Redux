/**
 * Tutaj powinien znaleźć się "połączony" reducer
 * Pamiętaj o nazwach pól, powinny być takie jak w treści zadania
 *
 * Nie zapomnij też o exporcie!
 * export default combinedReducer;
 */

import { combineReducers } from "redux";

// counterReducer
import counter from './counter';
// bankReducer
import bank from './bank';

const combinedReducers = combineReducers({ counter, bank });

export default combinedReducers;