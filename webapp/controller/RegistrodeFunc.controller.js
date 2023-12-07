sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/ui/core/routing/History",
    "sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, History, JSONModel) {
        "use strict";

        return Controller.extend("crud.cadastrodefuncionarios.crud.cadastrodefuncionarios.controller.RegistrodeFunc", {
            onInit: function () {
                this.getView().setModel(new JSONModel(),"funcionarioModel")

            },
            onOpenDialog : function () {
                if (!this.pDialog) {
                    this.pDialog = this.loadFragment({
                        name: "crud.cadastrodefuncionarios.crud.cadastrodefuncionarios.view.CreateRegister"
                    });
                } 
                this.pDialog.then(function(oDialog) {
                    oDialog.open();
                });
            },
            onCloseDialog: function(){
                this.byId("fragRegisterId").close();
            },
            onNavBack: function () {
                    var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                    oRouter.navTo("RouteView1", true);
                
            },
            onRegistrarFunc: function () {
                let oData = this.getView().getModel("funcionarioModel").getData();
                this.getOwnerComponent().getModel().create("/FuncionariosSet", oData, {
                    success: function (oData) {
                        new sap.m.MessageBox.success("Funcionários Registrados com Sucesso!");
                    },error: function (error) {
                        new sap.m.MessageBox.error("Erro ao Registrar Funcionário");
                       
                    } 
                });
            },
            onDelete: function () {
                
            }
        });
    });
