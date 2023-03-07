import { useEffect, useState, useRef } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { DropdownType, DropdownContent } from '../models/dropdownType';
import Panel from './Panel';

function Dropdown({ options, value, onChange }: DropdownType) {
  const [isOpen, setIsOpen] = useState(false);
  const divEl = useRef();

  useEffect(() => {
    const handler = (event: any) => {
      if (!divEl.current) {
        return;
      }

      if (!divEl.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handler, true);

    return () => {
      document.removeEventListener('click', handler);
    };
  }, []);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (selectedOption: DropdownContent) => {
    onChange(selectedOption);
    setIsOpen(false);
  };

  const optionsList = options.map((option, index) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={`${index}${option.value}`}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={divEl} className="w-48 relative border">
      <Panel
        className="flex justify-between items-center cursor-pointer"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </Panel>
      {isOpen && <Panel className="absolute top-full ">{optionsList}</Panel>}
    </div>
  );
}

export default Dropdown;
