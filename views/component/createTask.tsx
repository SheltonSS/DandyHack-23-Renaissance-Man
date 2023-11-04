import * as elements from 'typed-html';

export const createTask = <div>

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
      <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
        <li class="nav-item" role="presentation">
          <button class="nav-link active rounded-5" id="info-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true" data-script="on click toggle #taskinfo">Task info</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link rounded-5" id="date-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Task Date</button>
        </li>
        <li class="nav-item" role="presentation">
          <button class="nav-link rounded-5" id="finish-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Finish</button>
        </li>
      </ul>
    </div>
    
    <div class="row r-5 "> 
      <div class="col-md-7 col-lg-8">
        <h4 class="mb-3">Create new task</h4>
        <form class="needs-validation" novalidate="">
          <div class="row g-3"id='taskinfo'>
            <div class="col-12">
              <label for="taskname" class="form-label">Task Name</label>
              <input type="text" class="form-control" id="taskname" placeholder="" value="" required=""/>
              <div class="invalid-feedback">
                Valid task name is required.
              </div>
            </div>

            <div class="col-12">
              <label for="taskdescription" class="form-label">Brief Description</label>
              <input type="text" class="form-control" id="taskdescription" placeholder="" value="" required=""/>
              <div class="invalid-feedback">
                Valid description is required.
              </div>
            </div>

            <div class="col-12">
              <label for="email" class="form-label">Email </label>
              <input type="email" class="form-control" id="email" placeholder="you@example.com"required=""/>
              <div class="invalid-feedback">
                Please enter a valid email address.
              </div>
            </div>
          </div>


          <hr class="my-4"/>

          <h4 class="mb-3">Payment</h4>

          <div class="row gy-3">
            <div class="col-md-6">
              <label for="cc-name" class="form-label">Name on card</label>
              <input type="text" class="form-control" id="cc-name" placeholder="" required=""/>
              <small class="text-body-secondary">Full name as displayed on card</small>
              <div class="invalid-feedback">
                Name on card is required
              </div>
            </div>

            <div class="col-md-6">
              <label for="cc-number" class="form-label">Credit card number</label>
              <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
              <div class="invalid-feedback">
                Credit card number is required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-expiration" class="form-label">Expiration</label>
              <input type="text" class="form-control" id="cc-expiration" placeholder="" required=""/>
              <div class="invalid-feedback">
                Expiration date required
              </div>
            </div>

            <div class="col-md-3">
              <label for="cc-cvv" class="form-label">CVV</label>
              <input type="text" class="form-control" id="cc-cvv" placeholder="" required=""/>
              <div class="invalid-feedback">
                Security code required
              </div>
            </div>
          </div>

          <hr class="my-4"/>

          <button class="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
        </form>
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