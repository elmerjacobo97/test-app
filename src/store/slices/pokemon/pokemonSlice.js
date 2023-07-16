import { createSlice } from '@reduxjs/toolkit';
import { fetchPokemons } from './thunks';

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: { pokemons: [], loading: false, initialLoadDone: false },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.loading = false;
        state.pokemons = action.payload;
        state.initialLoadDone = true;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
        state.initialLoadDone = true;
      });
  },
});
