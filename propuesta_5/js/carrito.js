let vistaCarrito = '';
let total = 0;
let miStorage = window.localStorage;
    // console.log(miStorage)
    let arrayStorage = Object.entries(miStorage);
    // console.log(arrayStorage)
const gwen = () => {
    axios.get('http://localhost:3002/productos', {
        responseType: 'json'
})
    .then(function(res){
        localStorage.removeItem('pagarTotal');
        let table = res.data
        for (let index = 0; index < arrayStorage.length; index++) {
            let c = arrayStorage[index];
            let d = Number(c[1]);
            // console.log(d)
            vistaCarrito +=
            `<tr class="fila">
            <td class="cart-img"><img src="${table[d-1].img_producto}" alt=""></td>
            <td class="cart-desc">
                <div class="nombre">${table[d-1].nombre_producto}</div>
                <div class="desc">${table[d-1].descripcion_producto}</div>
            </td>
            <td class="cart-cant">
                <form>
                    <input type="number" value="1" min="1" max="${table[d-1].cantidad_producto}" id="cant${index}" onclick="dataTotal()">
                </form>
            </td>
            <td class="cart-precio" id="${index}">${table[d-1].precio_producto}</td>
            <td class="cart-total" id="prodTotal${index}"></td>
            <td class="cart-del" id="elim${d}" onclick='eliminar(this)'>
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                  </svg>
            </td>
        </tr>`
        
        }
        // let cantidad = document.getElementById('cant').value;
        document.getElementById('articulos').innerHTML = vistaCarrito;
    })
    
}

const dataTotal = () => {
    
    for(let i =0; i<arrayStorage.length;i++){
        let precio = document.getElementById('cant'+i).value;
        let semTotal = document.getElementById(i).innerHTML;
        let objTotal =semTotal*precio;
        document.getElementById('prodTotal'+i).innerHTML = objTotal;
        total += objTotal;
       
    }
    document.getElementById('to').innerHTML = total;
    let aa = total;
    total =0;
    return aa;
}


function eliminar(iden){
    let id = iden.id;
    let realId = id.slice(4,6);
    localStorage.removeItem('b'+realId);
    location.reload();
}

function pagar(){
    let total = dataTotal()
    localStorage.setItem('pagarTotal',total);
    for(let i=0;i<arrayStorage.length;i++){
        let cant = document.getElementById('cant'+i).value;
        let h = `c${i}`;
        localStorage.setItem(h,cant);
    }
}





// IDEA DEL CARRITO
/*
Intentar acceder a todos los datos del local storage 
para meterlos en el carrito

Esto conlleva a que cada vez que salga de la ventana de 
vista indivudual eliminar el dato del pbjeto que se guarda ahi

Ademas, cada vez que se elimine un elemento 
desde el carrito, se elimine del local storage


solo usando getstorage, se me ocurre hacer un arreglo y poner cada elemento
del localstorage ahí

*/