import * as elements from 'typed-html';

export const date =           
<div id="date">
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
</div>