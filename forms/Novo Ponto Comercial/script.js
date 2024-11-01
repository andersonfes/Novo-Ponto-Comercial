class PontoComercial {
    atividades = {

        atInicial: () => {
            pontoComercial.init.initData()
            pontoComercial.init.initMascaras()
        },

        atAproNegocio: () => {

        },

        atAproSuperintedencia: () => {

        },

        atRevisar: () => {

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
        },

        initData: () => {
            var mySimpleCalendar = FLUIGC.calendar('#dataNascimento', {
                language: 'pt-br',
            }
            ).setMaxDate(new Date());
        }
    };

    utils = {

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
    };

    dataset = {

    };

}

const pontoComercial = new PontoComercial();