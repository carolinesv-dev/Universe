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


export function clickNav() {
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll('#navigation a');

  navLinks.forEach(function(link) {
    if (link.href === currentUrl) {
      link.classList.add('active');
    } else {
      link.classList.remove('active'); // Opcional: remover a classe 'active' dos links não correspondentes
    }
  });
}

// Garante que clickNav seja chamado quando o DOM estiver completamente carregado
document.addEventListener('DOMContentLoaded', clickNav);