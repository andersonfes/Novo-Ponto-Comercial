function validateForm(form) {
    var arrError = [];
    var indexes = form.getChildrenIndexes("dpTbPlan");

    if (indexes <= 0) {
        arrError.push("É necessário inserir uma moeda!")
    } else {
        var linha = 1;

        for (var i = 0; indexes.length; i++) {
            if (form.getValue("moeda___" + indexes[i]) == '' || form.getValue("moeda___" + indexes[i]) == null) {
                arrError.push(
                    "O campo: <b>Moeda</b> na linha " +
                    linha +
                    ", não pode ficar vazio"
                );
            }

            if (form.getValue("simbolo___" + indexes[i]) == '' || form.getValue("simbolo___" + indexes[i]) == null) {
                arrError.push(
                    "O campo: <b>Simbolo</b> na linha " +
                    linha +
                    ", não pode ficar vazio"
                );
            }

            if (form.getValue("pais___" + indexes[i]) == '' || form.getValue("pais___" + indexes[i]) == null) {
                arrError.push(
                    "O campo: <b>Pais</b> na linha " +
                    linha +
                    ", não pode ficar vazio"
                );
            }

            if (form.getValue("taxaCambio___" + indexes[i]) == '' || form.getValue("taxaCambio___" + indexes[i]) == null) {
                arrError.push(
                    "O campo: <b>TaxaCambio</b> na linha " +
                    linha +
                    ", não pode ficar vazio"
                );
            }
        }
    }


}