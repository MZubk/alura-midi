function playSound(seletorAudio){
    const elemento = document.querySelector(seletorAudio);      

    if (elemento && elemento.localName === 'audio'){
            elemento.play();
    }else{
            if (elemento === null){
            console.log('elemento não encontrado ou seletor inválido')
        }      
    }        
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const sounds = tecla.classList[1];
    const idAudio = `#som_${sounds}`;

    tecla.onclick = function(){
        playSound(idAudio);
    } 
    
    tecla.onkeydown = function(evento){

        if (evento.code === 'Space' || 'Enter' || 'NumpadEnter'){
            tecla.classList.add('ativa');  
        }     
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}

