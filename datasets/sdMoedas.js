function createDataset(fields, constraints, sortFields) {
    var ds = DatasetBuilder.newDataset();

    // Adicionando colunas ao dataset
    ds.addColumn("simbolo");
    ds.addColumn("nomeMoeda");
    ds.addColumn("pais");
    ds.addColumn("taxaCambio");

    // Lista de moedas
    var moedas = [
        { simbolo: "R$", nome: "Real", pais: "Brasil", taxaCambio: "1" },
        { simbolo: "US$", nome: "Dólar Americano", pais: "Estados Unidos", taxaCambio: "5.25" },
        { simbolo: "U$", nome: "Peso Uruguaio", pais: "Uruguai", taxaCambio: "0.12" },
        { simbolo: "€", nome: "Euro", pais: "Zona do Euro", taxaCambio: "6.00" },
        { simbolo: "¥", nome: "Yen Japonês", pais: "Japão", taxaCambio: "0.047" }
    ];

    // Adicionando as moedas ao dataset
    for (var i = 0; i < moedas.rowsCount; i++) {
        ds.addRow(new Array(moedas[i].simbolo, moedas[i].nome, moedas[i].pais, moedas[i].taxaCambio));
    }

    return ds;
}
