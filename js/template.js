/* Header */
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navbar fixed-top navbar-expand-lg navbar-dark bg-black">
                <div class="container-fluid">
                    <a class="navbar-brand mb-0 header-long" href="https://www.unomaha.edu/index.php">
                        <img class="d-inline-block align-top img-fluid" src="images/logo.png" width="30" height="30" alt="UNO logo">
                        | <img class="d-inline-block align-top" src="images/logo-big.PNG" height="30" alt="UNO logo">
                    </a>


                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="nav-menu">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="index.html">HOME</a></li>
                            <li class="nav-item"><a class="nav-link" href="team.html">TEAM</a></li>
                            <li class="nav-item"><a class="nav-link" href="services.html">SERVICES</a></li>
                            <li class="nav-item"><a class="nav-link" href="dashboards.html">DASHBOARDS</a></li>
                            <li class="nav-item"><a class="nav-link" href="reports.html">REPORTS</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
       `
    }
}
customElements.define('template-header', Header)

/* Footer */
class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="text-lg-start bg-black text-white p-1 mt-3">
            <div class="container text-center">
                <div>
                    <p>
                        sida@unomaha.edu <br>
                        106 Eppley Administration Building <br>
                        6001 Dodge St,
                        Omaha, Nebraska 68132
                    </p>
                </div>
            </div>
        </footer>      
        `
    }
}
customElements.define('template-footer', Footer)