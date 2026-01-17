import { getFormById } from '@/actions/form';
import FormBuilder from '@/components/common/form-builder';

export default async function BuildIdPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const form = await getFormById(Number(id));
  return (
    <div className="h-[calc(100vh-63px)]">
      <FormBuilder form={form} />
    </div>
  );
}
