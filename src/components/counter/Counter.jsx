import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../store/slices/counter';

export const Counter = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state.counter);
  return (
    <div className="Counter-container">
      <button className="Counter-button" onClick={() => dispatch(decrement())}>
        -
      </button>
      <span className="Counter-value">{value}</span>
      <button className="Counter-button" onClick={() => dispatch(increment())}>
        +
      </button>
    </div>
  );
};
