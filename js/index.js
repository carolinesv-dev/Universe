import { Router } from './router.js'
import * as actions from './actions.js'

const router = new Router()
router.add('/', './pages/home.html')
router.add('/universe', './pages/universe.html')
router.add('/exploration', './pages/exploration.html')
router.add('/404', './pages/404.html')

// navegação no carregamento da página
window.addEventListener('load', () => {
  // Atualiza a classe do body e o conteúdo da página inicial
  actions.updatePageClass();
  router.handle();
});

// Atualiza a navegação no histórico
window.addEventListener('popstate', () => {
  actions.updatePageClass();
  router.handle();
});

actions.clickNav()