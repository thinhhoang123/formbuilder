import { FormElement } from './common/form-elements';
import { Typography } from './typography';
import { Button } from './ui/button';

export default function SidebarBtnElement({
  formElement,
}: {
  formElement: FormElement;
}) {
  return (
    <Button
      variant="outline"
      className="flex flex-col gap-4 items-center h-24 w-24 cursor-gap"
    >
      {formElement.designBtnElement.icon}
      <Typography variant="small">
        {formElement.designBtnElement.label}
      </Typography>
    </Button>
  );
}
