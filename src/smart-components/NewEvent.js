import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
//SideNav Component
import RightSideNav from '../dumb-components/RightSideNav.component';
import LeftSideNav from '../dumb-components/LeftSideNav.component';
//Icon
import FaListUI from 'react-icons/lib/fa/list-ul';
//style

class NewEvent extends Component {
    render () {
      return (
        <div>
          <div className="container-fluid">
            <div className="row d-flex d-md-block flex-nowrap wrapper">
                <div className="col-md-3 col-sm-1 float-right col-1 pl-0 pr-0 collapse width hide" id="sidebar">
                  <RightSideNav />
                </div>
                <div className="col-md-1 float-right col pt-3 mt-3">
                    <a id="mainToggler" data-target="#sidebar" data-toggle="collapse"><FaListUI size={32} id="icon" /></a>
                </div>
                <main className="row col-md-8 float-left col px-5 pt-2 main" id="main"> 
                  <div className="page-header mt-3 col-md-3">
                  <LeftSideNav />
                  </div>
                  <div className="float-left mt-3 col-md-9">
                  <form>
                    <legend className="mt-2">Event Information</legend>
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
                    <span className="input-group-addon" id="basic-addon1">Schedule</span>
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
      </div>
     /*  <form>
        <legend className="mt-4">Event Information</legend>
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
        <span className="input-group-addon" id="basic-addon1">Schedule</span>
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
      </form> */
      )
    }
}
export default NewEvent;