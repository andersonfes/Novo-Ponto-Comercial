class PontoComercial {
    atividades = {

        atInicial: () => {
            pontoComercial.init.initData()
            pontoComercial.init.initMascaras()
        },

        atAproNegocio: () => {
            $('#painel-aprovacao-comercial').removeClass('hide');
            pontoComercial.utils.bloqueiaCampos();

        },

        atAproSuperintedencia: () => {
            $('#painel-superintendencia').removeClass('hide');
            $('#painel-aprovacao-comercial').removeClass('hide');
            pontoComercial.utils.bloqueiaCampos();
        },

        atRevisar: () => {
            $('#dados-revisar').removeClass('hide');
            pontoComercial.utils.bloqueiaCampos();
        },

        reloadProcessDetails: function () {
            pontoComercial.init.initLayout();
        }
    };

    init = {
        initLayout: function () {
            $('.box-label').attr('style', 'padding: 15px 15px 0 15px; margin: 30px 0 15px 0; border: 1px solid #ddd;');
            $('.subtitle-02').attr('style', 'margin: -26px 0 10px 0; background-color: #fff; display: inline-block; font-weight: bold; text-transform: uppercase;');
        },

        initMascaras: () => {
            $('#telefone').mask('(00) 00000-0000');
            $('#docIdentidade').mask('00.000.000-0');
            $('#cep').mask('00000-000');
            $('#numero').mask('0000');
            $('#valor').mask("#.##0,00", { reverse: true });
        },

        initData: () => {
            var mySimpleCalendar = FLUIGC.calendar('#dataNascimento', {
                language: 'pt-br',
            }
            ).setMaxDate(new Date());
        }
    };

    utils = {
        bloqueiaCampos: () => {
            $('#botAtribuir').prop('disabled', true);
            $('.seleciona').prop('disabled', true);
        }

    };

    events = {
        onClickDelete: (thisDiv) => {
            var index = parseInt($(thisDiv).closest('tr')[0].id.replace(/[^0-9\.]/g, ''), 10);
            FLUIGC.message.confirm({
                message: 'Tem certeza que deseja remover?',
                title: 'Remover Linha',
                labelYes: 'Sim',
                labelNo: 'Não'
            }, function (result, el, ev) {
                if (result) {
                    $('#dpTbPlanTr___' + index).remove();
                }
            })
        },

        onclickAdd: () => {
            var index = wdkAddChild('dpTbPlan');
        },

        onChangeObs: (value) => {
            $('#dsObsRevisao').val(value);
        },

        onChangeAprov: (thisDiv) => {
            if (thisDiv.id == 'AproComercial') {
                if (thisDiv.value == 'sim' || thisDiv.value == '') {
                    $('.aprovaObs').addClass('hide');
                } else {
                    $('.aprovaObs').removeClass('hide');
                }
            }

            if (thisDiv.id == 'AproSuperi') {
                if (thisDiv.value == 'sim' || thisDiv.value == '') {
                    $('.superiObs').addClass('hide');
                } else {
                    $('.superiObs').removeClass('hide');
                }
            }
        }
    };

    dataset = {

        buscaCep(verifica) {
            if (verifica.length >= 8) {
                var cep = verifica.replace(/\D/g, '');
                var constraintCep = DatasetFactory.createConstraint('cep', cep, cep, ConstraintType.MUST);

                var datasetCep = DatasetFactory.getDataset("dsCep", null, new Array(constraintCep), null);
                var retorno = datasetCep.values[0];

                var campos = {
                    bairro: retorno.Bairro,
                    cidade: retorno.Cidade,
                    estado: retorno.Estado,
                    logradouro: retorno.Logradouro
                };

                for (var campo in campos) {
                    $('#' + campo).val(campos[campo] || '');
                }
            }
        }

    };

}

const pontoComercial = new PontoComercial();