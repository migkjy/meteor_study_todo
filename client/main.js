import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';
import { Accounts } from 'meteor/accounts-base';

import './main.html';

// Acounts config
Accounts.ui.config({
  passwordSignupFields: 'USERNAME_ONLY',
});

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
    /*     Notes.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
*/
    Meteor.call('notes.insert', text);

    // Clear form
    target.text.value = '';

    // Close modal
    $('#addModal').modal('close');

    return false;
  },
});

Template.note.events({
  'click .delete-note': function () {
    // Notes.remove(this._id);
    Meteor.call('notes.remove', this);
    return false;
  },
});
