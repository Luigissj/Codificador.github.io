var tema_valor_atual;
var tema_valor_novo;
verificar_Mudança_Tema();

function verificar_Mudança_Tema(){
    tema_valor_novo = document.querySelector(".botao_nav:checked").value;
    if (tema_valor_atual == tema_valor_novo){
        alert("Você ja está nesse tema")
    } else {
        tema_valor_atual = document.querySelector(".botao_nav:checked").value;
        alert("Mudando tema...");
        mudar_Tema(tema_valor_novo);
    }
}

function mudar_Tema(valor_tema){
    if (valor_tema == "Claro"){
        document.documentElement.style.setProperty("--cor-fundo-body", "#CDFADB")
        document.documentElement.style.setProperty("--cor-fundo-header", "#EDFFBB")
        document.documentElement.style.setProperty("--cor-fundo-header-hover", "#d8f38c")
        document.documentElement.style.setProperty("--cor-texto", "#C68484")
        document.documentElement.style.setProperty("--cor-texto-hover", "#D26B6B")
        document.documentElement.style.setProperty("--cor-fundo-caixas", "#F6FDC3")
    } else if (valor_tema == "Escuro"){
        document.documentElement.style.setProperty("--cor-fundo-body", "#161A30")
        document.documentElement.style.setProperty("--cor-fundo-header", "#0C1D76")
        document.documentElement.style.setProperty("--cor-fundo-header-hover", "#489015")
        document.documentElement.style.setProperty("--cor-texto", "#F0ECE5")
        document.documentElement.style.setProperty("--cor-texto-hover", "#97AB44")
        document.documentElement.style.setProperty("--cor-fundo-caixas", "#1d2f52")
    } else {
        alert("ola")
    }
}