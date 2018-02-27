/*
 */
sap.ui.define([
    'jquery.sap.global',
    'sap/ui/core/Control'
],
              function(jQuery, Control) {
                  "use strict";

                  /**
                   * Constructor for a new Camera control.
                   *
                   * @param {string} [sId] id for the new control, generated automatically if no id is given
                   * @param {object} [mSettings] initial settings for the new control
                   *
                   * @class
                   *
                   * @public
                   * @alias openui5.camera.Camera
                   */
                  var editor = Control.extend("jz.caderno.control.Simplemde", {
                      /**
                       * Control API
                       */
                      metadata: {
                          properties: {

                          }
                      },

                      init: function () {
                          
                      },

                      onAfterRendering: function () {
                          // Most options demonstrate the non-default behavior
                          var simplemde = new SimpleMDE({
	                          autofocus: true,
	                          autosave: {
		                          enabled: false,
		                          uniqueId: "MyUniqueID",
		                          delay: 1000,
	                          },
	                          blockStyles: {
	                          },
	                          element: document.getElementById(this.getId()),
	                          forceSync: true,
	                          indentWithTabs: false,
	                          initialValue: "Hello world!",
	                          insertTexts: {
		                          horizontalRule: ["", "\n\n-----\n\n"],
		                          image: ["![](http://", ")"],
		                          link: ["[", "](http://)"],
		                          table: ["", "\n\n| Column 1 | Column 2 | Column 3 |\n| -------- | -------- | -------- |\n| Text     | Text      | Text     |\n\n"],
	                          },
	                          lineWrapping: false,
	                          parsingConfig: {
		                          allowAtxHeaderWithoutSpace: true,
		                          strikethrough: false,
		                          underscoresBreakWords: true,
	                          },
	                          placeholder: "Type here...",
	                          promptURLs: true,
	                          renderingConfig: {
		                          singleLineBreaks: false,
		                          codeSyntaxHighlighting: true
	                          },
	                          shortcuts: {
	                          },
	                          showIcons: ["code", "table"],
	                          spellChecker: true,
	                          status: true,
	                          styleSelectedText: false,
	                          tabSize: 4,
	                          toolbar: true,
	                          toolbarTips: true
                          });
                      }

                  });
              });
