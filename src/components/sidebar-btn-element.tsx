import { cn } from '@/lib/utils';
import { FormElement } from './common/form-elements';
import { Typography } from './typography';
import { Button } from './ui/button';
import { useDraggable } from '@dnd-kit/core';

export default function SidebarBtnElement({
  formElement,
}: {
  formElement: FormElement;
}) {
  const { listeners, attributes, isDragging, setNodeRef } = useDraggable({
    id: `design-btn-${formElement.type}`,
    data: {
      type: formElement.type,
      isDesignerBtnElement: true,
    },
  });
  return (
    <Button
      ref={setNodeRef}
      variant="outline"
      className={cn(
        'flex flex-col gap-4 items-center h-24 w-24 cursor-gap',
        isDragging && 'ring-2 ring-primary',
      )}
      {...listeners}
      {...attributes}
    >
      {formElement.designBtnElement.icon}
      <Typography variant="small">
        {formElement.designBtnElement.label}
      </Typography>
    </Button>
  );
}
