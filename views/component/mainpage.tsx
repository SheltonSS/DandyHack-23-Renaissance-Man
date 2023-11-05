import * as elements from 'typed-html';
export const mainPage = <div>
<header id="header" class="fixed-top  header-transparent ">
    <div class="container d-flex align-items-center justify-content-between">
      <div class="logo">
        <h1>Renaissance m </h1>
      </div>

      <nav id="navbar" class="navbar">
        <ul>
          <li><a class="nav-link scrollto active" href="#hero">Home</a></li>
          <li><a class="getstarted scrollto" href="#features">About</a></li>
        </ul>
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
  <section id="hero" style='justify-content: center;' class="d-flex align-items-center">
    <div >
      <div id='click' style="width: 100%;"class="col-lg-6 d-lg-flex flex-lg-column justify-content-center align-items-stretch pt-5 pt-lg-0 order-2 order-lg-1 aos-init aos-animate" data-aos="fade-up">
        <a href="/create-task">
          <div class='image'/>
          <div class='imageButton'/>
        </a>
      </div>
    </div>
  </section>
  <footer id="footer">
  <div class="container py-4">
    <div class="credits">
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>
  </div>


