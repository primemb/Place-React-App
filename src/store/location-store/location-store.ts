import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ILocation {
  id: number;
  locationName: string;
  locationCoords: { lat: number; long: number };
  locationType: string;
  locationImage: string;
}

export interface Locations extends Array<ILocation> {}

const initialState: Locations = [];

const locationSlice = createSlice({
  name: "location",
  initialState: initialState,
  reducers: {
    add: (state, action: PayloadAction<ILocation>) => {
      state.push(action.payload);
    },
  },
});

export const { add } = locationSlice.actions;

export default locationSlice.reducer;
