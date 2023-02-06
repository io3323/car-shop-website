import {combineReducers, configureStore} from '@reduxjs/toolkit';
import controllerSlice from '../reduxSlice/controllerSlice';
import burgerMenuDataSlice from '../reduxSlice/burgerMenuDataSlice';
import hitProductSlice from '../reduxSlice/hitProductSlice';

const rootReducer = combineReducers({
	controllerState: controllerSlice,
	burgerMenuDataState: burgerMenuDataSlice,
	hitProductState: hitProductSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
	reducer: rootReducer,
});

export default store;

