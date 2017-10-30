import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';
import { Accounts } from 'meteor/accounts-base';

import './main.html';

Template.body.helpers({
  notes() {
    return Notes.find({});
  },
});

Template.add.events({
  'submit .add-form': function () {
    event.preventDefault();
    // console.log(123);

    // Get input value
    const target = event.target;
    const text = target.text.value;
    // console.log(text);

    // Insert note into collection
    Notes.insert({
      text,
      createdAt: new Date(),
    });

    // Clear form
    target.text.value = '';

    // Close modal
    $('#addModal').modal('close');

    return false;
  },
});

Template.note.events({
  'click .delete-note': function () {
    Notes.remove(this._id);
    return false;
  },
});
