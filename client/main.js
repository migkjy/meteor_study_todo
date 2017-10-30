import { Template } from 'meteor/templating';
import './main.html';

Template.note.helpers({
  notes: [
    { text: 'My note 1' },
    { text: 'My note 2' },
    { text: 'My note 3' },
  ],
});
