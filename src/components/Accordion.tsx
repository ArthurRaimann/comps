import { useState } from 'react';
import { AccordionType } from '../models/accordionType';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

function Accordion({ items }: AccordionType) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (itemIndex: number) => {
    if (itemIndex === expandedIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(itemIndex);
    }
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    return (
      <div className="border" key={item.id}>
        <div className="bg-gray-100" onClick={() => handleClick(index)}>
          <span className="flex items-center">
            {item.label}
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
          </span>
        </div>
        {isExpanded && <div className="p-5">{item.content}</div>}
      </div>
    );
  });

  return <div>{renderedItems}</div>;
}

export default Accordion;
