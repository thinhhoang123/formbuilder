import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { formatDistance } from 'date-fns';

import { Form } from '@prisma/client';
import { Typography } from '../typography';
import { Badge } from '../ui/badge';
export default function FormCard({
  form,
  className,
}: {
  form: Form;
  className?: string;
}) {
  return (
    <Card
      className={`hover:border-primary hover:bg-primary/5 hover:cursor-pointer ${className}`}
    >
      <CardHeader>
        <CardTitle>{form.name}</CardTitle>
        <CardDescription>
          {formatDistance(form.createdAt, new Date(), { addSuffix: true })}
        </CardDescription>
        <CardAction>
          {form.published ? (
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600"
            >
              Published
            </Badge>
          ) : (
            <Badge>Draft</Badge>
          )}
        </CardAction>
      </CardHeader>
      <CardContent>
        <Typography variant="muted">{form.description}</Typography>
      </CardContent>
      <CardFooter className="flex-col gap-2"></CardFooter>
    </Card>
  );
}
