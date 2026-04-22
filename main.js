// Datos de los productos
const productos = {
    MX: {
        nombre: "IMMUNOCAL MX",
        texto: 'Immunocal®, proteína de origen completamente natural, contiene el valor biológico más elevado entre todas las ' +
                'proteínas disponibles para el consumo. Ha demostrado clínicamente su capacidad para incrementar los niveles de glutatión '+
                'en el organismo.',
        imagen: 'Imagenes/MX.png',
        enlace: 'https://www.immunotec.com/es-MX/saravazquez/products/immunocal',
        contacto: 'https://wa.me/528126239665?text=Hola quiero más información sobre Immunocal MX.',
        color: '#00348e'
    },
    Platinum: {
        nombre: "IMMUNOCAL PLATINUM",
        texto: 'Immunocal Platinum ofrece una solución completa que promueve un envejecimiento saludable. Esta fórmula avanzada une los beneficios fundamentales '+
                'de Immunocal con dos componentes innovadores, ofreciendo un enfoque completo hacia el bienestar y la longevidad.',
        imagen: 'Imagenes/Platinum.png',
        enlace: 'https://www.immunotec.com/es-MX/saravazquez/products/immunocal-platinum',
        contacto: 'https://wa.me/528126239665?text=Hola quiero más información sobre Immunocal Platinum.',
        color: '#6f7074'
    },
    Sport: {
        nombre: "IMMUNOCAL SPORT",
        texto: 'Fórmula avanzada diseñada para optimizar la salud inmunológica y cardiovascular, mejorando simultáneamente el rendimiento físico general. '+
                'Induce la vasodilatación y mejora el flujo sanguíneo, beneficiando tanto a órganos internos como al tejido muscular.',
        imagen: 'Imagenes/Sport.png',
        enlace: 'https://www.immunotec.com/es-MX/saravazquez/products/immunocal-sport',
        contacto: 'https://wa.me/528126239665?text=Hola quiero más información sobre Immunocal Sport.',
        color: '#141414'
    },
    Optimizer: {
        nombre: "IMMUNOCAL OPTIMIZER",
        texto: 'Superalimento excepcional que integra una selección de más de 50 vegetales y frutas ricos en fitonutrientes. '+
                'El aliado perfecto para ayudar a combatir el estrés oxidativo, así como '+
                'favorecer la salud cardiovascular y luchar contra la inflamación.',
        imagen: 'Imagenes/Optimizer.png',        
        enlace: 'https://www.immunotec.com/es-MX/saravazquez/products/immunocal-booster',
        contacto: 'https://wa.me/528126239665?text=Hola quiero más información sobre Immunocal Optimizer.',
        color: '#5c9e1f'
    },
    Performance: {
        nombre: "IMMUNOCAL OPTIMIZER PERFORMANCE",
        texto: 'Enriquecido con fuentes naturales de cafeína como el guaraná, el té verde y el extracto de café verde, junto con selenio y vitaminas C y B12. Este catalizador ayuda a combatir el cansancio y la fatiga y protegerte contra el estrés oxidativo.',
        imagen: 'Imagenes/Performance.png',   
        enlace: 'https://www.immunotec.com/es-MX/saravazquez/products/immunocal-booster-energy-performance',
        contacto: 'https://wa.me/528126239665?text=Hola quiero más información sobre Immunocal Optimizer Performance.',
        color: '#fe9300'
    },
    Jamaica: {
        nombre: "OPTIMIZER PERFORMANCE FLOR DE JAMAICA",
        texto: 'Enriquecido con fuentes naturales de cafeína como el guaraná, el té verde y el extracto de café verde, junto con selenio y vitaminas C y B12. Este catalizador ayuda a combatir el cansancio y la fatiga y protegerte contra el estrés oxidativo.',
        imagen: 'Imagenes/Jamaica.png',   
        enlace: 'https://www.immunotec.com/es-MX/saravazquez/products/immunocal-booster-energy-hibiscus',
        contacto: 'https://wa.me/528126239665?text=Hola quiero más información sobre Optimizer Performance Flor de Jamaica.',
        color: '#ed1c35'
    },
    Resveratrol: {
        nombre: "MULTI + RESVERATROL",
        texto: 'Multi+Resveratrol es una fórmula excepcional '+
                'compuesta por 21 vitaminas, minerales y nutrientes esenciales, incluye componentes únicos como la clorela y el resveratrol.',
        imagen: 'Imagenes/Resveratrol.png',   
        enlace: 'https://www.immunotec.com/es-MX/saravazquez/products/multi-resveratrol',
        contacto: 'https://wa.me/528126239665?text=Hola quiero más información sobre Multi + Resveratrol.',
        color: '#12a561',
        zIndex: 6
    },
    Probiotico: {
        nombre: "PROBIOTICO 3+",
        texto: 'Probio 3+ es un simbiótico altamente efectivo que combina probióticos y extracto de arándano rojo rico '+
                'en antioxidantes para promover un sistema digestivo más saludable.',
        imagen: 'Imagenes/Probiotico.png',   
        enlace: 'https://www.immunotec.com/es-MX/saravazquez/products/probio3',
        contacto: 'https://wa.me/528126239665?text=Hola quiero más información sobre Probiotico 3+.',
        color: '#cc3848',
        zIndex: 5
    },
    KLC:{
        nombre: "KLC-D",
        texto: 'KLC-D garantiza una absorción mineral óptima, convirtiéndolo en la elección ideal para el fortalecimiento y crecimiento óseo.',
        imagen: 'Imagenes/Calcio.png',
        enlace: 'https://www.immunotec.com/es-MX/saravazquez/products/calcium',
        contacto: 'https://wa.me/528126239665?text=Hola quiero más información sobre KLC-D.',
        color: '#d36849',
        zIndex: 4
    },
    Bionutric:{
        nombre: "BIONUTRIC",
        texto: 'Bionutric es una fórmula única con seis ingredientes para ayudar a mejorar la salud de las articulaciones, frenar el deterioro articular '+
                ' y reduce la inflamación.',
        imagen: 'Imagenes/Bionutric.png',
        enlace: 'https://www.immunotec.com/es-MX/saravazquez/products/contralenta',
        contacto: 'https://wa.me/528126239665?text=Hola quiero más información sobre Bionutric.',
        color: '#4d1187',
        zIndex: 3
    },
    Omega:{
        nombre: "OMEGA GEN V",
        texto: 'Omega Gen V, diseñado para apoyar tu salud cardíaca, cerebral y general. Fórmula de cinco componentes distingida de otros productos'+
                ' convirtiéndola en una solución superior y conveniente para el bienestar general.',
        imagen: 'Imagenes/Omega.png',
        enlace: 'https://www.immunotec.com/es-MX/saravazquez/products/omega-gen-v',
        contacto: 'https://wa.me/528126239665?text=Hola quiero más información sobre Omega Gen V.',
        color: '#f5a562',
        zIndex: 2
    },
    Zenity:{
        nombre: "ZENITY",
        texto: 'Suplemento para dormir de doble acción, sin melatonina, diseñado para ayudar a tu mente y cuerpo a relajarse de forma natural. Esta'+
                ' fórmula apoya un sueño más profundo, noches más tranquilas y mañanas más claras sin fármacos.',
        imagen: 'Imagenes/Zenity.png',
        enlace: 'https://www.immunotec.com/es-MX/saravazquez/products/serent200',
        contacto: 'https://wa.me/528126239665?text=Hola quiero más información sobre Zenity.',
        color: '#54367c',
        zIndex: 1
    }
}

//Indices para mostrar contenido en dispositivos moviles
const productOrder = ["MX", "Platinum", "Sport", "Optimizer", "Performance", "Jamaica"];
let currentIndex = 0;

//Cambia el contenido del producto mostrado
function changeProduct(section, product){
    document.querySelector('.'+section+' #nombre').innerHTML = productos[product].nombre;
    document.querySelector('.'+section+' #texto').innerHTML = productos[product].texto;
    document.querySelector('.'+section+' #imagen').src = productos[product].imagen;
    document.querySelector('.'+section+' #enlace').href = productos[product].enlace;
    document.querySelector('.'+section+' #contacto').href = productos[product].contacto;
    document.querySelector('.'+section).style.background = productos[product].color;
}

//Cambia el producto mostrado con las flechas en dispositivos moviles
function changeProductArrow(direction) {
    if (direction === "next") {
        currentIndex = (currentIndex + 1) % productOrder.length;
    } else if (direction === "sprev") {
        currentIndex = (currentIndex - 1 + productOrder.length) % productOrder.length;
    }

    const productKey = productOrder[currentIndex];
    changeProduct("immunocal", productKey);
}


//Animacion de las tarjetas y actualizacion del panel de pastillas
const cards = document.querySelectorAll(".card");
const stackArea = document.querySelector(".stack");
const containerImg = document.querySelectorAll('.img-container');
//Convierte el NodeElement a Arreglo para mapearlo
const containerImgArray = Array.from(containerImg);

//Actualiza el panel de pastillas con la informacion del producto activo
function updateProductPanel(productKey) {
    document.querySelector('.pastillas h2').innerHTML = productos[productKey].nombre;
    document.querySelector('.pastillas p').innerHTML = productos[productKey].texto;
    document.querySelector('.pastillas a#comprar').href = productos[productKey].enlace;
    document.querySelector('.pastillas a#wpp').href = productos[productKey].contacto;
    document.querySelector('.pastillas a').style.background = productos[productKey].color;

    //Mapea cada uno de los contenedores
    const zIndexMap = containerImgArray.map((_, i) => containerImg.length - i);

    // Obtener index del producto activo
    const activeIndex = [...containerImg].findIndex(
        p => p.dataset.producto === productKey
    );

    //Por cada uno de los contenedores
    containerImg.forEach((product, i) => {
        const angle = (i-activeIndex) * 8;
        product.style.background = productos[product.dataset.producto].color;
        product.style.zIndex = zIndexMap[i];

        //Si es el producto activo, que esté recto
        if (i === activeIndex) {
            product.style.transform = `rotate(0deg)`;
            return;
        }

        //Si el producto aun no ha pasado
        if (i-activeIndex > 0) {
            //Actualiza el angulo
            product.style.transform = `rotate(-${angle}deg)`;
        } 
        //Si ya pasó, sale de la pantalla
        else {
            product.style.transform = `translateX(-100vw) rotate(${angle}deg)`;
        }
    })
}

function getActiveCard() {
    for (let i = 0; i < cards.length; i++) {
        if (!cards[i].classList.contains("away")) {
            return cards[i];
        }
    }
}

function rotateCards() {
    let angle = 0;
    cards.forEach((card, index) => {
        if (card.classList.contains("away")) {
            card.style.transform = `translateY(-120vh) rotate(-48deg)`;
        } else {
            card.style.transform = ` rotate(${angle}deg)`;
            angle = angle - 8;
            card.style.zIndex = cards.length - index;
        }
    });
}

rotateCards();

window.addEventListener("scroll", () => {
    let distance = window.innerHeight * 0.35;
    let topVal = stackArea.getBoundingClientRect().top;
    let index = -1 * (topVal / distance + 1);

    index = Math.floor(index);

    for (i = 0; i < cards.length; i++) {
        if (i <= index) {
        cards[i].classList.add("away");
        } else {
        cards[i].classList.remove("away");
        }
    }
    rotateCards();

    const activeCard = getActiveCard();

    if (activeCard) {
        const key = activeCard.dataset.producto;
        updateProductPanel(key);
    }
});