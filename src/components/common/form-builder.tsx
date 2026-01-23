'use client';

import { Form } from '@prisma/client';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '../ui/resizable';
import { Typography } from '../typography';
import { Button } from '../ui/button';
import { TextFieldFormElement } from '../fields/text-field';
import SidebarBtnElement from '../sidebar-btn-element';
import Designer from '../designer';
import { updateFormName } from '@/actions/form';
import { toast } from 'sonner';
import { DndContext } from '@dnd-kit/core';
import DragOverlayWrapper from '../drag-overlay-wrapper';
import { validateStringsEqual } from '@/lib/utils';

export default function FormBuilder({ form }: { form: Form }) {
  const handleChangeName = async (newName: string) => {
    if (validateStringsEqual(form.name, newName)) return;
    try {
      await updateFormName(form.id, newName);
      toast('👍🏻 Update form name successfully');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DndContext>
      <ResizablePanelGroup>
        <ResizablePanel defaultSize={40} minSize={300}>
          <div className="w-full p-4 flex items-center justify-between">
            <Typography>Elements</Typography>
          </div>
          <div className="p-4">
            <SidebarBtnElement formElement={TextFieldFormElement} />
          </div>
        </ResizablePanel>
        <ResizableHandle />

        <ResizablePanel defaultSize={100}>
          <div className="border-b w-full p-4 flex items-center justify-between">
            <Typography
              variant="h4"
              contentEditable
              onUpdate={handleChangeName}
            >
              {form.name}
            </Typography>
            <div className="flex gap-2">
              <Button variant="outline">Preview</Button>
              <Button variant="outline">Save</Button>
              <Button>Publish</Button>
            </div>
          </div>
          <Designer />
        </ResizablePanel>
        <DragOverlayWrapper />
      </ResizablePanelGroup>
    </DndContext>
  );
}
