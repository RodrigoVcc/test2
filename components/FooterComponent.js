class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `<footer class="footer">
      <div class="footer__picture">
        <img src="/images/ues.png" class="footer__image" />
        <p class="footer__class">Desarrollo de Aplicaciones Web</p>
      </div>
      <div class="footer__links">
        <a href="">About</a>
        <a href="">Contact</a>
      </div>
    </footer>`;
  }
}

window.customElements.define("footer-component", FooterComponent);
