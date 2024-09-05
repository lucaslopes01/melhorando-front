async function carregarAnimais(){
    const response = await axios.get('http//localhost:8000/animais')
    console.log(response.data)
}
function app(){
    console.log('ola')
}
app()