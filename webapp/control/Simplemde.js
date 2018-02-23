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
                  var editor = Control.extend("caderno.control.Simplemde", {
                      /**
                       * Control API
                       */
                      metadata: {
                          properties: {

                          }
                      }

                      init: function () {
                          
                      }
                  })
              });
                                             
