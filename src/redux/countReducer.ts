import { createSlice } from "@reduxjs/toolkit";
type counterProps = {
[id:number]: number
    
    }
const initialState: counterProps = {
1:0,
2:0,
3:0
}
export const countSlice = createSlice({
name: 'counter',
initialState,
reducers: {
changeCount: (prevState, action) => ({
...prevState,
[action.payload]: prevState[action.payload] + 1



})


}

}

)
export const {changeCount}  = countSlice.actions
export default countSlice.reducer
