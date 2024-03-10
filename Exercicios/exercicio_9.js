class SomadorDeNota{
    constructor(total){
        this.total = total = 0
    }
    adicionarNota(nota){
        this.total += nota
    }

    verTotal(){
        console.log(this.total)
    }
}

const somador = new SomadorDeNota
somador.adicionarNota(8);
somador.adicionarNota(2);
somador.adicionarNota(5);
somador.adicionarNota(6);
somador.verTotal()