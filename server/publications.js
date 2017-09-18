import { Meteor } from 'meteor/meteor';
import {Messages} from '../lib/collections/messages';
import {Channels} from '../lib/collections/channels';

Meteor.publish('messages', function(channel){
	return Messages.find({channel: channel});
});

Meteor.publish('channels', function () {
    return Channels.find();
});

Meteor.publish('usernames', function(){
	return Meteor.users.find({}, {fields: {
		"username": 1,
		"services.github.username": 1
	}});
});
