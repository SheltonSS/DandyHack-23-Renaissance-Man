import * as elements from 'typed-html';

export const date =           
<div id="date">
    <h4 class="mb-3">Payment</h4>

    <div class="row gy-3">
        <div class="col-md-6">
        <label for="datestart" class="form-label">Task start</label> 
        <br />
        <input type="date" id='datestart'/>
        <br />
        </div>

        <div class="col-md-6">
        <label for="dateDayDuration" class="form-label">Task end</label> 
        <br />
        <input type="number" id='dateDayDuration' min='1'/>
        </div>

        <div class="col-md-6">
        <label for="dadateendtestart" class="form-label">Maximum daily hours</label> 
        <br />
        <input type="number" id='maxHours' max='23'/>
        </div>
    </div>

    <hr class="my-4"/>
</div>