/* global sap */
sap.ui.define([
], function() {
	"use strict";
    // ============================================================
    // Constants
    // ============================================================
	return  {
        // dummy Id for a new note
        NOTE_ID_NEW: "new",
        // different save methods the app supports
        NOTE_SAVE_METHOD_REST: 1,    // Rest endpoint
        NOTE_SAVE_METHOD_GDRIVE: 2   // Google Drive folder
        
    };
});
