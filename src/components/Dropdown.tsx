import { useState } from 'react';
import { GoChevronDown } from 'react-icons/go';
import { DropdownType, DropdownContent } from '../models/dropdownType';

function Dropdown({ options, value, onChange }: DropdownType) {
  const [isOpen, setIsOpen] = useState(false);

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
    <div className="w-48 relative border">
      <div
        className="flex justify-between items-center cursor-pointer border rounded p-3 shadow bg-white w-full"
        onClick={handleClick}
      >
        {value?.label || 'Select...'}
        <GoChevronDown className="text-lg" />
      </div>
      {isOpen && (
        <div className="absolute top-full border rounded p-3 shadow bg-white w-full">
          {optionsList}
        </div>
      )}
    </div>
  );
}

export default Dropdown;
