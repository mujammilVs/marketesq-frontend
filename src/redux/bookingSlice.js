// src/redux/bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const bookingSlice = createSlice({
  name: 'booking',
  initialState: {
    name: '',
    email: '',
    phone: '',
    adults: 1,
    children: 0,
    checkIn: '',
    checkOut: '',
    rooms: 1,
    price: 12430,
  },
  reducers: {
    setBookingData: (state, action) => {
      return { ...state, ...action.payload };
    },
    confirmBooking: (state) => {
      alert("Booking Confirmed!");
    },
  },
});

export const { setBookingData, confirmBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
