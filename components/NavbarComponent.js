class NavbarComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<nav class="flex justify-between items-center w-[92%] mx-auto py-2 md:px-[70px] ">
        <div class="cursor-pointer text-[#FF5353] header__logo">
          <a href="/index.html" class="flex items-center justify-center gap-2">
            <img src="/images/heart.svg" alt="">
            <p class="font-semibold">Everlasting</p>
          </a>
        </div>
        <div
          class="nav-links duration-500 md:static absolute  text-black md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 header__links z-10"
        >
          <ul
            class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-2"
          >
            <li>
              <a class="hover:text-gray-500" href="/index.html">Inicio</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="/pages/about.html">Quienes somos</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="/pages/customers.html">Nuestros clientes</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="/pages/team.html">Equipo</a>
            </li>
            <li>
              <a class="hover:text-gray-500" href="/pages/contacto.html">Contactos</a>
            </li>
          </ul>
        </div>
        <div class="flex items-center gap-6">
          <button
            class="bg-[#FF5353] text-white px-5 py-2 rounded-full hover:bg-[#87acec]"
          >
            Sign in
          </button>
          <ion-icon
            onclick="onToggleMenu(this)"
            name="menu"
            class="text-3xl cursor-pointer md:hidden"
          ></ion-icon>
        </div>
      </nav>`;
    }
}

window.customElements.define("navbar-component", NavbarComponent);
