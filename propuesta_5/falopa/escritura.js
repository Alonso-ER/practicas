
//  JS PARA QUE LOS PRODUCTOS APAREZCAN DE FORMA NATURAL
window.addEventListener('load', function carga() {
    axios.get('http://localhost:3002/productos', {
        responseType: 'json'
    }
)
    .then(function(res){
    let table = res.data;
    for(let i=0; i<table.length; i++){
            let j = table[i].id_producto;
        if(table[i].seccion === 'promos'){
            objProm+=
        `<div class="container">
            <a href="/vista.html" id="${table[i].id_producto}" onclick="vista(this)">
                <img id="img_cont" src="${table[i].img_producto}" alt="">
                <div id="celu_name">${table[i].nombre_producto}</div>
                <div id="precio">${table[i].precio_producto}</div>
            </a>
            <div class="agregar-carrito" id="b${j}" onclick="carrito(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                    </svg>
            </div>
        </div>`

        } else if(table[i].seccion === 'nuevos'){
            objNue+=
        `<div class="container">
            <a href="/vista.html" id="${table[i].id_producto}" onclick="vista(this)">
                <img id="img_cont" src="${table[i].img_producto}" alt="">
                <div id="celu_name">${table[i].nombre_producto}</div>
                <div id="precio">${table[i].precio_producto}</div>
            </a>
            <div class="agregar-carrito" id="b${table[i].id_producto}" onclick="carrito(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
            </div>
        </div>`
        }   else if(table[i].seccion === 'electronicos'){
            objEle+=
        `<div class="container">
            <a href="/vista.html" id="${table[i].id_producto}" onclick="vista(this)">
                <img id="img_cont" src="${table[i].img_producto}" alt="">
                <div id="celu_name">${table[i].nombre_producto}</div>
                <div id="precio">${table[i].precio_producto}</div>
            </a>
            <div class="agregar-carrito" id="b${table[i].id_producto}" onclick="carrito(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
            </div>
        </div>`
        } else if(table[i].seccion === 'casa'){
            objCas+=
        `<div class="container">
            <a href="/vista.html" id="${i+1}" onclick="vista(this)">
                <img id="img_cont" src="${table[i].img_producto}" alt="">
                <div id="celu_name">${table[i].nombre_producto}</div>
                <div id="precio">${table[i].precio_producto}</div>
            </a>
            <div class="agregar-carrito" id="b${i}" onclick="carrito(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                    <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                    <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
            </div>
        </div>`
        } else if(table[i].seccion === 'otros'){
            objOtros+=
        `<div class="container">
            <a href="/vista.html" id="${table[i].id_producto}" onclick="vista(this)">
                <img id="img_cont" src="${table[i].img_producto}" alt="">
                <div id="celu_name">${table[i].nombre_producto}</div>
                <div id="precio">${table[i].precio_producto}</div>
            </a>
            <div class="agregar-carrito" id="b${table[i].id_producto}" onclick="carrito(this)">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
                <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
                <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
                </svg>
            </div>
           
        </div>`
        }
        
    }
    document.getElementById('promos').innerHTML = objProm;
    document.getElementById('nuevos').innerHTML = objNue;
    document.getElementById('electronicos').innerHTML = objEle;
    document.getElementById('casa').innerHTML = objCas;
    document.getElementById('otros').innerHTML = objOtros;
    ;})
    .catch(function(err){console.log(err);})
    .then(() => {console.log('si');})
        
    });


