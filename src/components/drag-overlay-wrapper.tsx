import { Active, DragOverlay, useDndMonitor } from '@dnd-kit/core';
import { useState } from 'react';
import SidebarBtnElement from './sidebar-btn-element';
import { ElementsType, FormElements } from './common/form-elements';

export default function DragOverlayWrapper() {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  useDndMonitor({
    onDragStart: (event) => setDraggedItem(event.active),
    onDragCancel: () => setDraggedItem(null),
    onDragEnd: () => setDraggedItem(null),
  });

  if (!draggedItem) return null;
  let node = <div>No Drag</div>;
  const isSidebarBtnElement = draggedItem.data.current?.isDesignerBtnElement;

  if (isSidebarBtnElement) {
    const type = draggedItem.data.current?.type as ElementsType;
    node = <SidebarBtnElement formElement={FormElements[type]} />;
  }

  return <DragOverlay>{node}</DragOverlay>;
}
