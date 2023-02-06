import { createSlice } from '@reduxjs/toolkit'

type InitialType = {
  controllerStatus: boolean;
}
const initialState: InitialType = {
  controllerStatus: false,
}
export const controllerSlice = createSlice({
  name: 'controllerState',
  initialState: initialState,
  reducers:{
    changeState(state){
      let resultState = false;
      if (state.controllerStatus){
        resultState = false;
      }else{
        resultState = true;
      }
      state.controllerStatus = resultState;
      return state;
    }
  }
})

export default controllerSlice.reducer;

export const {changeState} = controllerSlice.actions;
