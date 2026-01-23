import CreateFormBtn from '@/components/create-from-btn';
import FormCards from './_components/form-cards';
import { Typography } from '@/components/typography';
import { Separator } from '@/components/ui/separator';

export default function Dashboard() {
  return (
    <div className="container mx-auto">
      <div className="mt-8 space-y-16">
        <div className=" space-y-4">
          <Typography variant="h4">Start with a new form</Typography>
          <Separator />
          <div className="grid grid-cols-8 gap-4">
            <CreateFormBtn className="col-span-2" />
          </div>
        </div>
        <div className=" space-y-4">
          <Typography variant="h4">Recent forms</Typography>
          <Separator />
          <FormCards />
        </div>
      </div>
    </div>
  );
}
