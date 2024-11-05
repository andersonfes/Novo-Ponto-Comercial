function validateForm(form) {
    log.info("-> Início | Cadastro de Moedas | validateForm");

    var arrError = [];
    var indexes = form.getChildrenIndexes("dpTbPlan");
    if (indexes.length <= 0) {
        arrError.push("Não foi incluido nenhum item!");
    }
    if (indexes.length > 0) {
        var linha = 1;
        for (var i in indexes) {
            if (form.getValue("moeda___" + indexes[i]) == "" || form.getValue("moeda___" + indexes[i]) == null) {
                arrError.push("Moeda na linha [" + linha + "] -> Não foi Informado!");
            }
            if (form.getValue("simbolo___" + indexes[i]) == "" || form.getValue("simbolo___" + indexes[i]) == null) {
                arrError.push("Simbolo na linha [" + linha + "] -> Não foi Informado!");
            }
            if (form.getValue("pais___" + indexes[i]) == "" || form.getValue("pais___" + indexes[i]) == null) {
                arrError.push("Pais na linha [" + linha + "] -> Não foi Informado!");
            }
            if (form.getValue("taxaCambio___" + indexes[i]) == "" || form.getValue("taxaCambio___" + indexes[i]) == null) {
                arrError.push("TaxaCambio na linha [" + linha + "] -> Não foi Informado!");
            }
        }
        linha++;
    }
    if (arrError.length > 0) {
        var error = loadErrors(arrError);
        log.info("-> Fim | Cadastro de Moedas | validateForm");
        throw error;
    }
    log.info("-> Fim | Cadastro de Moedas | validateForm");
}

function loadErrors(arrError) {
    var error = "<br><br>Por favor, verifique os campos abaixo.<br><br>";
    for (var i = 0; i < arrError.length; i++) {
        var count = i + 1;
        if (parseInt(i) > 0) {
            arrError[i] = "<br><strong>" + count + "</strong> - " + arrError[i];
        } else {
            arrError[i] = "<strong>" + count + "</strong> - " + arrError[i];
        }
        error += arrError[i];
    }
    return error + "<br><br>";
}