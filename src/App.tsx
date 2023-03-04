import Button from './Button';
import { GoBell, GoCloudDownload } from 'react-icons/go';

function App() {
  return (
    <div className="App">
      <div>
        <Button primary>
          <GoBell />
          primary
        </Button>
      </div>
      <div>
        <Button secondary>
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
