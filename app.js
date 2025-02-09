const input= document.getElementById('amigo')
const listaAmigos= document.getElementById('listaAmigos')
const resultado= document.getElementById('resultado')

function agregarAmigo (){
    const amigo= input.value
    if(amigo){
        const li= document.createElement('li')
        li.textContent= amigo
        listaAmigos.appendChild(li)
        input.value= ''
    }
    else{
        alert('Debes ingresar un nombre')
    }
}

function sortearAmigo (){
    const amigos= Array.from(listaAmigos.children)
    const amigoSorteado= amigos[Math.floor(Math.random() * amigos.length)]
    resultado.textContent= amigoSorteado.textContent
}