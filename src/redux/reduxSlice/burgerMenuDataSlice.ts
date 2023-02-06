import {createSlice, type PayloadAction} from '@reduxjs/toolkit';
type MasElementType = {
	nameElement?: string;
	masElementFirst?: FirstMasArray[];
};
type FirstMasArray = {
	name: string;
};
const initialState: MasElementType = {
	nameElement: '',
	masElementFirst: [
		{
			name: '',
		},
	],
};
export const burgerMenuDataSlice = createSlice({
	name: 'burgerMenuDataState',
	initialState,
	reducers: {
		addNameElement(state, action: PayloadAction<string>) {
			state = {...state, nameElement: action.payload};
			console.log(state.nameElement);
			return state;
		},
		addFirstMas(state, action: PayloadAction<MasElementType>) {
			const mas: FirstMasArray[] = [{name: ''}];
			action.payload.masElementFirst?.forEach(data => {
				mas.push(data);
			});
			state = {...state, masElementFirst: mas};
			console.log(state, 'element');
			return state;
		},
	},
});

export default burgerMenuDataSlice.reducer;

export const {addNameElement, addFirstMas} = burgerMenuDataSlice.actions;
