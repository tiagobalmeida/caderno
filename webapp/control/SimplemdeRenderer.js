sap.ui.define([],
	          function() {
	              "use strict";

	              /**
	               */
	              var SimplemdeRenderer = {};

	              /**
	               * Renders the HTML for the control, using the provided {@link sap.ui.core.RenderManager}.
	               *
	               * @param {sap.ui.core.RenderManager} oRm RenderManager object
	               * @param {sap.ui.core.Control} oControl An object representation of the control that will be rendered
	               */
	              SimplemdeRenderer.render = function(oRm, oControl) {
		              oRm.write("<textarea");
		              oRm.writeControlData(oControl);
		              oRm.writeClasses();
		              oRm.writeStyles();
		              oRm.write(">");
		              oRm.write("</textarea>");
	              };

	              return SimplemdeRenderer;

              }, /* bExport= */ true);
