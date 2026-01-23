import { FormElementInstance } from '@/components/common/form-elements';
import { create } from 'zustand';

type DesignerState = {
  elements: FormElementInstance[];
};
type DesignerAction = {
  addElement: (index: number, element: FormElementInstance) => void;
};
const useDesignerStore = create<DesignerState & DesignerAction>((set) => ({
  elements: [],
  addElement: (index, element) =>
    set((state) => {
      const newElement = [...state.elements];
      newElement.splice(index, 0, element);
      return {
        elements: newElement,
      };
    }),
}));

export default useDesignerStore;
