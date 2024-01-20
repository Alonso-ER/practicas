function nasus(){
    axios.get('http://localhost:3002/productos',{
        responseType: 'json'
    })
    .then(function(res){
        let id = localStorage.getItem('a');
        let obj = res.data[id-1];
         nuevoObj = 
         `<div class="vista">
         <img src="${obj.img_producto}" alt="">
         <h2>${obj.nombre_producto}</h2> <br><br><br><br>
         <br>
         <h3>${obj.descripcion_producto}</h3>
     </div>
     <div class="compra">
         <h2>${obj.precio_producto}</h2><br><br><br><br>
         <form>
             <label for="cant">Cantidad</label>
             <input type="number" name="cantidad" id="cant"><br>
             <button id="${id}" onclick="carrito(this)">Agregar al Carrito</button>
             <button>Compra Ahora</button>
         </form>
     </div>`
        document.getElementById('vista').innerHTML = nuevoObj;
    
    ;})
    .catch(function(err){console.log(err);})
    .then(() => {console.log(err);})
        
    };
    