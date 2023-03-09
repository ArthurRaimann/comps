import Button from '../components/Button';
import useCounter from '../hooks/useCounter';

function CounterPage ({ initialCount }: { initialCount: number }) {

  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <p>You clicked {count} times</p>
      <Button primary outline onClick={increment}>
        Increment
      </Button>
    </div>
  );
}

export default CounterPage;
