'use client';

// eslint-disable-next-line import/extensions
import { Note } from '@prisma/client';
import { ListGroup } from 'react-bootstrap';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const NoteItem = ({ note }: { note: Note }) => (
  <ListGroup.Item>
    <p className="fw-lighter">{note.createdAt.toLocaleDateString('en-US')}</p>
    <p>{note.note}</p>
  </ListGroup.Item>

);

export default NoteItem;
