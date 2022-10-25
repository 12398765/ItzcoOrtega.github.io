window.addEventListener("load", function () {
    new Glider(document.querySelector(".carousel__lista"), {
        slidesToShow: 1,    //número de elementos a mostrar
        slidesToScroll: 1,  //Número de elementos al hacer scroll
        draggable: true,
        dots: '.carousel__indicadores',
        arrows: {
            prev: '.carousel__anterior',
            next: '.carousel__siguiente'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    itemWidth: 150,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    itemWidth: 150,
                    duration: 0.25
                }
            }
        ]
    });

    new Glider(document.querySelector(".carousel__listaProyects"), {
        slidesToShow: 1,    //número de elementos a mostrar
        slidesToScroll: 1,  //Número de elementos al hacer scroll
        draggable: false,
        dots: '.carousel__indicadoresProyecto',
        arrows: {
            prev: '.carousel__anteriorProject',
            next: '.carousel__siguienteProject'
        },
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 775,
                settings: {
                    // Set to `auto` and provide item width to adjust to viewport
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    itemWidth: 150,
                    duration: 0.25
                }
            }, {
                // screens greater than >= 1024px
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    itemWidth: 150,
                    duration: 0.25
                }
            }
        ]
    });
})

var cont = 0;
const verMenu = () => {
    if (cont == 0) {
        document.querySelector(".items-hamburguesa").classList.add("after");
        document.querySelector(".content-All").classList.add("mas");
        document.querySelector(".content-All").classList.remove("menos");

        cont = 1;
    } else {
        document.querySelector(".items-hamburguesa").classList.remove("after");
        document.querySelector(".items-hamburguesa").classList.add("before");
        document.querySelector(".content-All").classList.add("menos");
        document.querySelector(".content-All").classList.remove("mas");
        cont = 0;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    efects();
});

function prof() {
    desactivarEfects();
    setTimeout(() => {
        efects();
        window.location.href = "#quienSoy";
    }, 100);
}

const efects = () => {
    document.querySelector(".h1Quien").classList.add("rot");
    document.querySelector(".contenidoQuien").classList.add("opac");
    document.querySelector(".quien2").classList.add("opac");
    document.querySelector(".programWeb").classList.add("efecto");
    document.querySelector(".newCode").classList.add("efecto");
}

function desactivarEfects() {
    document.querySelector(".h1Quien").classList.remove("rot");
    document.querySelector(".contenidoQuien").classList.remove("opac");
    document.querySelector(".quien2").classList.remove("opac");
    document.querySelector(".programWeb").classList.remove("efecto");
    document.querySelector(".newCode").classList.remove("efecto");
}

document.querySelector(".html").addEventListener("mouseover", () => {
    document.querySelector(".html").classList.add("efecto");
})
document.querySelector(".css").addEventListener("mouseover", () => {
    document.querySelector(".css").classList.add("efecto");
})
document.querySelector(".js").addEventListener("mouseover", () => {
    document.querySelector(".js").classList.add("efecto");
})
document.querySelector(".bots").addEventListener("mouseover", () => {
    document.querySelector(".bots").classList.add("efecto");
})
document.querySelector(".php").addEventListener("mouseover", () => {
    document.querySelector(".php").classList.add("efecto");
})
document.querySelector(".lar").addEventListener("mouseover", () => {
    document.querySelector(".lar").classList.add("efecto");
})
document.querySelector(".mongodb").addEventListener("mouseover", () => {
    document.querySelector(".mongodb").classList.add("efecto");
})
document.querySelector(".py").addEventListener("mouseover", () => {
    document.querySelector(".py").classList.add("efecto");
})



document.querySelector(".html").addEventListener("mouseout", () => {
    document.querySelector(".html").classList.remove("efecto");
})
document.querySelector(".css").addEventListener("mouseout", () => {
    document.querySelector(".css").classList.remove("efecto");
})
document.querySelector(".js").addEventListener("mouseout", () => {
    document.querySelector(".js").classList.remove("efecto");
})
document.querySelector(".bots").addEventListener("mouseout", () => {
    document.querySelector(".bots").classList.remove("efecto");
})
document.querySelector(".php").addEventListener("mouseout", () => {
    document.querySelector(".php").classList.remove("efecto");
})
document.querySelector(".lar").addEventListener("mouseout", () => {
    document.querySelector(".lar").classList.remove("efecto");
})
document.querySelector(".mongodb").addEventListener("mouseout", () => {
    document.querySelector(".mongodb").classList.remove("efecto");
})
document.querySelector(".py").addEventListener("mouseout", () => {
    document.querySelector(".py").classList.remove("efecto");
})



document.querySelector(".react").addEventListener("mouseover", () => {
    document.querySelector(".react").classList.add("efecto");
})
document.querySelector(".cSharp").addEventListener("mouseover", () => {
    document.querySelector(".cSharp").classList.add("efecto");
})
document.querySelector(".next").addEventListener("mouseover", () => {
    document.querySelector(".next").classList.add("efecto");
})
document.querySelector(".angular").addEventListener("mouseover", () => {
    document.querySelector(".angular").classList.add("efecto");
})
document.querySelector(".vuejs").addEventListener("mouseover", () => {
    document.querySelector(".vuejs").classList.add("efecto");
})



document.querySelector(".react").addEventListener("mouseout", () => {
    document.querySelector(".react").classList.remove("efecto");
})
document.querySelector(".cSharp").addEventListener("mouseout", () => {
    document.querySelector(".cSharp").classList.remove("efecto");
})
document.querySelector(".next").addEventListener("mouseout", () => {
    document.querySelector(".next").classList.remove("efecto");
})
document.querySelector(".angular").addEventListener("mouseout", () => {
    document.querySelector(".angular").classList.remove("efecto");
})
document.querySelector(".vuejs").addEventListener("mouseout", () => {
    document.querySelector(".vuejs").classList.remove("efecto");
})