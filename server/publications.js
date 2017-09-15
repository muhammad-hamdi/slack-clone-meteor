import { Meteor } from 'meteor/meteor';
import {Messages} from '../lib/collections/messages';

Meteor.publish('messages', function(){
	return Messages.find();
});

Meteor.publish('usernames', function(){
	return Meteor.users.find({}, {fields: {
		"username": 1,
		"services.github.username": 1
	}});
});