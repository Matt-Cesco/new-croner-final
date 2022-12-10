import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Cross2Icon } from '@radix-ui/react-icons';
import MarketoForm from './MarketoForm';

const DialogDemo = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="bg-red uppercase text-white font-bold py-4 px-8 rounded-xl cursor-pointer">
        Get started
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        
        <MarketoForm />
          
        <Dialog.Close asChild>
          <button className="IconButton" aria-label="Close">
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
