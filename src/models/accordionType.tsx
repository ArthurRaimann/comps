export interface AccordionType {
  items: AccordionItems[];
}

interface AccordionItems {
  id: string;
  label: string;
  content: string;
}
