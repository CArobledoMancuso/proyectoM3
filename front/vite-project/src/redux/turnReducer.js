import { createSlice } from "@reduxjs/toolkit";

const initialState = { 
  turns: [], 
};

export const turnSlice = createSlice({
  name: 'turnState',
  initialState,
  reducers: {
    getTurns: (state, action) => {
      state.turns = action.payload;
    },
    cancelAppointment: (state, action) => {
      const turnoId = action.payload;
      const turnoIndex = state.turns.findIndex(turno => turno.id === turnoId);
      if (turnoIndex !== -1) {
        state.turns[turnoIndex].status = 'cancel';
      }
    },
  },
});


export const { getTurns, cancelAppointment } = turnSlice.actions;
export default turnSlice.reducer;
