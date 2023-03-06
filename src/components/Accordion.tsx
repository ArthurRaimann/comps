import { useState } from 'react';
import { AccordionType } from '../models/accordionType';
import { GoChevronLeft, GoChevronDown } from 'react-icons/go';

function Accordion({ items }: AccordionType) {
  const [expandedIndex, setExpandedIndex] = useState(-1);

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
      <div key={item.id}>
        <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleClick(index)}>
            {item.label}
            
            <span className='text-2xl'>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
         
        </div>
        {isExpanded && <div className="p-5 border-b">{item.content}</div>}
      </div>
    );
  });

  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
