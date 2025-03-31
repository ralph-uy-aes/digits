'use client';

import { Card } from 'react-bootstrap';
// eslint-disable-next-line import/extensions
import { Contact } from '@/lib/validationSchemas';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const StuffItem = ({ contact }: { contact:Contact }) => (
  <Card className="h-100">
    <Card.Header>
      <Card.Img src={contact.image} style={{ width: '75px' }} />
      <Card.Title>
        {`${contact.firstName} ${contact.lastName}`}
      </Card.Title>
      <Card.Subtitle className="mb-2 text-muted">
        {contact.address}
      </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        {contact.description}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default StuffItem;
