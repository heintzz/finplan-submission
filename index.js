const image = document.querySelector('.profpic')

window.addEventListener('load', () => {
  const src = localStorage.getItem('src')
  if (src) {
    image.setAttribute('style', `background-image: url(${src})`)
  }
})

// image.addEventListener('click', () => {
//   window.location.href = './components/change.html'
// })
