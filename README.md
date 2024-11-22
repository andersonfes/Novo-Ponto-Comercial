# Novo Ponto Comercial

<div align="center">
<h3>Novo Ponto Comercial</h3>
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
</div>

<div align="center">
<p>---</p>
Configuração e personalizações do projeto de cadastro de novos pontos comerciais.
</div>

## 📝 Conteúdo

- [Sobre](#about)
- [Pré-configuração](#getting_started)
- [Serviços](#services)
- [Campos Criados](#fields)
- [Datasets](#datasets)
- [Template de E-mail](#template)
- [Eventos de Processo](#workflow)
- [Widgets](#widgets)
- [Bibliotecas Utilizadas](#built_using)
- [Autores](#authors)

# 🧐 Sobre <a name="about"></a>
O objetivo deste projeto é facilitar o cadastro de novos pontos comerciais utilizando a plataforma Fluig.

As implementações a seguir devem ser executadas na sequência apresentada, pois algumas dependem da conclusão das etapas anteriores.

# 🏁 Pré-configuração <a name="getting_started"></a>
Configure os seguintes serviços para integração de dados e agendamento de sincronismos de datasets.

## ⚙️ Serviços <a name="services"></a>
Os seguintes serviços são essenciais para o funcionamento do sistema:

- **FluigDSRO**: Conexão direta com o banco de dados do Fluig via JBDC.
- **Fluig**: API padrão do Fluig.
    - URL: `http://SERVIDOR_FLUIG:PORTA`
    - Tipo de Autenticação: Fluig API
    - Teste: `/ecm/api/rest/ecm/processdefinition/getAllProcessDefinition`
- **ECMCustomFieldsService**: Preenche campos customizados nos documentos.

## 🏷️ Papeis e Grupos

- **Papeis**: Não há papeis definidos.
- **Grupos**:
    - **Aprova1**: Responsáveis pela **Aprovação de Novos Negócios**.
    - **Aprova2**: Responsáveis pela **Aprovação da Superintendência**.

# 📑 Campos Criados <a name="fields"></a>

### Formulário principal
- **dsObsRevisao**: Comentários
- **nome**: Nome
- **email**: E-mail
- **telefone**: Telefone
- **docIdentidade**: Documento de Identidade
- **dataNascimento**: Data de Nascimento
- **responsavel**: Responsável
- **switch-6-1**: Quiosque
- **switch-6-2**: Loja
- **switch-3-1 a switch-3-7**: Dias da semana
- **logradouro, bairro, cidade, estado, numero**: Endereço
- **infoAdicional**: Informações Adicionais
- **moeda**: Moeda
- **valor**: Valor
- **AproComercial, ObsComercial, AproSuperi, ObsSuperintendencia**: Campos de aprovação e observação

### Formulário de apoio
- **moeda**: Moeda
- **simbolo**: Símbolo
- **pais**: País
- **taxaCambio**: Taxa de Câmbio

# 📑 Datasets <a name="datasets"></a>

- **ds_novo_ponto_comercial**: Formulário principal do processo.
- **ds_cadastro_moedas**: Formulário de apoio.

## 📧 Template de E-mail <a name="template"></a>
- Não há templates de e-mail definidos.

# Processo: Novo Ponto Comercial

<div align="center">
    <p><img width=500px src="./forms/Novo Ponto Comercial/Novo-ponto-comercial.png" alt="Imagem do processo Novo Ponto Comercial"></p>
    <h3>Detalhamento do Processo de Cadastro de Novo Ponto Comercial</h3>
</div>

Este processo descreve as etapas e configurações necessárias para realizar o cadastro de novos pontos comerciais no sistema Fluig.


# ✔️ Eventos de Processo e Scripts <a name="workflow"></a>
- Nenhum evento de processo ou scripts definidos até o momento.

## ⛏️ Widgets <a name="widgets"></a>
- Nenhum widget definido para este processo.

## ⛏️ Bibliotecas Utilizadas <a name="built_using"></a>

- [Fluig Developer](https://style.fluig.com/) - JavaScript library - Manipulação de DOM.
- [jQuery](https://jquery.com) - Manipulação de DOM.
- [jQuery Mask](https://igorescobar.github.io/jQuery-Mask-Plugin/) - Máscaras para campos de input.

## ✍️ Autores <a name="authors"></a>

- [@andersonfes](https://github.com/andersonfes) - Desenvolvedor responsável.
