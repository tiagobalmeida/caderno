sap.ui.define(
    [],
    function(){
        "use strict";

        return {

            getTags: function() {
                let toTag = (name) => { return {name: name, selected: false}}; 
                return ["UI5", "Password", "ABAP", "SCP"].map(toTag);
            }
            
        };
    });
