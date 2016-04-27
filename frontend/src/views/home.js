var _ = require("underscore"),
    Marionette = require("backbone.marionette"),
    OOS = require("../outofsight"),
    HomeContentView = require("./homeContentView"),
    template = require("../../dist/templates").home;

var HomeView = Marionette.LayoutView.extend({
    template: template,

    regions: {
        // mainContainer: "#main-container"
        // sidebar: "#left-sidebar",
        // rightContainer: "#right-content"
    },

    ui: {
        //btnCategory: ".btn-category"
    },

    events: {
        //"click @ui.btnCategory": "handleCategoryClick"
    },

    initialize: function(options) {
        this.contentType = options.contentType;

        // this.mainView = new HomeContentView();
        // switch(this.contentType){
        //     case "home":
        //         // this.rightContent = new RightContentView();
        //         break;
        //     case "about":
        //         break;
        //     default:
        //         this.rightContent = new RightContentView();
        // }
    },

    onRender: function() {
        // this.sidebar.show(this.mainView);
        // this.rightContainer.show(this.rightContent);
        // this.famocoPreview.show(new FamocoPreviewView({collection: this.collection, pageType: this.pageType}));
    }
});

module.exports = HomeView;
