class Recebe{
    constructor(model,controller){
        this.areaText = document.querySelector('#inputList');
        this.areaNumber = document.querySelector('#inputNumber');
        this.btnAdd = document.querySelector('#addList');
        this.btnAdd.onclick = this.salvarDadosView.bind(this);
        this.areaContatos = document.querySelector('#lista');
        this.controller = controller;
        this.model = model;
    }


    salvarDadosView(){
        let dadosInputText = this.areaText.value;
        let dadosInputNumber = this.areaNumber.value;

        if(dadosInputText == "" && dadosInputNumber ==""){
            alert("Preencha todos os campos corretamente");
        }else{
            this.controller.salvarDadosControl(dadosInputText, dadosInputNumber);
            this.show();
        }
    }

    exclueDadosView(code){
        this.controller.excluirDadosControl(code);
        this.show();
    }

    alterRelacaoView(code){
        this.controller.alterRelacaoControl(code);
        this.show();
    }
    
    show(){
        this.areaContatos.innerHTML = '';
        for (var i = 0;i < this.model.vetor.length; i++) {
          let lista = this.model.vetor[i];
          
          this.areaContatos.innerHTML += '<div class="totalList">' +
              '<div class="listaUnica">' +
              '  <pi id="relacaoList">'+lista.alterRelacao()+'</p>'+
              '</div>'+
              '<div class="btnRelacao">'+
              '<button id="btnRelacao" data-id="'+lista.code+'" onclick="view.alterRelacaoView('+lista.code+')"><i id="coracao" class="material-icons btnAction">favorite</i></button>'+
              '</div>'+
              '<div class="btnExcluir">'+
                '<button id ="btnExcluir" data-id="'+lista.code+'" onclick="view.exclueDadosView('+lista.code+')" name="exluirButton"><i id="lixeira" class="material-icons btnAction">delete</i></button>'+
              '</div>'+
            '</div>';
        }
    }
}