import { Meteor } from 'meteor/meteor';
import {Messages} from '../lib/collections/messages';

Meteor.methods({
	newMessage: function(message){
		message.timestamp = Date.now();
	    message.user = Meteor.userId();
	    Messages.insert(message);
	}
});