let j = 0;
let h =0;
interval = setInterval(function(){
        if(j>5){
            let h = j-1;
            j=1;
            document.getElementById(h).className='cameraSlide';
            document.getElementById(j).className = 'camerSlideYes';
        } else{
            j++;
            h=j-1;
            document.getElementById(j).className = 'camerSlideYes';
            document.getElementById(h).className ='cameraSlide';
        }
},5000)



let z = 1;
let y = 1;
const antCarrera = () =>{
    if (y<1){
        y=5;
        document.getElementById(y).className = 'cameraSlideYes'
    } else{
        console.log(document.getElementById(y).getAttribute('class'));
        document.getElementById(y).className = 'cameraSlide';
        --y;
        document.getElementById(y).className = 'cameraSlideYes'

    }
}
const verCarrera = () =>{
    if (z>=6){
        z=1;
        document.getElementById(z).className = 'cameraSlideYes'
    } else{
        console.log(document.getElementById(z).getAttribute('class'));
        document.getElementById(z).className = 'cameraSlide';
        ++z;
        document.getElementById(z).className = 'cameraSlideYes'
    }
}

const pauCarrera = () =>{

    clearInterval(interval)
    document.getElementById('pau').style.display = 'none';
    document.getElementById('des').style.display = 'inline';
}
const despauCarrera = () =>{
    interval = setInterval(function(){
        if(j>=6){
            let h = j-1;
            j=1;
            document.getElementById(h).className='cameraSlide';
            document.getElementById(j).className = 'camerSlideYes';
        } else{
            j++;
            h=j-1;
            document.getElementById(j).className = 'camerSlideYes';
            document.getElementById(h).className ='cameraSlide';
        }
},5000)
    document.getElementById('pau').style.display = 'inline';
    document.getElementById('des').style.display = 'none';
}
const ePro = () =>{
    document.getElementById('1').className='cameraSlideYes';
    document.getElementById('2','3','4','5').className='cameraSlide';
    clearInterval(interval);
}
const eMec = () =>{
    document.getElementById('2').className='cameraSlideYes';
    document.getElementById('1','3','4','5').className='cameraSlide';
    clearInterval(interval);
}
const eARH = () =>{
    document.getElementById('3').className='cameraSlideYes';
    document.getElementById('2','1','4','5').className='cameraSlide';
    clearInterval(interval);
}
const eMcT = () =>{
    document.getElementById('4').className='cameraSlideYes';
    document.getElementById('2','3','1','5').className='cameraSlide';
    clearInterval(interval);
}
const eElc = () =>{
    document.getElementById('5').className='cameraSlideYes';
    document.getElementById('2','3','4','1').className='cameraSlide'
    clearInterval(interval);
}


document.getElementById('b1').addEventListener('click',ePro);
document.getElementById('b2').addEventListener('click',eMec);
document.getElementById('b3').addEventListener('click',eARH);
document.getElementById('b4').addEventListener('click',eMcT);
document.getElementById('b5').addEventListener('click',eElc);

document.getElementById('der').addEventListener('click',verCarrera);
document.getElementById('izq').addEventListener('click',antCarrera);
document.getElementById('pau').addEventListener('click',pauCarrera);
document.getElementById('des').addEventListener('click',despauCarrera);
