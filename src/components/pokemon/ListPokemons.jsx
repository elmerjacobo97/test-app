import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPokemons } from '../../store/slices/pokemon/thunks';

export const ListPokemons = () => {
  const dispatch = useDispatch();
  const { pokemons, loading, initialLoadDone } = useSelector(
    (state) => state.pokemon
  );

  useEffect(() => {
    if (!initialLoadDone) {
      dispatch(fetchPokemons());
    }
  }, [dispatch, initialLoadDone]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="pokemon-grid">
      {pokemons.map((pokemon, i) => (
        <div key={i} className="pokemon-card">
          <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          <h2>{pokemon.name}</h2>
          <p>
            {pokemon.types.map((type) => (
              <span key={type.slot}>{type.type.name} </span>
            ))}
          </p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      ))}
    </div>
  );
};
