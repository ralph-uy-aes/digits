'use client';

import { Contact, Note } from '@prisma/client';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import NoteItem from './NoteItem';
import AddNoteForm from './AddNoteForm';
// eslint-disable-next-line import/extensions

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ contact, notes }: { contact: Contact; notes: Note[] }) => (
  <Card className="h-100">
    <Card.Header>
      <Card.Img variant="top" src={contact.image} style={{ width: '75px' }} />
      <Card.Title>{`${contact.firstName} ${contact.lastName}`}</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">{contact.address}</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>{contact.description}</Card.Text>
      <ListGroup variant="flush">
        {notes.map((note) => <NoteItem key={note.id} note={note} />)}
      </ListGroup>
      <AddNoteForm contact={contact} />
      <p className="blockquote-footer">{contact.owner}</p>
    </Card.Body>
  </Card>

);

export default ContactCard;
