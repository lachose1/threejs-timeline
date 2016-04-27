var _ = require("underscore"),
    Marionette = require("backbone.marionette"),
    OOS = require("../outofsight"),
    ProjectView = require("./project"),
    ProjectsList = require("./projectsList"),
    template = require("../../dist/templates").projects;

var ProjectsView = Marionette.CompositeView.extend({
    template: template,
    childView: ProjectView,
    childViewContainer: "#right-content",
    id: "right-content",
    className: "list-group",
// 
    regions: {
        // mainContainer: "#main-container"
        //sidebar: "#left-sidebar",
        // rightContainer: "#right-content"
    },

    ui: {
        //btnCategory: ".btn-category"
    },

    events: {
        //"click @ui.btnCategory": "handleCategoryClick"
    },

    initialize: function(options) {
        this.listenTo(OOS.vent, "project:Clicked",
                      this.handleProjectClicked);
        // this.contentType = options.contentType;

        // this.mainView = new HomeContentView();
        // switch(this.contentType){
        //     case "home":
        //         this.rightContent = new ProjectsList();
        //         break;
        //     case "about":
        //         break;
        //     default:
        //         this.rightContent = new ProjectsList();
        // }
    },

    onRender: function() {
        // this.sidebar.show(this.mainView);
        // this.rightContainer.show(this.rightContent);
        // this.famocoPreview.show(new FamocoPreviewView({collection: this.collection, pageType: this.pageType}));
    },

    handleProjectClicked: function(model) {
        // console.log(model);
        var html = "<div class='fade-in-2s' id='project-container'>";
        html += "<h2>" + model.get("project_name") + "</h2>";
        html += "<h5>" + model.get("technologies") + " - " + model.get("text_date") + "</h5>";
        html += "<p>" + model.get("description") + "</p>";
        html += "</div>";
        $("#left-sidebar").html(html);
        var width = document.getElementById("project-container").offsetWidth;
        var imgWidth = width / model.get("no_images");
        var imgHtml = "";

        for (i = 1; i <= model.get("no_images"); i++) { 
            imgHtml += "<img width='" + imgWidth + "px' src='" + model.get("image_url") + "image" + i + model.get("image_extension") + "' alt='image'/>";
        }
        $("#project-container").append(imgHtml);
    }
});

module.exports = ProjectsView;
