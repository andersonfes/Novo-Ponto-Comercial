function createDataset(fields, constraints, sortFields) {

    var dataset = DatasetBuilder.newDataset();

    var cep = '';

    /* Pega o valor da constraint */

    if (constraints && constraints.length) {
        for (var i = 0; i < constraints.length; i++) {

            if (constraints[i].fieldName == "cep") {
                cep = constraints[i].initialValue;
            }
        }
    }


    /* faz a chamada do ao serviço retornando um objeto com os valores da requisição */
    try {
        var clientService = fluigAPI.getAuthorizeClientService();
        var data = {
            companyId: getValue("WKCompany") + '',
            serviceCode: 'cep',
            endpoint: cep + '/json/',
            method: 'get',
        }

        var vo = clientService.invoke(JSON.stringify(data));

        if (vo.getResult() == null || vo.getResult().isEmpty()) {
            throw new Exception("Retorno está vazio");
        } else {
            var json = JSON.parse(vo.getResult());
            if (json.erro == "true") {
                dataset.addColumn("Success");
                dataset.addRow('false')
            } else {
                var colunas = ["CEP", "Logradouro", "Bairro", "Cidade", "Estado", "Success"];
                for (var i = 0; i < colunas.length; i++) {
                    dataset.addColumn(colunas[i]);
                }

                dataset.addRow([json.cep, json.logradouro,
                json.bairro, json.localidade, json.uf, true
                ]);
            }

        }
    } catch (err) {
        throw new Exception(err);
    }
    return dataset;

}