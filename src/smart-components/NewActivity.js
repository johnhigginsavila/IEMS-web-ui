import React, { Component } from 'react';
import LeftSideNav from '../dumb-components/LeftSideNav.component';
import '../styles/NewActivity.scss';

class NewActivity extends Component {
    render () {
      return (
        <div className="container-fluid newActivityContainer">
          <div className="row d-flex d-md-block flex-nowrap wrapper newActivityBody">
              <main className="row col-12 main"> 
                <div className="page-header mt-3 col-sm-2 col-lg-2">
                  <LeftSideNav />
                </div>
                <div className="mt-3 col-sm-8 col-lg-8">
                  <form>
                    <legend className="mt-2">Activity Information</legend>
                    <hr />
                    <div className="input-group">
                      <span className="input-group-addon" id="basic-addon1">Title</span>
                      <input type="text" className="form-control" placeholder="" aria-label="title" aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">Description</span>
                    <input type="text" className="form-control" placeholder="" aria-label="description" aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="input-group">
                    <span className="" id="basic-addon1">Schedule</span>
                    </div>
                    <hr />
                    <br />
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">Start Date:</span>
                    <input type="date" className="form-control" placeholder="" aria-label="description" aria-describedby="basic-addon1" />
                    </div>
                    <br />
                    <div className="input-group">
                    <span className="input-group-addon" id="basic-addon1">End Date:</span>
                    <input type="date" className="form-control" placeholder="" aria-label="description" aria-describedby="basic-addon1" />
                    </div>
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
export default NewActivity;