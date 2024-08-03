import * as actions from "./actions.js"

export class Router {
  routes = {}

  add(routeName, page) {
    this.routes[routeName] = page
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    const url = event ? event.target.href : window.location.href
    window.history.pushState({}, "", URL(url).pathname)

    this.handle()

    actions.updatePageClass() // atualiza a classe do body
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes['/404']

    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
}