import * as elements from 'typed-html';
const datepicker = require('js-datepicker')
const picker = datepicker('.date')

export const date =           
<div id="date">
    <h4 class="mb-3">Payment</h4>

    <div class="row gy-3">
        <div class="col-md-6">
            <input type="text" class="date"/>
        </div>

        <div class="col-md-6">
            <label for="cc-number" class="form-label">Credit card number</label>
            <input type="text" class="form-control" id="cc-number" placeholder="" required=""/>
            <div class="invalid-feedback">
            Credit card number is required
            </div>
        </div>

    </div>

    <hr class="my-4"/>
</div>