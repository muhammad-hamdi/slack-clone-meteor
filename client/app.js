import {Meteor} from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Messages} from '../lib/collections/messages';
import {Channels} from '../lib/collections/channels';

import './room.html';

Meteor.subscribe('messages');
Meteor.subscribe('usernames');
Meteor.subscribe('channels');

Template.messages.onCreated(function() {
  var self = this;
  self.autorun(function() {
    self.subscribe('messages', Session.get('channel'));
  });
});

Template.header.helpers({
	channel: function() {
		return Session.get('channel');
	},
})

Template.listings.helpers({
	channels: function() {
		return Channels.find({});
	},
});
Template.channel.helpers({
	active: function() {
		if (Session.get('channel') === this.name) {
			return "active";
		} else {
			return "";
		}
	},
});

Template.messages.helpers({
	messages: Messages.find({}),
});

Template.footer.helpers({
	name: function() {
		var user = Meteor.users.findOne({_id: Meteor.userId});
		return user.username;
	},
})

Template.footer.events({
	'keypress input': function(e){
		var inputVal = $('.input-box_text').val();

	    if(!!inputVal) {
	      var charCode = (typeof e.which == "number") ? e.which : e.keyCode;

	      if (charCode == 13) {
	        e.stopPropagation();

	        Meteor.call('newMessage', {
	        	text: $('.input-box_text').val(),
	        	channel: Session.get('channel')
	        });

	        $('.input-box_text').val("");
	        return false;
	      }

	    }
	}
});

Template.registerHelper("usernameFromId", function (userId) {
    var user = Meteor.users.findOne({_id: userId});
    if (typeof user === "undefined") {
        return "Anonymous";
    }
    if (typeof user.services.github !== "undefined") {
        return user.services.github.username;
    }
    return user.username;
});

Template.registerHelper("timestampToTime", function (timestamp) {
    var date = new Date(timestamp);
    var hours = date.getHours();
    var minutes = "0" + date.getMinutes();
    var seconds = "0" + date.getSeconds();

    return hours + ':' + minutes.substr(minutes.length-2) + ':' + seconds.substr(seconds.length-2);
});