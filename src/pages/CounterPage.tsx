import { useReducer } from 'react';
import Button from '../components/Button';
import Panel from '../components/Panel';
// import useCounter from '../hooks/useCounter';

const ACTION_INCREMENT_COUNT = 'increment';
const ACTION_CHANGE_VALUE_TO_ADD = 'change-value-to-add';
const ACTION_DECREMENT_COUNT = 'decrement';
const ACTION_SUBMIT = 'submit';

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case ACTION_INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };

    case ACTION_DECREMENT_COUNT:
      return {
        ...state,
        count: state.count - 1,
      };

    case ACTION_CHANGE_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      };

    case ACTION_SUBMIT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0,
      };

    default:
      return state;
  }
};

function CounterPage({ initialCount }: { initialCount: number }) {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);
  // const { count, increment } = useCounter(initialCount);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0,
  });

  const increment = () => {
    // setCount(count + 1);
    dispatch({
      type: ACTION_INCREMENT_COUNT,
    });
  };
  const decrement = () => {
    // setCount(count - 1);
    dispatch({
      type: ACTION_DECREMENT_COUNT,
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    // setValueToAdd(value);
    dispatch({
      type: ACTION_CHANGE_VALUE_TO_ADD,
      payload: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setCount(count + valueToAdd);
    // setValueToAdd(0);
    dispatch({
      type: ACTION_SUBMIT,
    });
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">You clicked {state.count} times</h1>
      <div className="flex flex-row">
        <Button primary outline onClick={increment}>
          Increment
        </Button>
        <Button primary outline onClick={decrement}>
          Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
