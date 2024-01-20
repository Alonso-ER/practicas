
//   CLASE DEL PRIMER FORMULARIO: DATOS PERSONALES
class datosPersonales{
    static contador = 0;
    constructor(nombre,apellido,edad,email){
        this.id = datosPersonales.contador++;
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._email = email;
    }
    get nombre(){
        return this._nombre;
    }
    set nombre(nombre){
        this._nombre = nombre;
    }
    get apellido(){
        return this._apellido;
    }
    set apellido(apellido){
        this._apellido = apellido;
    }
    get edad(){
        return this._edad;
    }
    set edad(edad){
        this._edad = edad;
    }
    get email(){
        return this._email;
    }
    set email(email){
        this._email = email;
    }
    toString(){
        return`${this._nombre} ${this._apellido}, edad: ${this._edad}. Contacto: ${this._email}`
    }
}
//   CLASE PARA LAS RESPUETAS DE LOS USUARIOS
class Respuestas{
    static contador = 0;
    constructor(res){
        this.id = Respuestas.contador++;
        this._res = res;
    }
    get res(){
        return this._res;
    }
    set res(res){
        this._res = res;
    }
}
class rCorrectas{
    static contador =0;
    constructor(resp){
        this.id = rCorrectas.contador++;
        this._resp = resp;
    }
    get resp(){
        return this._resp
    }
    set resp(resp){
        this._resp = resp;
    }
}

const Datos = [
    new datosPersonales('Marco Alonso','Arenas Ibarra',17,'marenasibarra7@gmail.com')
]

const respuesta = [
    
]

const correctas = [
    new rCorrectas('La Biblia'),
    new rCorrectas('Guadalupe Victoria'),
    new rCorrectas('1945'),
    new rCorrectas('Robert Oppenheimer'),
    new rCorrectas('1453 d.C.'),
    new rCorrectas('1789'),
    new rCorrectas('Charles Darwin'),
    new rCorrectas('Programación'),
    new rCorrectas('Sigmund Freud'),
    new rCorrectas('4')
]

//   VARIABLES LOCALES
let contDatos=0;
let contResp =0;
let actualizarBody = '';


const datos = () => {
    event.preventDefault()
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastName').value;
    let age = document.getElementById('age').value;
    let mail = document.getElementById('email').value;

    contDatos++;
    Datos[contDatos] = new datosPersonales(name,lastname,age,mail);

    actualizarBody =
    `<section class="preguntas" id="preguntas">
    <form action="">
        <label class="title">Selecciona la Respuesta que Creas Correcta</label><br><br>
        <div>
            <p>1) ¿Cuál es el libro mas vendido de la historia?</p>
            <input type="radio" name="p1" id="quijote" value="Don Quijote de la Mancha">
            <label for="quijote">Don Quijote de la Mancha</label><br>
            <input type="radio" name="p1" id="principito" value="El Principito">
            <label for="principito">El Principito</label><br>
            <input type="radio" name="p1" id="biblia" value="La Biblia">
            <label for="biblia">La Biblia</label><br>
            <input type="radio" name="p1" id="hp" value="Harry Potter">
            <label for="hp">Harry Potter</label>
        </div>
        <div>
            <p>2) ¿Cuál fue el primer presidente de México?</p>
            <input type="radio" name="p2" id="iturbide" value="Agustín de Iturbide">
            <label for="iturbide">Agustín de Iturbide</label><br>
            <input type="radio" name="p2" id="victoria" value="Guadalupe Victoria">
            <label for="victoria">Guadalupe Victoria</label><br>
            <input type="radio" name="p2" id="moctezuma" value="Moctezuma"> 
            <label for="moctezuma">Moctezuma</label><br>
        </div>
        <div>
            <p>3) ¿En qué año terminó la Segunda Guerra Mundial?</p>
            <input type="radio" name="p3" id="año_1945" value="1945">
            <label for="año_1945">1945</label><br>
            <input type="radio" name="p3" id="año_1917" value="1917">
            <label for="año_1917">1917</label><br>
            <input type="radio" name="p3" id="año_1939" value="1939">
            <label for="año_1939">1939</label><br>
            <input type="radio" name="p3" id="año_1989" value="1989">
            <label for="año_1989">1989</label>
        </div>
        <div>
            <p>4) ¿Quién es conocido cómo el padre de la bomba atómica?</p>
            <input type="radio" name="p4" id="oppenheimer" value="Robert Oppenheimer">
            <label for="oppenheimer">Robert Oppenheimer</label><br>
            <input type="radio" name="p4" id="einstein" value="Albert Einstein">
            <label for="einstein">Albert Einstein</label><br>
            <input type="radio" name="p4" id="groves" value="Leslie Groves">
            <label for="groves">Leslie Groves</label><br>
            <input type="radio" name="p4" id="marshall" value="James Marshall">
            <label for="marshall">James Marshall</label>
        </div>
        <div>
            <p>5) ¿Cuándo fue la caída de Constantinopla?</p>
            <input type="radio" name="p5" id="año_476" value="476 d.C.">
            <label for="año_476">476 d.C.</label><br>
            <input type="radio" name="p5" id="año_1453" value="1453 d.C.">
            <label for="año_1453">1453 d.C.</label><br>
            <input type="radio" name="p5" id="año_2020" value="2020 d.C.">
            <label for="año_2020">2020 d.C.</label><br>
            <input type="radio" name="p5" id="año_31" value="31 a.C.">
            <label for="año_31">31 a.C.</label>
        </div>
        <div>
            <p>6) ¿Cuándo empezo la revolución francesa?</p>
            <input type="radio" name="p6" id="año_1824" value="1824">
            <label for="año_1824">1824</label><br>
            <input type="radio" name="p6" id="año_1521" value="1521">
            <label for="año_1521">1521</label><br>
            <input type="radio" name="p6" id="año_1910" value="1910">
            <label for="año_1910">1910</label><br>
            <input type="radio" name="p6" id="año_1789" value="1789">
            <label for="año_1789">1789</label>
        </div>
        <div>
            <p>7) ¿Quién descubrió la evolución?</p>
            <input type="radio" name="p7" id="newton" value="Isaac Newton">
            <label for="newton">Isaac Newton</label><br>
            <input type="radio" name="p7" id="tesla" value="Nikola Tesla">
            <label for="tesla">Nikola Tesla</label><br>
            <input type="radio" name="p7" id="darwin" value="Charles Darwin">
            <label for="darwin">Charles Darwin</label><br>
            <input type="radio" name="p7" id="galilei" value="Galileo Galilei">
            <label for="galilei">Galileo Galilei</label>
        </div>
        <div>
            <p>8) ¿Cuál NO es una bella arte?</p>
            <input type="radio" name="p8" id="arquitectura" value="Arquitectura">
            <label for="arquitectura">Arquitectura</label><br>
            <input type="radio" name="p8" id="cine" value="Cine">
            <label for="cine">Cine</label><br>
            <input type="radio" name="p8" id="musica" value="Música">
            <label for="musica">Música</label><br>
            <input type="radio" name="p8" id="programacion" value="Programación">
            <label for="programacion">Programación</label><br>
        </div>
        <div>
            <p>9) ¿Quén es el padre de psicoanálisis?</p>
            <input type="radio" name="p9" id="nietzsche" value="Friedrich Nietzsche">
            <label for="nietzsche">Friedrich Nietzsche</label><br>
            <input type="radio" name="p9" id="freud" value="Sigmund Freud">
            <label for="freud">Sigmund Freud</label><br>
            <input type="radio" name="p9" id="descartes" value="René Descartes">
            <label for="descartes">René Descartes</label><br>
            <input type="radio" name="p9" id="rousseau" value="Jean-Jacques Rousseau">
            <label for="rousseau">Jean-Jacques Rousseau</label>
        </div>
        <div>
            <p>10) ¿Cuánto es 2 + 2 ?</p>
            <input type="radio" name="p10" id="r_4" value="4">
            <label for="r_4">1. 4</label><br>
            <input type="radio" name="p10" id="r_2" value="2">
            <label for="r_2">2. 2</label><br>
            <input type="radio" name="p10" id="r__4" value="-4">
            <label for="r__4">3. -4</label><br>
            <input type="radio" name="p10" id="r_1" value="1">
            <label for="r_1">4. 1</label>
        </div>

        <button class="botRes" id="botRes" onclick="respuestas()">Enviar</button>
    </form>
    </section>
    <footer>
        <div class="content">
            Contacto: 4779187996 <br>
            arenasibarrama@ag.cbtis225.edu.mx
        </div>
        <div class="content-2">
            Todos los Derechos Reservados <br>
            Alonso@2023
        </div>
    </footer>`

    document.getElementById('info').innerHTML = actualizarBody;
}


const respuestas = () => {
    event.preventDefault();
    let res1 = document.querySelector('input[name="p1"]:checked').value;
    let res2 = document.querySelector('input[name="p2"]:checked').value;
    let res3 = document.querySelector('input[name="p3"]:checked').value;
    let res4 = document.querySelector('input[name="p4"]:checked').value;
    let res5 = document.querySelector('input[name="p5"]:checked').value;
    let res6 = document.querySelector('input[name="p6"]:checked').value;
    let res7 = document.querySelector('input[name="p7"]:checked').value;
    let res8 = document.querySelector('input[name="p8"]:checked').value;
    let res9 = document.querySelector('input[name="p9"]:checked').value;
    let res10 = document.querySelector('input[name="p10"]:checked').value;

    contResp++;
    

    respuesta[0] = new Respuestas(res1);
    respuesta[1] = new Respuestas(res2);
    respuesta[2] = new Respuestas(res3);
    respuesta[3] = new Respuestas(res4);
    respuesta[4] = new Respuestas(res5);
    respuesta[5] = new Respuestas(res6);
    respuesta[6] = new Respuestas(res7);
    respuesta[7] = new Respuestas(res8);
    respuesta[8] = new Respuestas(res9);
    respuesta[9] = new Respuestas(res10);

    
    
    let puntuacion =0;
    for (let i = 0; i < 10; i++) {
        console.log(correctas[i]._resp);
        console.log(respuesta[i]._res)
        if(respuesta[i]._res == correctas[i]._resp){
            puntuacion=puntuacion+10
        }
    }



    actualizarBody = 
    `<section class="preguntas" id="respuestas">
    <h1>Tus Resultados</h1><br>
        <div class='porfavor'>
        Nombre: ${Datos[contResp]._nombre}<br>
        Apellidos: ${Datos[contResp]._apellido} <br>
        Edad: ${Datos[contResp]._edad} <br>
        Correo: ${Datos[contResp]._email}
        </div>
        <div id='dios' class='porfavor'>
            
        </div>
        <div class='porfavor'>Tu Puntuacion: <b> ${puntuacion} </b></div>
    </section>
    <footer>
        <div class="content">
            Contacto: 4779187996 <br>
            arenasibarrama@ag.cbtis225.edu.mx
        </div>
        <div class="content-2">
            Todos los Derechos Reservados <br>
            Alonso@2023
        </div>
    </footer>`

    let actualizarDatos ='';
    for( let j = 0; j< respuesta.length; j++){
        actualizarDatos += 
        `${j+1}. Respuesta Correcta: ${correctas[j]._resp} <br>
        Tu Respuesta: ${respuesta[j]._res} <br><br>`
    }
    

    document.getElementById('info').innerHTML = actualizarBody;
    document.getElementById('dios').innerHTML = actualizarDatos;

}



    

    
