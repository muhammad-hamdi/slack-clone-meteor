Router.configure({
  layoutTemplate: "app"
});

Router.route('/main/:channel', function () {
    Session.set('channel', this.params.channel);
    this.render('room');
});

Router.route('/', function () {
    if (!Meteor.userId) {
    	this.redirect('/login');
    } else {
    	this.redirect('/main/general');
    }
});