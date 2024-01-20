function carrito(algo){
    event.preventDefault;
    let iden = algo.id;
    localStorage.setItem('b'+iden,iden);
    console.log(iden);
    window.alert('Elemento agregado al carrito con exito')
}



window.addEventListener('beforeunload', 
    function(){
        localStorage.removeItem('a');
    })




    