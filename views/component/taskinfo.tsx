import * as elements from 'typed-html';

export const taskinfo =
    <div>
      {/* <div class="col-12"> */}
        {/* <label for="taskname" class="form-label">Task Name</label> */}
        {/* <input type="text" class="form-control" id="taskname" placeholder="" value="" required="" name='taskname'/> */}
        {/* <div class="invalid-feedback">
          Valid task name is required.
        </div> */}
      {/* </div> */}

      <div class="col-12">
        <label for="taskdescription" class="form-label">Brief Description</label>
        <input type="text" class="form-control" id="taskdescription" placeholder="" value="" required="" name='taskdescription'/>
        <div class="invalid-feedback">
          Valid description is required.
        </div>
      </div>
    </div>

