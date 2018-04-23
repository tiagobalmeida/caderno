sap.ui.define([
  "jz/caderno/controller/Base.controller"
], function(BaseController) {
  "use strict";

  return BaseController.extend("jz.caderno.controller.NoteEdit", {

    routeName: "note-edit",

    init: function () {
      BaseController.init.apply(arguments);
    },

    onRouteMatched: function (oEvent) {
      var args = event.getParameters();
      if (args.noteId === this.Constants.NOTE_ID_NEW) {

      }
    },

    // ============================================================
    // User Action handlers. They should all start with "do"
    // ============================================================
    doSaveNote: function () {
      // To save a note, we first determine where to save it.
      // This is stored in the AppSettings model.
      var settings = this.AppSettings;
      if (settings.save.method === this.Constants.NOTE_SAVE_METHOD_REST){

      }
    }



  });
});
