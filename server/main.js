import { Meteor } from 'meteor/meteor';
import {Channels} from '../lib/collections/channels';

Meteor.startup(() => {
	Channels.remove({});
	Channels.insert({
	  name: "general"
	});
	Channels.insert({
	  name: "random"
	});
});
