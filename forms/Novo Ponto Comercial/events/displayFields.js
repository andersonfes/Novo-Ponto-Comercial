function displayFields(form, customHTML) {
    log.info("-> Início | Novo Ponto Comercial | displayFields");

    var numAtividade = getValue("WKNumState");
    var usuarioAtual = getValue("WKUser");

    customHTML.append('<script>\n');
    customHTML.append('\n\tvar MBPM = MBPM || {};\n');
    customHTML.append("\tMBPM.wkuser = '" + usuarioAtual + "';\n");

    if (form.getFormMode() != 'ADD' && form.getFormMode() != 'MOD') {
        form.setHidePrintLink(false);
        customHTML.append("\tpontoComercial.atividades.reloadProcessDetails();\n")
    } else {
        form.setHidePrintLink(true);
        if (numAtividade == '0' || numAtividade == INICIO) {
            customHTML.append("\tpontoComercial.atividades.atInicial();\n");
        }
        if (numAtividade == NEGOCIOS) {
            customHTML.append("\tpontoComercial.atividades.atAproNegocio();\n");
        }
        if (numAtividade == SUPERINTENDENCIA) {
            customHTML.append("\tpontoComercial.atividades.atAproSuperintedencia();\n");
        }
        if (numAtividade == REVISAR) {
            customHTML.append("\tpontoComercial.atividades.atRevisar();\n");
        }
    }

    customHTML.append("\n</script>");

    log.info("-> Fim | Novo Ponto Comercial | displayFields");
}