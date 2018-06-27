/*
 */
/* global SimpleMDE sap */
sap.ui.define([
  'jquery.sap.global',
  'sap/ui/core/Control'
],
              function(jQuery, Control) {
                "use strict";

                /**
                 * Constructor for a new Markdown Editor control
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
                      edit: {
                        type: "boolean", defaultValue: true
                      },
                      placeholderText: {
                        type: "String", defaultValue: "Type your note here..."
                      },
                      content: {
                        type: "String"
                      }
                    },
                    events: {
                      "save": {}
                    }
                  },

                  init: function () {

                  },

                  /**
                   * Called when the user presses the Save Button.
                   * @param {object} name
                   * @returns {object}
                   */
                  onSave: function () {
                    var sContent = this._simplemde.value();
                    this.fireSave({content: sContent});
                  },


                  _simplemdeToolbar: function () {
                    var that = this;
                    var editable = this.getEdit();
                    var editToolbar = [
                      "bold",
                      "italic",
                      "strikethrough",
                      "|",
                      "heading",
                      //"heading-smaller",
                      //"heading-bigger",
                      //"heading-1",
                      //"heading-2",
                      //"heading-3",
                      "|",
                      "code",
                      "quote",
                      "|",
                      "unordered-list",
                      "ordered-list",
                      "clean-block",
                      "link",
                      "image",
                      "table",
                      "horizontal-rule",
                      "|",
                      "preview",
                      "side-by-side",
                      "fullscreen",
                      "|",
                      "guide",
                      {
                        name: "save",
                        action: that.onSave.bind(that),
                        className: "fa fa-save", title: "Save"}
                    ];
                    var previewToolbar = [
                      "edit",
                      "fullscreen"
                    ];
                    if (editable) {
                      return editToolbar;
                    }
                    return previewToolbar;
                  },

                  onAfterRendering: function () {
                    var placeholder = this.getPlaceholderText();
                    var editable = this.getEdit();

                    // Most options demonstrate the non-default behavior
                    var simplemde = new SimpleMDE({
                      autoDownloadFontAwesome: false,
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
		        underscoresBreakWords: true
	              },
	              placeholder: placeholder,
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
                      toolbar: this._simplemdeToolbar()
                    });
                    if (!editable) {
                      simplemde.togglePreview();
                    }
                    this._simplemde = simplemde;
                  }

                });
                //
                return editor;
              });
