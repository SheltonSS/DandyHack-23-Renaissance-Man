import * as elements from 'typed-html';

export const taskinfo =
    <div>
      <div class="col-12">
        <label for="taskdescription" class="form-label">Brief Description</label>
        <input type="text" class="form-control" id="taskdescription" placeholder="" value="" required="" name='taskdescription'/>
        <div class="invalid-feedback">
          Valid description is required.
        </div>
      </div>
    </div>

