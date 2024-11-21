function validateForm(form) {
    log.info("-> Início | Novo Ponto Comercial | validateForm");

    var arrError = [];
    var indexes = form.getChildrenIndexes("dpTbPlan");

    var campos = {
        nome: "Nome",
        telefone: "Telefone",
        email: "E-mail",
        docIdentidade: "Documento de Identidade",
        dataNascimento: "Data de Nascimento",
        cep: "Cep",
        numero: "Número",
        moeda: "Moeda",
        valor: "Valor",
        usercolorpreference: "Tipo do ponto"
    };

    for (var campo in campos) {
        var campoValue = form.getValue(campo);

        if (isFieldEmpty(campoValue)) {
            arrError.push('O campo <strong>' + campos[campo] + '</strong>, não pode estar vazio.');
        }
    }

    if (indexes.length <= 0) {
        arrError.push("Não foi incluido nenhum <strong>Responsáveis</strong>");
    }

    if (indexes.length > 0) {
        var linha = 1;
        for (var i in indexes) {
            if (isFieldEmpty(form.getValue("responsavel___" + indexes[i]))) {
                arrError.push("O campo <strong>Responsável</strong> na linha <strong>" + linha + "</strong>, Não foi Informado!");
            }
        }
    }

    var dias = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];

    var algumDiaSelecionado = false;

    for (var i = 0; i < dias.length; i++) {

        var diaValue = form.getValue(dias[i]);

        if (diaValue == dias[i]) {
            algumDiaSelecionado = true;
            break;
        }
    }

    if (!algumDiaSelecionado) {
        arrError.push('Selecione ao menos um <strong>dia de Funcionamento</strong> da semana. Este campo é obrigatório.');
    }

    if (arrError.length > 0) {
        var error = loadErrors(arrError);
        throw error;
    }

    log.info("-> Início | Novo Ponto Comercial | validateForm");
}

function isFieldEmpty(value) {
    return value == "" || value == null || value == undefined
}

function loadErrors(arrError) {
    var error = "   <strong>Por favor, verifique os campos abaixo:</strong><br>";

    for (var i = 0; i < arrError.length; i++) {
        var count = i + 1;

        if (parseInt(i) > 0) {
            arrError[i] = "<br><strong>" + count + "</strong> - " + arrError[i];
        }
        else {
            arrError[i] = "<strong>" + count + "</strong> - " + arrError[i];
        }
        error += arrError[i];
    }
    return error;
}