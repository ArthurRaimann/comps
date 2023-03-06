import Accordion from '../components/Accordion';

function AccordionPage() {
  const items = [
    {
      id: 'def34',
      label: 'This is a Headline',
      content:
        'This is som content to see something in the body of this component',
    },
    {
      id: 'njdv7',
      label: 'This is a new Headline',
      content:
        'This is som content to see something in the body of this component',
    },
    {
      id: 'nisdkv7',
      label: 'This is a newer Headline',
      content:
        'This is som content to see something in the body of this component',
    },
  ];

  return (
    <div>
      <Accordion items={items} />
    </div>
  );
}

export default AccordionPage;
