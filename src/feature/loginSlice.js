import { createSlice } from "@reduxjs/toolkit";
const initialState={
    user:{},

}
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
        state.user=action.payload
    },
  },
});
export const {loginSuccess}=loginSlice.actions

export default loginSlice.reducer;
