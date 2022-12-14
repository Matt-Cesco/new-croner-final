import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from '@radix-ui/react-icons';

const AccordionDemo = () => (
  <Accordion.Root type="single" collapsible>
    <Accordion.Item value="item-1">
      <Accordion.Header>
        <Accordion.Trigger className="AccordionTrigger flex items-center">
          <span className='text-base text-gray-600 pr-16'>Select Topics</span>
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
      <Accordion.Content>Accordion content</Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>


);



export default AccordionDemo;
