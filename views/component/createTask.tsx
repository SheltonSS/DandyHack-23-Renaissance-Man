import * as elements from 'typed-html';
import { taskinfo } from './taskinfo';
import { date } from './date';

export const createTask = 
<div>
<header id="header" class="fixed-top ">
  <div class="container d-flex align-items-center justify-content-between">

    <div class="logo">
      <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"/></a>
    </div>

    

  </div>
</header>

<main id="main">
  <section class="inner-page">
    <div class="container">
    
    <div class="py-5 ">
      <h2>Create a new task</h2>
    </div>
    
    <div class="row r-5 ">  
      <div class="col-md-7 col-lg-8">
        <form id='form'>
          {taskinfo}
          {date}
        </form>
        <button class="w-100 btn btn-primary btn-lg" hx-trigger="click" hx-post="/create-task/process" hx-swap="#form" hx-include="#form">Generate Sceduale</button>
      </div>
    </div>

    </div>
  </section>

</main>

<footer id="footer">
  <div class="container py-4">
    <div class="copyright">
      &copy; Copyright <strong><span>Appland</span></strong>. All Rights Reserved
    </div>
    <div class="credits">
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
<script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
<script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
<script src="assets/vendor/php-email-form/validate.js"></script>

<script src="assets/js/main.js"></script>

</div>