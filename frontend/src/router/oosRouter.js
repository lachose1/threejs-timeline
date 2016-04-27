var Marionette = require("backbone.marionette");

var OOSRouter = Marionette.AppRouter.extend({
    appRoutes: {
    	"": "showHomePage",
    	"about": "showAboutPage",
    	"contact": "showContactPage",
    	"projects": "showProjectsPage"
    }
});

module.exports = OOSRouter;
