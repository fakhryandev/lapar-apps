import 'regenerator-runtime' /* for async await transpile */
import '../styles/main.css'
import '../styles/responsive.css'
import App from './views/app'

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('.app-bar .app-bar__navigation'),
    content: document.querySelector('#mainContent'),
})

window.addEventListener('hashchange', () => {
    app.renderPage()
})

window.addEventListener('load', () => {
    app.renderPage()
})
