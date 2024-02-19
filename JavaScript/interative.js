var tema_valor_novo;
verificar_Mudança_Tema();

function verificar_Mudança_Tema(){
    tema_valor_novo = document.querySelector(".botao_nav:checked").value;
    mudar_Tema(tema_valor_novo);
}

function mudar_Tema(valor_tema){
    if (valor_tema == "Claro"){
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
    } else if (valor_tema == "Escuro"){
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
    } else {
        alert("ola")
    }
}