import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import {Messages} from '../lib/collections/messages';

import './room.html';

Template.messages.helpers({
	messages: Messages.find({}),
});

Template.footer.events({
	'keypress input': function(e){
		var inputVal = $('.input-box_text').val();

	    if(!!inputVal) {
	      var charCode = (typeof e.which == "number") ? e.which : e.keyCode;

	      if (charCode == 13) {
	        e.stopPropagation();
	        Messages.insert({text: $('.input-box_text').val()});
	        $('.input-box_text').val("");
	        return false;
	      }
	      
	    }
	}
})