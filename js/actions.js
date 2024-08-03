export function updatePageClass() {

  document.body.classList.remove('home', 'universe', 'exploration')

  const path = window.location.pathname

  if (path === '/') {
    document.body.classList.add('home')
  } else if (path === '/universe') {
    document.body.classList.add('universe')
  } else if (path === '/exploration') {
    document.body.classList.add('exploration')
  }
}

window.addEventListener('load', updatePageClass) // qdo page carregar
window.addEventListener('popstate', updatePageClass) // qdo nav mudar


export function clickNav () {
  document.addEventListener('DOMContentLoaded', function () {
    // Obtém a URL da página atual
    const currentUrl = window.location.pathname;
  
    // Seleciona todos os links de navegação
    const navLinks = document.querySelectorAll('#navigation a');
  
    navLinks.forEach(function(link) {
        // Verifica se o href do link corresponde à URL da página atual
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active'); // Adiciona a classe 'active' ao link
        }
    });
  });
}