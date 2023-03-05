import Button from './Button';
import { GoBell, GoCloudDownload } from 'react-icons/go';

function App() {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <div className="App">
      <div>
        <Button primary onClick={handleClick}>
          <GoBell />
          primary
        </Button>
      </div>
      <div>
        <Button secondary className="m-5">
          <GoCloudDownload />
          secondary
        </Button>
      </div>
      <div>
        <Button warning outline>
          warning
        </Button>
      </div>
      <div>
        <Button success rounded>
          success
        </Button>
      </div>
      <div>
        <Button danger outline rounded>
          danger
        </Button>
      </div>
    </div>
  );
}

export default App;
