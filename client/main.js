import { Template } from 'meteor/templating';
import { Notes } from '../lib/collections.js';

import './main.html';

Template.body.helpers({
  notes() {
    return Notes.find({});
  },
});
