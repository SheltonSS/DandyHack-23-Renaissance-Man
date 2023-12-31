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
    <div id='loadingspinner'></div>
    <h1 style='font-size: 25'>Enter In Your Task!</h1>
    <br></br>

    <div class="row r-5 ">  
      <div class="col-md-7 col-lg-8">
        <form id='form' action="/create-task/process" method='POST'>
          {taskinfo}
          {date}
          <button class="w-100 btn btn-primary btn-lg" style='background-color: #FE938C;' type='submit' >Generate Schedule</button>
        </form>
      </div>
    </div>

    </div>
  </section>

</main>

<footer id="footer">
  <div class="container py-4">
    <div class="credits">
      Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
    </div>
  </div>
</footer>

<a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

<script src="assets/vendor/aos/aos.js"></script>
<script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>


<script src="assets/js/main.js"></script>

</div>