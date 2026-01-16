import { getFormsByUserId } from '@/actions/form';
import FormCard from '@/components/common/form-card';
import { Form } from '@prisma/client';

export default async function FormCards() {
  const forms = await getFormsByUserId();

  return (
    <div className="grid grid-cols-8 gap-4">
      {forms.map((form: Form) => (
        <FormCard key={form.id} form={form} className="col-span-2" />
      ))}
    </div>
  );
}
