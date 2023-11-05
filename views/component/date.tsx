import * as elements from 'typed-html';

export const date =           
<div id="date">
    <h4 class="mb-3">Payment</h4>

    <div class="row gy-3">
        <div class="col-md-6">
        <label for="datestart" class="form-label">Task Start Date</label> 
        <br />
        <input type="date" id='datestart' name='datestart'/>
        <br />
        </div>

        <div class="col-md-6">
        <label for="dateDayDuration" class="form-label">Days Until Due</label> 
        <br />
        <input type="number" id='dateDayDuration' min='1' name='dateDayDuration'/>
        </div>

        <div class="col-md-6">
        <label for="dadateendtestart" class="form-label">Maximum Daily Hours</label> 
        <br />
        <input type="number" id='maxHours' max='23' name='maxHours'/>
        </div>
    </div>

    <hr class="my-4"/>
</div>