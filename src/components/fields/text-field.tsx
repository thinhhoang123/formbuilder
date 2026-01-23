import { Type } from 'lucide-react';
import { ElementsType, FormElement } from '../common/form-elements';

const type: ElementsType = 'TextField';

export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: 'Text Field',
      placeholder: 'Enter text here',
      required: false,
      helpText: '',
    },
  }),
  designBtnElement: {
    icon: <Type className="size-6" />,
    label: 'Text Field',
  },
  designerComponent: () => <div>Text Field Designer</div>,
  formComponent: () => <input type="text" className="border p-2 rounded" />,
  propertiesComponent: () => <div>Text Field Properties</div>,
};
