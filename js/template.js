/* Header */
class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand mb-0 h1" href="index.html">
                        <img class="d-inline-block align-top" src="images/logo.png" width="30" height="30" alt="UNO logo">
                        | Systems Intelligence &amp; Data Analytics
                    </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="nav-menu">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                            <li class="nav-item"><a class="nav-link" href="team.html">Team</a></li>
                            <li class="nav-item"><a class="nav-link" href="services.html">Services</a></li>
                            <li class="nav-item"><a class="nav-link" href="dashboards.html">Dashboards</a></li>
                            <li class="nav-item"><a class="nav-link" href="reports.html">Reports</a></li>
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
        <footer class="text-center text-lg-start bg-light text-secondary p-1">
            <section class="">
                <div class="container text-center text-md-start">
                    <div class="row mt-3">
                        <div class="col-sm-12 col-lg-4">
                            <h6 class="text-uppercase fw-bold mb-4">Assurance of Data Quality</h6>
                            <p>
                                We seek to assure complete and accurate data by:
                                <ul>
                                    <li>Definition of terms</li>
                                    <li>Careful labeling of all data variables</li>
                                    <li>Data checks for out of range entries</li>
                                    <li>Cross comparisons with other data sets</li>
                                    <li>Regular review of how external agencies define important data items</li>
                                </ul>
                            </p>
                        </div>

                        <div class="col-sm-12 col-lg-4">
                            <h6 class="text-uppercase fw-bold mb-4">Related Sites</h6>
                            <p>
                                <a href="https://www.hlcommission.org/About-HLC/about-hlc.html" class="text-reset"
                                target="_blank" rel="noopener noreferrer">
                                Higher Learning Commission</a>
                            </p>
                            <p>
                                <a href="https://www.airweb.org/" class="text-reset" target="_blank" rel="noopener noreferrer">
                                Association for Institutional Research</a>
                            </p>
                            <p>
                                <a href="http://www.cumuonline.org/" class="text-reset" target="_blank" rel="noopener noreferrer">
                                Coalition of Urban and Metropolitan Universities</a>
                            </p>
                            <p>
                                <a href="https://www2.ed.gov/policy/gen/guid/fpco/ferpa/index.html"
                                    class="text-reset" target="_blank" rel="noopener noreferrer">
                                    Family Educational Rights and Privacy Act (FERPA)</a>
                            </p>
                            <p>
                                <a href="https://nces.ed.gov/ipeds/" class="text-reset" target="_blank" rel="noopener noreferrer">
                                Integrated Postsecondary Education Data System (IPEDS)</a>
                            </p>
                        </div>

                        <div class="col-sm-12 col-lg-4">
                            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i class="bi bi-telephone"></i> 402-554-2407</p>
                            <p><i class="bi bi-envelope"></i> sida@unomaha.edu</p>
                            <p><i class="bi bi-geo-alt"></i> 6001 University Drive</p>
                            <p><i class="bi bi-pin-map"></i> Omaha, Nebraska 68132</p>
                            <p><i class="bi bi-building"></i> 106 Eppley Administration Building</p>
                            <p><i class="bi bi-search"></i>
                            <a href="https://webapp.unomaha.edu/ticket-manager/sida/index.php" class="text-reset 
                            target="_blank" rel="noopener noreferrer"">
                              Request form for special reports or data</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
        `
    }
}
customElements.define('template-footer', Footer)