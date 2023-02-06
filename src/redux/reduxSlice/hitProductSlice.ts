import {createSlice, type PayloadAction} from '@reduxjs/toolkit';

type HitProductType = {
	nameCategory: string;
	url: string;
};
const initialState: HitProductType[] = [
	{
		nameCategory: '',
		url: '',
	},
];
export const hitProductSlice = createSlice({
	name: 'hitProductState',
	initialState,
	reducers: {
		addHitProduct(state, action: PayloadAction<HitProductType>) {
			state.push(action.payload);
		},
	},
});

export default hitProductSlice.reducer;
export const {addHitProduct} = hitProductSlice.actions;
