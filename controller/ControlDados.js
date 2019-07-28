class ajusteDados{
    constructor(modulo){
        this.modulo = modulo;
    }

    salvarDadosControl(nome, telefone){
        let Contato = new actionDataBase(nome, telefone, this.modulo.vetor.length);
        this.modulo.salvaDados(Contato);
    }

    excluirDadosControl(code){
        this.modulo.exclueDados(code);
    }

    alterRelacaoControl(code){
        let trocaRelacao = this.modulo.alterRelacaoModel(code);
        trocaRelacao.relacao = true;
    }



}