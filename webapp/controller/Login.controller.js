sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("crud.cadastrodefuncionarios.crud.cadastrodefuncionarios.controller.Login", {
            onInit: function () {

            },
            onNavigateHome: function(filePath) {
                window.open("https://skouts.pt/")
            },
            onOpenView1: function (){
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("RegistrodeFuncionario");
			}
        });
    });
