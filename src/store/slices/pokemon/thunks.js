import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchPokemons = createAsyncThunk(
  'pokemon/fetchPokemons',
  async () => {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon?limit=10'
    );
    const promises = response.data.results.map((pokemon) =>
      axios.get(pokemon.url)
    );
    const pokemonDetailsResponses = await Promise.all(promises);
    return pokemonDetailsResponses.map((res) => res.data);
  }
);
