function createDataset(fields, constraints, sortFields) {
    var ds = DatasetBuilder.newDataset();

    // Adicionando colunas ao dataset
    var colunas = ["Moeda", "Simbolo", "Pais", "Taxa Cambio"];
    for (var i = 0; i < colunas.length; i++) {
        ds.addColumn(colunas[i]);
    }

    // Cache de dados dos filhos (para evitar múltiplas consultas)
    var cacheFilho = {};

    // Definindo as constraints iniciais para o dataset pai
    var parentConstraints = [];
    parentConstraints.push(DatasetFactory.createConstraint("metadata#active", true, true, ConstraintType.MUST));

    // Consultando o dataset pai
    var dsPai = DatasetFactory.getDataset('ds_cadastro_moedas', null, parentConstraints, null);

    for (var iPai = 0; iPai < dsPai.rowsCount; iPai++) {
        var id = dsPai.getValue(iPai, 'metadata#id');
        var vers = dsPai.getValue(iPai, 'metadata#version');

        // Checa se o dataset filho já foi consultado anteriormente (usando o cache)
        var cacheKey = id + "_" + vers;
        var dsFilho;

        // Se o dataset filho já estiver no cache, usamos ele, senão, fazemos a consulta
        if (!cacheFilho[cacheKey]) {
            var constFilho = [];
            constFilho.push(DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST));
            constFilho.push(DatasetFactory.createConstraint('metadata#id', id, id, ConstraintType.MUST));
            constFilho.push(DatasetFactory.createConstraint('metadata#version', vers, vers, ConstraintType.MUST));
            constFilho.push(DatasetFactory.createConstraint('tablename', 'dpTbPlan', 'dpTbPlan', ConstraintType.MUST));

            // Adicionando restrições adicionais conforme os parâmetros passados
            if (constraints != null) {
                for (var i = 0; i < constraints.length; i++) {
                    if (constraints[i].fieldName == 'moeda') {
                        var vlr = constraints[i].initialValue;
                        constFilho.push(DatasetFactory.createConstraint('ds_cadastro_moedas', vlr, vlr, ConstraintType.MUST));
                        break;
                    };
                    if (constraints[i].fieldName == 'simbolo') {
                        var vlr = constraints[i].initialValue;
                        constFilho.push(DatasetFactory.createConstraint('ds_cadastro_moedas', vlr, vlr, ConstraintType.MUST));
                        break;
                    };
                    if (constraints[i].fieldName == 'pais') {
                        var vlr = constraints[i].initialValue;
                        constFilho.push(DatasetFactory.createConstraint('ds_cadastro_moedas', vlr, vlr, ConstraintType.MUST));
                        break;
                    };
                    if (constraints[i].fieldName == 'taxaCambio') {
                        var vlr = constraints[i].initialValue;
                        constFilho.push(DatasetFactory.createConstraint('ds_cadastro_moedas', vlr, vlr, ConstraintType.MUST));
                        break;
                    }
                }
            }

            // Consultando o dataset filho
            dsFilho = DatasetFactory.getDataset('ds_cadastro_moedas', null, constFilho, null);

            // Armazenando o resultado no cache
            cacheFilho[cacheKey] = dsFilho;
        } else {
            // Se os dados já estiverem no cache, usamos diretamente
            dsFilho = cacheFilho[cacheKey];
        }

        // Verificando se o dataset filho contém dados e adicionando ao dataset final
        if (dsFilho != null && dsFilho.rowsCount > 0) {
            for (var i = 0; i < dsFilho.rowsCount; i++) {
                ds.addRow([dsFilho.getValue(i, 'moeda'), dsFilho.getValue(i, 'simbolo'), dsFilho.getValue(i, 'pais'), dsFilho.getValue(i, 'taxaCambio')]);
            }
        }
    }

    return ds;
}