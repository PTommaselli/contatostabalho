class TrataModel {
    constructor(){
        this.vetor = [];
    }

    salvaDados(recebeDados){
        this.vetor.push(recebeDados);
    }

    exclueDados(code){
        this.vetor.splice(code,1);
    }

    alterRelacaoModel(code){
        return this.vetor.find((contato) =>{
            return contato.code == code; 
        })
    }
}