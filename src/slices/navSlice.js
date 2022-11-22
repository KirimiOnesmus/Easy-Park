
import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    origin: null,
    destination: null,
    travelTimeInformation: null,
    parkingDestination:null,

}

const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    setOrigin: (state, action) => {
        state.origin = action.payload
    },
    setDestination: (state, action) => {
        state.destination = action.payload
    },
    setTravelTimeInformation: (state, action) => {
        state.travelTimeInformation = action.payload
    },
    setParkingDestination:(state,action)=>{
      state.garageDestination=action.payload
    },
  }
})

export const { setOrigin, setDestination, setTravelTimeInformation,setParkingDestination } = navSlice.actions

export const selectOrigin = state => state.nav.origin
export const selectDestination = state => state.nav.destination
export const selectTravelTimeInformation = state => state.nav.travelTimeInformation
export const selectParkingDestination=state=>state.nav.parkingDestination

export default navSlice.reducer