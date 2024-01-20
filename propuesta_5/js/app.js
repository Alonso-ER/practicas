//   CLASE PARA DEFINIR LOS PRODUCTOS

// VARIABLES GLOBALES
let objProm = '';  
let objNue = '';
let objEle = '';
let objCas = '';
let objOtros = '';

//  JS PARA QUE LOS PRODUCTOS APAREZCAN DE FORMA NATURAL
// window.addEventListener('load', function carga(){
//     for(let i=0; i<Productos.length; i++){
        
//         if(Productos[i]._secc === 'promos'){
//             objProm+=
//         `<div class="container">
//             <a href="/vista.html" id="${i}" onclick="vista(this)">
//                 <img id="img_cont" src="${Productos[i]._img}" alt="">
//                 <div id="celu_name">${Productos[i]._nombre}</div>
//                 <div id="precio">${Productos[i]._precio}</div>
//             </a>
//             <div class="agregar-carrito" id="b${i}" onclick="carrito(this)">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
//                     <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
//                     <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
//                     </svg>
//             </div>
//         </div>`

//         } else if(Productos[i]._secc === 'nuevos'){
//             objNue+=
//         `<div class="container">
//             <a href="/vista.html" id="${i}" onclick="vista(this)">
//                 <img id="img_cont" src="${Productos[i]._img}" alt="">
//                 <div id="celu_name">${Productos[i]._nombre}</div>
//                 <div id="precio">${Productos[i]._precio}</div>
//             </a>
//             <div class="agregar-carrito" id="b${i}" onclick="carrito(this)">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
//                     <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
//                     <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
//                 </svg>
//             </div>
//         </div>`
//         }   else if(Productos[i]._secc === 'electronicos'){
//             objEle+=
//         `<div class="container">
//             <a href="/vista.html" id="${i}" onclick="vista(this)">
//                 <img id="img_cont" src="${Productos[i]._img}" alt="">
//                 <div id="celu_name">${Productos[i]._nombre}</div>
//                 <div id="precio">${Productos[i]._precio}</div>
//             </a>
//             <div class="agregar-carrito" id="b${i}" onclick="carrito(this)">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
//                     <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
//                     <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
//                 </svg>
//             </div>
//         </div>`
//         } else if(Productos[i]._secc === 'casa'){
//             objCas+=
//         `<div class="container">
//             <a href="/vista.html" id="${i}" onclick="vista(this)">
//                 <img id="img_cont" src="${Productos[i]._img}" alt="">
//                 <div id="celu_name">${Productos[i]._nombre}</div>
//                 <div id="precio">${Productos[i]._precio}</div>
//             </a>
//             <div class="agregar-carrito" id="b${i}" onclick="carrito(this)">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
//                     <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
//                     <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
//                 </svg>
//             </div>
//         </div>`
//         } else if(Productos[i]._secc === 'otros'){
//             objOtros+=
//         `<div class="container">
//             <a href="/vista.html" id="${i}" onclick="vista(this)">
//                 <img id="img_cont" src="${Productos[i]._img}" alt="">
//                 <div id="celu_name">${Productos[i]._nombre}</div>
//                 <div id="precio">${Productos[i]._precio}</div>
//             </a>
//             <div class="agregar-carrito" id="b${i}" onclick="carrito(this)">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-cart-plus" viewBox="0 0 16 16">
//                 <path d="M9 5.5a.5.5 0 0 0-1 0V7H6.5a.5.5 0 0 0 0 1H8v1.5a.5.5 0 0 0 1 0V8h1.5a.5.5 0 0 0 0-1H9z"/>
//                 <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7h-8.17zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0"/>
//                 </svg>
//             </div>
           
//         </div>`
//         }
        
//     }
//     document.getElementById('promos').innerHTML = objProm;
//     document.getElementById('nuevos').innerHTML = objNue;
//     document.getElementById('electronicos').innerHTML = objEle;
//     document.getElementById('casa').innerHTML = objCas;
//     document.getElementById('otros').innerHTML = objOtros;
// });


//  CARRUSEL
        
        window.onload = function () {
            const IMAGENES = [
                '/img/kymaul-f805.png',
                '/img/laptopHP-245-G8.webp',
                '/img/poco_m5.png'
            ]
            const desc = [
                'Mouse Aula F805',
                'Laptop HP 245',
                'Celular Xiaomi Poco M5'
            ]
        
            const TIEMPO_INTERVALO_MILESIMAS_SEG = 5000;
            let posicionActual = 0;
            let $botonRetroceder = document.querySelector('#retroceder');
            let $botonAvanzar = document.querySelector('#avanzar');
            let $imagen = document.querySelector('#imagen');
            let play = document.querySelector('#content');
            let intervalo;
        
            function pasarFoto(){
                if(posicionActual>= IMAGENES.length-1){
                    posicionActual=0;
                } else{
                    posicionActual++;
                }
                renderizarImagen()
            }
            function retrocederFoto(){
                if(posicionActual <= 0){
                    posicionActual = IMAGENES.length-1;
                } else{
                    posicionActual--;
                }
                renderizarImagen();
            }
        
        
            function renderizarImagen(){
                $imagen = `<img src="${IMAGENES[posicionActual]}"><p>${desc[posicionActual]}</p>`;
                document.getElementById('imagen').innerHTML = $imagen
            }
            function playIntervalo(){
                intervalo = setInterval(pasarFoto, TIEMPO_INTERVALO_MILESIMAS_SEG);
            }
            $botonAvanzar.addEventListener('click',pasarFoto);
            $botonRetroceder.addEventListener('click', retrocederFoto);
            play.addEventListener('load', playIntervalo)
        }

// JS PARA LA PÁGINA DE CADA PRODUCTO DE FORMA INDIVIDUAL
function vista(azir){
    let id = azir.id;
    localStorage.setItem('a',id);
    

}

//  PARA AGREGAR PRODUCTOS AL CARRITO
function carrito(algo){
    let iden = algo.id;
    let id_2 = iden.slice(1,3)
    localStorage.setItem(iden,id_2);
    window.alert('Elemento agregado al carrito con exito');
}

