var tema_valor_novo;
var estadoCorPreta;
var botaoCor;

verificar_Mudança_Tema();

function verificar_Mudança_Tema(){
    estadoCorPreta = localStorage.getItem("corPretaMemoria");

    try{
        var teste = document.querySelector(".botao_nav:checked").value;
        console.log("Botao Marcado: " + teste);
        tema_valor_novo = (document.querySelector(".botao_nav:checked").value) == "Claro" || "Escuro" ? document.querySelector(".botao_nav:checked").value : null;
    }catch(error){
        console.log("ERRO: " + error);
    }
    console.log(tema_valor_novo);

    if((tema_valor_novo == "Claro") || (tema_valor_novo == "Escuro")){
        botaoCor = tema_valor_novo == "Escuro" ? true : false;
        console.log("BotãoCor: " + botaoCor);
    }
   
   /* if(corPreta == null){
        console.log("BLOCO NULL");
        mudar_Tema(botaoCor);
    }else*/ if(botaoCor == true){
        console.log("BLOCO BOTAO ESCURO");
        mudar_Tema(!botaoCor);
    }else if(botaoCor == false){
        console.log("BLOCO BOTAO BRANCO");
        mudar_Tema(!botaoCor);
    }else if(estadoCorPreta == "true"){
        console.log("BLOCO ESTAD0 ESCURO");
        mudar_Tema(false);
    }else if(estadoCorPreta == "false"){
        console.log("BLOCO ESTADO BRANCO");
        mudar_Tema(true);
    }
    console.log("CorPreta: " + estadoCorPreta);
    console.log("FINAL DO BLOCO");
}

function mudar_Tema(corClara){
    if (corClara){
        document.documentElement.style.setProperty("--cor-fundo-body", "#CDFADB")
        document.documentElement.style.setProperty("--cor-fundo-header", "#EDFFBB")
        document.documentElement.style.setProperty("--cor-fundo-header-hover", "#d8f38c")
        document.documentElement.style.setProperty("--cor-texto", "#C68484")
        document.documentElement.style.setProperty("--cor-texto-hover", "#D26B6B")
        document.documentElement.style.setProperty("--cor-fundo-caixas", "#F6FDC3")
        document.querySelector(".cabecalho_SobreMim_Imagem").setAttribute("src", "Image/Sobre mim - Light.png")
        document.querySelector(".cabecalho_ENIGMA_Imagem").setAttribute("src", "Image/Decodificador - Light.png")
        document.querySelector(".main_links_Linkedin").setAttribute("src", "Image/Linkedin - Light.png")
        document.querySelector(".main_links_Github").setAttribute("src", "Image/Github - Light.png")
        document.querySelector(".main_links_Facebook").setAttribute("src", "Image/Facebook - Light.png")   
        localStorage.setItem("corPretaMemoria", false);
        console.log("CHECKED CLARO");
    } else if (!corClara){
        document.documentElement.style.setProperty("--cor-fundo-body", "#161A30")
        document.documentElement.style.setProperty("--cor-fundo-header", "#0C1D76")
        document.documentElement.style.setProperty("--cor-fundo-header-hover", "#201F32")
        document.documentElement.style.setProperty("--cor-texto", "#F0ECE5")
        document.documentElement.style.setProperty("--cor-texto-hover", "#97AB44")
        document.documentElement.style.setProperty("--cor-fundo-caixas", "#1d2f52")
        document.querySelector(".cabecalho_SobreMim_Imagem").setAttribute("src", "Image/Sobre_Mim - Dark.png")
        document.querySelector(".cabecalho_ENIGMA_Imagem").setAttribute("src", "Image/Decodificador - Dark.png")
        document.querySelector(".main_links_Linkedin").setAttribute("src", "Image/Linkedin - Dark.png")
        document.querySelector(".main_links_Github").setAttribute("src", "Image/Github - Dark.png")
        document.querySelector(".main_links_Facebook").setAttribute("src", "Image/Facebook - Dark.png")
        localStorage.setItem("corPretaMemoria", true);
        console.log("CHECKED ESCURO");
    }
}