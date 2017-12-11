import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsISLoading } from './items';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsISLoading
});
