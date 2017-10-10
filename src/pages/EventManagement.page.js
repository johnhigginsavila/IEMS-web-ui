import React,  { Component } from 'react';
import Navigation from '../smart-components/Navigation';
import { Link } from 'react-router';
//SideNav Component
import RightSideNav from '../dumb-components/RightSideNav.component';
import LeftSideNav from '../dumb-components/LeftSideNav.component';
//Icon
import FaListUI from 'react-icons/lib/fa/list-ul';
//style
import '../styles/eventManagement.page.scss';
class EventManagementPage extends Component {
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
              </div>
            </main>
        </div>
        </div>
      </div>
    );
  }
}

export default EventManagementPage;