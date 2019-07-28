class actionDataBase{
    constructor(nome, telefone, code){
        this.nome = nome;
        this.telefone = telefone;
        this.code = code;
        this.relacao = false;
    }

    alterRelacao(){
        if(this.relacao){
            return "<div class='relacao'>FIQUEI</div>" + "<div class='nomeContato'>" + this.nome + "</div>" + "<div class='numberContato'>" + this.telefone +"</div>";
        }else{
            return "<div class='relacao'>NÃO FIQUEI</div>" + "<div class='nomeContato'>" + this.nome + "</div>" +  "<div class='numberContato'>" + this.telefone +"</div>";
        }
    }
}