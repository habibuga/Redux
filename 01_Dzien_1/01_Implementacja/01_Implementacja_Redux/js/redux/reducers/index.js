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

const combinedReducers = combineReducers({ counter });

export default combinedReducers;
