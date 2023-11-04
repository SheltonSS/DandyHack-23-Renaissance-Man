import * as elements from 'typed-html';

export const taskinfo =
    <div>
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

