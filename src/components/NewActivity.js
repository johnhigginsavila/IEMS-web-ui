import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import '../styles/NewActivity.scss';
import InputGroup from './common/InputGroup';

import * as ActivityAction from '../actions/ActivityAction';

class NewActivity extends Component {
  constructor (props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit (formProps) {
    console.log(formProps);
    this.props.addActivity(formProps);
  }
  render () {
    const {handleSubmit, fields: {activityName, event, startDate, endDate}} = this.props;
    return (
      <div className="container-fluid newActivityContainer">
        <div className="row d-flex d-md-block flex-nowrap wrapper newActivityBody">
            <main className="row col-12 main">
              <div className="col-12">
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                  <legend className="mt-2">Activity Information</legend>
                  <hr />
                  <InputGroup
                    label="Activity"
                    type="text"
                    form={activityName}
                  />
                  <br />
                  <InputGroup
                    label="Event"
                    type="text"
                    form={event}
                  />
                  <br />
                  <div className="input-group">
                  <span className="" id="basic-addon1">Schedule</span>
                  </div>
                  <hr />
                  <br />
                  <InputGroup
                    label="Start Date"
                    type="date"
                    form={startDate}
                  />
                  <br />
                  <InputGroup
                    label="End Date"
                    type="date"
                    form={endDate}
                  />
                  <br />
                  <input className="btn btn-primary ml-5" type="submit" value="Create Event" />
                  <input className="btn btn-primary ml-5" type="reset" value="Cancel" />
                </form>
                </div>
            </main>
        </div>
      </div>
    )
  }
}
export default reduxForm({
  form: 'newActivity',
  fields: ['activityName', 'event', 'startDate', 'endDate']
}, null, {...ActivityAction})(NewActivity);