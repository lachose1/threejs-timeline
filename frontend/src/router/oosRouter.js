var Marionette = require("backbone.marionette");

var OOSRouter = Marionette.AppRouter.extend({
    appRoutes: {
    	"": "showProjectsPage"
    }
});

module.exports = OOSRouter;
