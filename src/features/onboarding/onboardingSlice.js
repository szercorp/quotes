/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSeen: false,
};

const onboardingSlice = createSlice({
  name: 'onboard',
  initialState,
  reducers: {
    onboardUser: (state) => {
      state.isSeen = true;
    },
  },
});

export const { onboardUser } = onboardingSlice.actions;

export default onboardingSlice.reducer;
