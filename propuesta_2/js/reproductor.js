//Clase Cancion
class Cancion{
    static contador =0;
    constructor(img,name,autor,audio){
        this.id = ++Cancion.contador;
        this._img = img;
        this._name = name;
        this._autor = autor;
        this._audio = new Audio(audio);
    }
    get contador(){
        return this.id
    }
    get img(){
        return this._img;
    }
    set img(img){
        this._img = img;
    }
    get name(){
        return this._name;
    }
    set name(name){
        this._name = name;
    }
    get autor(){
        return this._autor;
    }
    set autor(autor){
        this._autor = autor;
    }
    get time(){
        return this._time;
    }
    set time(time){
        this._time = time;
    }
    toString(){
        return `${this._name} ${this._autor}`;
    }
}
//Variables Globales
nuevaCancion ='';
let moSong ='';
cont=0;

const canciones = [
    new Cancion('/img/thriller.jpg','The Girl Is Mine','Michael Jackson ft. Paul McCartney','/musica/Grabación.m4a'),
    new Cancion('/img/thriller.jpg','Thriller','Michael Jackson','/musica/Grabación.m4a'),
    new Cancion('/img/super-trouper.jpg','The Winner Takes It All','ABBA','/musica/Grabación.m4a'),
    new Cancion('/img/Oasis_Whats-the-stoy-morning-glory_portada.jpg',"Don't Look Back In Anger",'Oasis','/musica/Grabación (2).m4a'),
    new Cancion('/img/QUEEN-A-NIGHT-AT-THE-OPERA-560x600.png','Bohemian Rhapsody','Queen','/musica/Grabación.m4a'),
    new Cancion('/img/R-19086691-1623317027-2653.jpg','Secreto de Amor','Joan Sebastian','/musica/Grabación (3).m4a'),
    new Cancion('/img/Metro_Boomin_-_Metro_Boomin_Presents_Spider-Man-_Across_the_Spider-Verse_(Soundtrack_from_and_Inspired_by_the_Motion_Picture).png','Hummingbird','Metro Boomin and James Blake','/musica/Grabación.m4a')
]

function secondsToString(seconds) {
    var hour = Math.floor(seconds / 3600);
    hour = (hour < 10)? '0' + hour : hour;
    var minute = Math.floor((seconds / 60) % 60);
    minute = (minute < 10)? '0' + minute : minute;
    var second = Math.trunc(seconds) % 60;
    second = (second < 10)? '0' + second : second;
    return minute + ':' + second;
  }

function listado(){
    for (let index = 0; index < canciones.length; index++) {
        const audio = canciones[index]._audio;
        audio.preload= 'metadata';
        audio.onloadedmetadata = ()=> console.log(audio.duration);
        nuevaCancion+=
        `<button class='btn-cancion' id="${index}" onclick="reproducir(this)"><ul class="cancion">
            <li>
                <img src=${canciones[index]._img} alt="">
            </li>
            <li class="name">${canciones[index]._name}</li> 
            <li class="dura">${secondsToString(audio.duration)}</li><br><br>
            <li class="autor">${canciones[index]._autor}</li>
        </ul></button>` 
        
    }
    
    document.getElementById('lista').innerHTML = nuevaCancion;
    nuevaCancion ='';
}


function reproducir(comp){
    let id = comp.id;

    const audio = canciones[id]._audio;
    audio.preload = 'metadata';
    audio.onloadedmetadata = ()=> console.log(audio.duration);
    
    moSong+= 
            `<section class='rep' id='song'>
                <img class="imagen" src=${canciones[id]._img} id='${id}' alt="">
                <input type="range" id="volumen" name="volumen" value="0" min="0" max="20">
            <div class='text'>    
                <h1>
                    ${canciones[id]._name}
                </h1>
                <h1>
                    ${canciones[id]._autor}
                </h1>
                <h1>
                    ${secondsToString(audio.duration)}
                </h1>
            </div>
            </section>
            <audio src="${audio.src}" preload="metadata"  class="audio" id="cancion">
            </audio>
            <input type="range" id="re" name="reproductor" value="0" min="0" max="${audio.duration.toFixed}">
            ` 
            
    document.getElementById('lista').innerHTML = moSong;
    document.getElementById('controles').style.display = 'inline';
    return Number(id);
    
}


const pausar = () =>{
    document.getElementById('pausa').style.display = 'none';
    document.getElementById('next').style.display = 'inline';
}

const next = () => {
    document.getElementById('next').style.display = 'none';
    document.getElementById('pausa').style.display = 'inline';
    let b = document.querySelector('section.rep img');
            a = b.id;
        const audio = canciones[a]._audio;
        audio.preload = 'metadata';
        audio.onloadedmetadata = ()=> console.log(audio.duration);
        let z = document.getElementById('re').ariaValueMin;
    for(let i=0;i< audio.duration;i++){
        z++;
        document.getElementById('re').value = z;
        console.log(z);
        console.log(i);
    }
}

let a =0;
const sig = () => {
        let b = document.querySelector('section.rep img');
            a = b.id;
            a++;
            
        if(a >=canciones.length){
            a =0;
            const audio = canciones[a]._audio;
            audio.preload = 'metadata';
            audio.onloadedmetadata = ()=> console.log(audio.duration);
            console.log('hola')
            moSong=''
            moSong+= 
            `<section class='rep' id='song'>
                <img class="imagen" src=${canciones[a]._img} id='${a}' alt="">
                <input type="range" id="volumen" name="volumen" min="0" max="20">
            <div class='text'>    
                <h1>
                    ${canciones[a]._name}
                </h1>
                <h1>
                    ${canciones[a]._autor}
                </h1>
                <h1>
                    ${secondsToString(audio.duration)}
                </h1>
            </div>
            </section>
            </audio>
            <input type="range" id="re" name="reproductor" value="0" min="0" max="${audio.duration.toFixed}">
            ` 
            document.getElementById('lista').innerHTML = moSong;
            console.log(moSong);
            document.getElementById('controles').style.display = 'inline';
        }else{
            const audio = canciones[a]._audio;
            audio.preload = 'metadata';
            audio.onloadedmetadata = ()=> console.log(audio.duration);
            moSong=''
            moSong+= 
            `<section class='rep' id='song'>
                <img class="imagen" src=${canciones[a]._img} id='${a}' alt="">
                <input type="range" id="volumen" name="volumen" min="0" max="20">
            <div class='text'>    
                <h1>
                    ${canciones[a]._name}
                </h1>
                <h1>
                    ${canciones[a]._autor}
                </h1>
                <h1>
                    ${secondsToString(audio.duration)}
                </h1>
            </div>
            </section>
            </audio>
            <input type="range" id="re" name="reproductor" value="0" min="0" max="${audio.duration.toFixed}">
            ` 
            document.getElementById('lista').innerHTML = moSong;
            document.getElementById('controles').style.display = 'inline';
        }
}
const ant = () => {
            let b = document.querySelector('section.rep img');
            a = b.id;
            a--;
        if(a < 0){
            a = canciones.length;
            a--;
            const audio = canciones[a]._audio;
            audio.preload = 'metadata';
            audio.onloadedmetadata = ()=> console.log(audio.duration);
            moSong=''
            moSong+= 
            `<section class='rep' id='song'>
                <img class="imagen" src=${canciones[a]._img} id='${a}' alt="">
                <input type="range" id="volumen" name="volumen" min="0" max="20">
            <div class='text'>    
                <h1>
                    ${canciones[a]._name}
                </h1>
                <h1>
                    ${canciones[a]._autor}
                </h1>
                <h1>
                    ${secondsToString(audio.duration)}
                </h1>
            </div>
            </section>
            </audio>
            <input type="range" id="re" name="reproductor" value="0" min="0" max="${audio.duration.toFixed}">
            ` 
            document.getElementById('lista').innerHTML = moSong;
            console.log(moSong);
            document.getElementById('controles').style.display = 'inline';
        }else{
            const audio = canciones[a]._audio;
            audio.preload = 'metadata';
            audio.onloadedmetadata = ()=> console.log(audio.duration);
            moSong=''
            moSong+= 
            `<section class='rep' id='song'>
                <img class="imagen" src=${canciones[a]._img} id='${a}' alt="">
                <input type="range" id="volumen" name="volumen"  min="0" max="20">
            <div class='text'>    
                <h1>
                    ${canciones[a]._name}
                </h1>
                <h1>
                    ${canciones[a]._autor}
                </h1>
                <h1>
                    ${secondsToString(audio.duration)}
                </h1>
            </div>
            </section>
            </audio>
            <input type="range" id="re" name="reproductor" value="0  min="0" max="${audio.duration}">            ` 
            document.getElementById('lista').innerHTML = moSong;
            console.log(moSong);
            document.getElementById('controles').style.display = 'inline';
            console.log(a)
        }
}


document.getElementById('pausa').addEventListener('click',pausar);
document.getElementById('next').addEventListener('click',next);
document.getElementById('despues').addEventListener('click',sig);
document.getElementById('antes').addEventListener('click',ant);