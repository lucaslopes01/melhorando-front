async function carregarAnimais(){
    const response =  await axios.get('http://localhost:8000/animais');
    const animais = response.data
    const lista = document.getElementById('lista_animais')
    lista.innerHTML = ''
    animais.forEach(animal => {
        const item = document.createElement('li')
        item.innerText = animal.nome
        lista.appendChild(item)
    });

}
function manipularFormulario(){
    const formAnimal = document.getElementById('form_animal')
    const input_nome = document.getElementById('nome')
    formAnimal.onsubmit =(e)=>{
        e.preventDefault()
        const nome_animal = input_nome.value
        axios.post('http://localhost:8000/animais',{
            nome: nome_animal,
            id: 1

        })
        carregarAnimais()
    }

}
function app(){
    carregarAnimais()
    manipularFormulario()
}
// function recarrega_pagina(){
//     location.reload()
// }
app()