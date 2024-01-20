
let contPer = 0;
let miStorage = this.localStorage;

let allId=''


function pagar(){
    event.preventDefault();
    axios.get('http://localhost:3002/ultId',{
        responseType: 'json'
    })
    .then(function(res){
        let total = miStorage.pagarTotal;
        localStorage.removeItem('pagarTotal');
        let arrayStorage = Object.entries(miStorage);
        let table = res.data;
        let ult = table[0].max;
        ult++;
        let names = document.getElementById('name').value;
        let lastname = document.getElementById('lastname').value;
        let city = document.getElementById('city').value;
        let cp = document.getElementById('cp').value;
        let noHouse = document.getElementById('no_casa').value;
        let telefono = document.getElementById('tel').value;
        let tarjeta = document.getElementById('no_tar').value;
        let cvv1 = document.getElementById('cvv').value;
        let date = document.getElementById('date').value;
    for (let index = 0; index < arrayStorage.length; index++) {
        let a = arrayStorage[index];
        allId += a[1] +', ';
    }
    
    axios.post('http://localhost:3002/cliente',{
        id_pro: ult,
        nombre: names,
        apellido: lastname,
        ciudad: city,
        codp: Number(cp),
        num_casa: Number(noHouse),
        tel: Number(telefono),
        num_tar: Number(tarjeta),
        cvv: Number(cvv1),
        ven: date,

        responseType: 'json'
    })
    axios.post('http://localhost:3002/venta',{
        id_ven: ult,
        producto: allId,
        compra: names,
        cantidad: total
    })
    })
    

    .then(function(res){
        console.log(res);
        window.alert('Gracias Por Su Compra! Le estaremos notificando si hay alguna actualización en su pedido.');
        window.open('/index.html');
        

    })
    .catch(function(err){
        console.log(err);
    })
    .then(() => {console.log('si');})
        
    };


    window.addEventListener('beforeunload', 
    function(){
        for(i=0;i<Object.entries(miStorage).length;i++){
            localStorage.removeItem('c'+i);
        }
            
    })