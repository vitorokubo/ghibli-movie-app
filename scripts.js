//Criando a variavel resquest e atribuindo a uma novo objeto XMLHttpRequest.
var request = new XMLHttpRequest()

/* podemos fazer por fetch API e async/wait.
function getData(){
  const reponse = await fetch('https://ghibliapi.herokuapp.com/films')
  const data = await reponse.json()}
*/

//Abrir uma nova conecção, usando a requisição GET na URL

request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)

request.onload = function () {
  //Acessando dados JSON aqui

  var data = JSON.parse(this.response)

  //Recebemos as repostas da requisição HTTP em JSON, e precisamos converter o JSON para um objeto JavaScript

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      //Cria a div com a class card

      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      //Cria um h1 e define o conteudo de texto como o titulo do filme
      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      //Cria uma imagem e define a

      const poster = document.createElement('img')
      poster.src = movie.movie_banner

      //Cia um p e define o conteudo texto como a descrição do filme

      const p = document.createElement('p')
      movie.description = movie.description.substring(0.3)
      p.textContent = `${movie.description}...`

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(poster)

      card.appendChild(p)
    })
  } else {
    console.log('error')
  }
}

//Enviando requisição
request.send()

const app = document.getElementById('root')
const logo = document.createElement('img')
logo.src = './logo.png'

const container = document.createElement('div')

container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)
