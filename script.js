const artistas = ["Julio Iglesias", "Enrique Iglesias", "Raphael", "Mecano", "Camilo Sesto", "Juan Pardo", "Los del Río", "Alejandro Sanz", "David Bisbal", "Estopa", "Jose Luis Perales", "Miguel Bosé", "Rocío Dúrcal", "Nino Bravo", "Ana Belén", "Victor Manuel", "Luis Miguel", "Manolo Escobar", "Isabel Pantoja", "Joan Manuel Serrat", "Paco de Lucía", "Plácido Domingo", "José Carreras", "Montserrat Caballé", "La Oreja de Van Gogh", "El Canto del Loco", "Melendi", "Malú", "Pablo Alborán", "Maná", "Shakira", "Juanes", "Carlos Vives", "Ricky Martin", "Chayanne", "Luis Fonsi", "Gloria Estefan", "Marc Anthony", "Jennifer Lopez", "Santana", "Gipsy Kings", "Jarabe de Palo", "Manu Chao", "Radio Futura", "Héroes del Silencio", "Duncan Dhu", "La Unión", "Miguel Ríos", "Los Secretos", "Nacha Pop"];
const contPalabra=document.getElementById('palSecreta')
const letra=contPalabra.getElementsByTagName('div')
const imgVis=document.querySelectorAll('.visible')

const victoria=document.createElement('div')
let contador=0
       let total=0
//funcion para que aparezca el mensaje  cuando perdemos
function final(){
    const derrota=document.createElement('div')
                derrota.setAttribute('class','lose')
                derrota.setAttribute('id','lose')
                derrota.innerText='¡¡¡ HAS PERDIDO !!! \n AGHHHHH'
                contPalabra.appendChild(derrota)
                const letras=[...letra]
        letras.forEach((element)=>{
            element.style.color="red"
        
        })

        let msgLose=document.getElementById('lose')
        msgLose.style.color="azure"
        console.log(msgLose)    
}

//funcion para que aparezca el mensaje  cuando ganamos
function ganamos(){
   
      
    victoria.setAttribute('class','win')
            victoria.innerText='¡¡¡ ENHORABUENA ERES UNA FUCKING BESTIA !!! \n INTENTALO OTRA VEZ , QUIZAS HA SIDO SUERTE '
            contPalabra.appendChild(victoria) 

}



//definimos la variable donde se guardara el elemento aleatorio de la lista
let palabraSecreta=""

//le damos funcionalidad al boton empezar con un evento click
const botEmp=document.getElementById('btn')
botEmp.addEventListener('click',function(){
    contPalabra.innerText=""
    /* imgVis.classList.add('visible') */
     insertPalabra()
}) 
     

     
 
   
 
// creamos una funcion que nos de un numero aleatorio del 1 al 50 para escoger una palabra del array
function palabra(min,max){
min=Math.ceil(min)
max=Math.floor(max)
let num=Math.floor(Math.random() * (max-min)+min)
let artista= artistas[num]
return artista
}

 




//funcion que inserta un bloque con letra
let  bloque
function insertarLetra(){
   bloque=document.createElement('div')
   bloque.setAttribute('class', 'letra')
   contPalabra.appendChild(bloque)
   bloque.innerText=palabraSecreta[i]
}


//funcion que inserta un bloque con espacio
function insertarEspacio(){
    bloque=document.createElement('div')
    bloque.setAttribute('class', 'espacio')
    contPalabra.appendChild(bloque)
    bloque.innerText="     "

 }

//funcion que inserte un bloque vacio o un espacio en el contenedor , por cada letra o espacio de la palabra.


function insertPalabra(){
    
    palabraSecreta= palabra(0,50) 
    for (i=0; i<palabraSecreta.length; i++){
        if(palabraSecreta[i]!=" "){
            insertarLetra()
        }else{
            insertarEspacio()
        }
        
    }
 
    //creamos un elemento span donde  mostraremos las letras tecleadas
let letrasUsadas 
letrasUsadas=document.createElement('span')
contPalabra.appendChild(letrasUsadas)

    //dentro de la funcion , implementamos un evento que espera a que sea presionada una tecla , y la compara colas de la palabra oculta y si esta esta la hace visible cambiando el estilo 1
    let acierto=0 ,  fallo =0 , contador=0
    const cabeza=document.getElementById('cabeza')
    const tronco=document.getElementById('tronco')
    const brazo1=document.getElementById('brazo1')
    const brazo2=document.getElementById('brazo2')

    const pierna1=document.getElementById('pierna1')
    const pierna2=document.getElementById('pierna2')
    
    document.addEventListener('keypress',function(event){
        let tecla= event.key
        let letraUsada=tecla
        letrasUsadas.textContent +=letraUsada + " "
        
        const letras=[...letra]
        console.log(letras)
        
         letras.forEach((element=>{

    
          //aqui comprobamos si la tecla presionada esta en la palabra secreta, sin tener en cuenta mayusculas y acentos  
           if(tecla===element.innerText.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()){
                 element.style.color='white' //1
                 acierto+=1
                 
            }
              
         }))
             if(acierto>0){
                
            acierto=0
            }else{
                fallo+=1
            } 
            console.log('aciertos=' + acierto)
            console.log('fallos =' + fallo)
           console.log(palabraSecreta.length)
          
            //implementamos la condicion de victoria , para ello recorremos los elementos de la lista y
            //si cumplen la condicion aumentamos la variable contador en uno y cuando contador sea igual a la 
            //longitud de la palabra significara que hemos acertado todas las letras y llamamos a la funcion
         letras.forEach((element)=>{  
           
        if(element.style.color=='white' ||element.classList.contains('espacio')){
         contador++
          }
         }) 
         console.log('contador  vale ' + contador)  
         if(contador==palabraSecreta.length){
            ganamos()
         }
        contador=0 
         
     switch(fallo) {
        case 1: cabeza.classList.remove('visible')
        break
         case 2: tronco.classList.remove('visible')
        break
        case 3: brazo1.classList.remove('visible')
        break
        case 4: brazo2.classList.remove('visible')
        break
        case 5: pierna1.classList.remove('visible')
        break
        case 6: pierna2.classList.remove('visible')
        break 
        case 7: final()

        break
 
       }  
          
      
            
         
         
     })
         
 }  







                    
    
       
      
    
                
                
                
                
            
        
             
       



        
         
    

    
    



    

 

