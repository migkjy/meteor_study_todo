import { Mongo } from 'meteor/mongo';
import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

export const Notes = new Mongo.Collection('notes');

Meteor.methods({
  'notes.insert': function (text) {
    check(text, String);

    //  Check if user is Logged in

    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Notes.insert({
      text,
      createdAt: new Date(),
      owner: Meteor.userId(),
      username: Meteor.user().username,
    });
  },
  'notes.remove': function (note) {
    check(note._id, String);
    if (note.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }

    Notes.remove(note._id);
  },
});
