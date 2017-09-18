import {Meteor} from 'meteor/meteor';
import {Channels} from '../lib/collections/channels';
import {Messages} from '../lib/collections/messages';

Channels.remove({});
Channels.insert({
  name: "general"
});
Channels.insert({
  name: "random"
});