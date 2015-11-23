'use strict';

import * as ActionTypes from '../actionTypes';

export function addGroceryItem(payload) {
	return {
		type: ActionTypes.ADD_GROCERY,
		payload
	};
}

export function addGroceryItemAsync(payload) {
	return (dispatch, getState) => {
		setTimeout(() => {
			dispatch(addGroceryItem(payload));
		}, 1000);
	};
}