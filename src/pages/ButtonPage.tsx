import Button from '../components/Button';
import { GoBell, GoCloudDownload } from 'react-icons/go';

function ButtonPage() {
  const handleClick = () => {
    console.log('Click');
  };

  return (
    <div className="flex flex-col space-y-4">
      <div>
        <Button primary onClick={handleClick}>
          <GoBell />
          primary
        </Button>
      </div>
      <div>
        <Button primary outline onClick={handleClick}>
          <GoBell />
          primary
        </Button>
      </div>
      <div>
        <Button secondary className="m-2">
          <GoCloudDownload />
          secondary
        </Button>
      </div>
      <div>
        <Button secondary outline className="m-3">
          <GoCloudDownload />
          secondary
        </Button>
      </div>
      <div>
        <Button warning>warning</Button>
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
        <Button success outline rounded>
          success
        </Button>
      </div>
      <div>
        <Button danger rounded>
          danger
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

export default ButtonPage;
