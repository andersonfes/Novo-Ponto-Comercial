function enableFields(form) {
    log.info("-> Início | Novo Ponto Comercial | enableFields");

    var numAtividade = getValue("WKNumState");

    log.info('valor do numAtividade' + numAtividade)

    // Checando a atividade e desabilitando os campos correspondentes
    if (numAtividade == NEGOCIOS) {
        desativaSessao('atInicial', form);
    }

    if (numAtividade == SUPERINTENDENCIA) {
        desativaSessao('atInicial', form);
        desativaSessao('atAproSuperintendencia', form);
    }

    if (numAtividade == REVISAR) {
        desativaSessao('atInicial', form);
    }

    log.info("-> Fim | Novo Ponto Comercial | enableFields");
}

function desativaSessao(numAtividade, form) {
    log.info('entrei no function' + numAtividade)
    if (numAtividade == 'atInicial') {
        form.setEnabled('nome', false);
        form.setEnabled('email', false);
        form.setEnabled('telefone', false);
        form.setEnabled('docIdentidade', false);
        form.setEnabled('dataNascimento', false);
        form.setEnabled('cep', false);
        form.setEnabled('numero', false);
        form.setEnabled('infoAdicional', false);
        form.setEnabled('moeda', false);
        form.setEnabled('valor', false);

        var indexes = form.getChildrenIndexes("dpTbPlan");

        for (var i = 0; i < indexes.length; ++i) {
            form.setEnabled("responsavel___" + indexes[i], false);
        }
    }

    if (numAtividade == 'atAproSuperintendencia') {
        form.setEnabled('AproComercial', false);
        form.setEnabled('ObsComercial', false);
    }

    if (numAtividade == 'atRevisar') {
        form.setEnabled('AproComercial', false);
        form.setEnabled('ObsComercial', false);
        form.setEnabled('AproSuperi', false);
        form.setEnabled('ObsSuperintendencia', false);
    }
}
