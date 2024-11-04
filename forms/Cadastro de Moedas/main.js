class Moedas {
    events = {
        onclickDelete: (thisDiv) => {
            const index = parseInt($(thisDiv).closest('tr')[0].id.replace(/[^0-9]/g, ''), 10);
            FLUIGC.message.confirm({
                message: 'Tem certeza que deseja remover?',
                title: 'Remover Linha',
                labelYes: 'sim',
                labelNo: 'não'
            }, result => {
                if (result) {
                    $("#dpTbPlanTr___" + index).remove();
                }
            });
        },

        onclickAdd: () => {
            if ($('[name^="moeda___"]').length > 0) {
                wdkAddChild('dpTbPlan');
                return;
            }

            const check = this.dataset.checkform();
            if (check) {
                wdkAddChild('dpTbPlan');
            } else {
                const msg = 'Já existe outro registro para esse formulário. Exclua ou edite o existente!';
                this.utils.avisoUsuario(msg, 'danger');
            }
        },

        normalizaMoeda: (obj) => {
            const variavel = obj.id.split('___')[0];
            const valor = obj.value;
            const linha = obj.id.substr(8);
            $(`#${variavel}___${linha}`).val(valor);

            $(`[name^="${variavel}___"]`).each(function () {
                const idx = this.name.split('___')[1];
                if (idx !== linha && $(`#${variavel}___${idx}`).val() === valor) {
                    const msg = `A sigla da ${variavel} deve ser única entre todas as linhas!`;
                    this.utils.avisoUsuario(msg, 'warning', 3000);
                    $(`#${variavel}___${linha}`).val('');
                    return false;
                }
            }.bind(this));
        }
    };

    utils = {
        avisoUsuario(mensagem, tipo, tempo) {
            FLUIGC.toast({
                message: mensagem,
                type: tipo,
                timeout: tempo
            });
        }
    };

    dataset = {
        checkform: () => {
            const constraints = [
                DatasetFactory.createConstraint('dsDescritor', 'Moedas', 'Moedas', ConstraintType.MUST),
                DatasetFactory.createConstraint('metadata#active', true, true, ConstraintType.MUST)
            ];
            const dataset = DatasetFactory.getDataset('ds_cadastro_moedas', null, constraints, null);
            return dataset.values.length === 0;
        },
    }
}

// Exemplo de como criar uma instância da classe Moedas
const moedas = new Moedas();
