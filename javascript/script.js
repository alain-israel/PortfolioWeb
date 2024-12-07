let menuVisible = false;

// Funcion que oculta o muestra el menu
function mostrarOcultarMenu() {
    if(menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

// Funcion que cierra el menu al elegir una opcion
function seleccionar () {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Funcion que muestra las animaciones de las skills
function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("csharp");
        habilidades[2].classList.add("htmlcss");
        habilidades[3].classList.add("canva");
        habilidades[4].classList.add("sql");
        habilidades[5].classList.add("vue");
        habilidades[6].classList.add("react");
        habilidades[7].classList.add("facpal");
        habilidades[8].classList.add("org");
        habilidades[9].classList.add("equipo");
        habilidades[10].classList.add("liderazgo");
        habilidades[11].classList.add("tforma");
        habilidades[12].classList.add("met");
        habilidades[13].classList.add("autodi");
    }
}


// Funcion que detecta el movimiento del scroll de la pagina
window.onscroll = function() {
    efectoHabilidades();
}

