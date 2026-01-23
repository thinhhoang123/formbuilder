'use state';
import { cn } from '@/lib/utils';
import { DragEndEvent, useDndMonitor, useDroppable } from '@dnd-kit/core';
import { Typography } from './typography';
import useDesignerStore from '@/stores/desinger.store';
import {
  ElementsType,
  FormElementInstance,
  FormElements,
} from './common/form-elements';

export default function Designer() {
  const elements = useDesignerStore((state) => state.elements);
  const addElement = useDesignerStore((state) => state.addElement);

  const { setNodeRef, isOver } = useDroppable({
    id: 'designer-drop-area',
    data: {
      isDesignerDropArea: true,
    },
  });

  useDndMonitor({
    onDragEnd: (event: DragEndEvent) => {
      const { active, over } = event;
      if (!active || !over) return;

      const isSidebarBtnElement = active.data.current?.isDesignerBtnElement;
      if (isSidebarBtnElement) {
        const type = active.data.current?.type as ElementsType;
        const newElement = FormElements[type].construct(crypto.randomUUID());
        addElement(0, newElement);
      }
    },
  });

  console.log(elements);
  return (
    <div className="w-full h-screen">
      <div
        ref={setNodeRef}
        className={cn(
          'border rounded-lg m-6 h-full p-4',
          isOver && 'ring-2 ring-primary',
        )}
      >
        {isOver && (
          <div className="w-full">
            <div className="h-[120px] rounded-md bg-primary/10"></div>
          </div>
        )}
        {!isOver && elements.length < 0 && (
          <Typography className="w-full h-full flex justify-center items-center">
            Drop here
          </Typography>
        )}
        {elements.length > 0 && (
          <div>
            {elements.map((element) => (
              <DesignerElementWrapper element={element} key={element.id} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function DesignerElementWrapper({ element }: { element: FormElementInstance }) {
  const DesignerElement = FormElements[element.type].designerComponent;
  return <DesignerElement />;
}
