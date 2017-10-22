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
    const {handleSubmit, fields: { event, contest, activityName, description, location, startDate, endDate}} = this.props;
    return (
      <div className="container-fluid newActivityContainer">
        <div className="row d-flex d-md-block flex-nowrap wrapper newActivityBody">
            <main className="row col-12 main">
              <div className="col-12 form">
                <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                  <legend className="mt-2">Activity Information</legend>
                  <InputGroup
                    label="Event:"
                    type="text"
                    form={event}
                  />
                  <br />
                  <div className="input-group">
                    <span className="input-group-addon">Contest:</span>
                      <span className="" style={{padding: '0.4rem'}}>
                        <input type="radio" form={contest} name="radioGroup" aria-label="Checkbox for following text input" />Yes
                      </span>
                      <span className="" style={{padding: '0.4rem'}}>
                        <input type="radio" form={contest} name="radioGroup" aria-label="Checkbox for following text input" />No
                      </span>
                  </div>
                  <br />
                  <InputGroup
                    label="Activity:"
                    type="text"
                    form={activityName}
                  />
                  <br />
                  <InputGroup
                    label="Description:"
                    type="text"
                    form={description}
                  />
                  <br />
                  <InputGroup
                    label="Location:"
                    type="text"
                    form={location}
                  />
                  <br />
                  <div className="input-group">
                  <span className="" id="basic-addon1">Schedule</span>
                  </div>
                  <br />
                  <InputGroup
                    label="Start Date:"
                    type="date"
                    form={startDate}
                  />
                  <br />
                  <InputGroup
                    label="End Date:"
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
        <hr />
        <div className="dropdown">
          <a className="btn btn-default dropdown-toggle" role="button" id="dropdownMenuLinkProgram" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Activity 1
          </a>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuLinkProgram">
            <a className="dropdown-item" >Activity 1</a>
            <a className="dropdown-item" >Activity 2</a>
          </div>
        </div>
        <hr />
      </div>
    )
  }
}
export default reduxForm({
  form: 'newActivity',
  fields: ['event', 'contest', 'activityName', ' description', 'location', 'startDate', 'endDate']
}, null, {...ActivityAction})(NewActivity);