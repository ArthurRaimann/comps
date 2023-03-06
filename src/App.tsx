import { useState } from 'react';
import Dropdown from './components/Dropdown';
import { DropdownContent } from './models/dropdownType';

function App() {
  const [selection, setSelection] = useState<DropdownContent | null>(null);

  const handleSelect = (selection: DropdownContent | null) => {
    setSelection(selection);
  };

  const options = [
    { label: 'Red', value: 'red' },
    { label: 'Blue', value: 'blue' },
    { label: 'Green', value: 'green' },
  ];

  return (
    <div>
      <Dropdown options={options} value={selection} onChange={handleSelect} />
    </div>
  );
}

export default App;
