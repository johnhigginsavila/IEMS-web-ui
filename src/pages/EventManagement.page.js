import React,  { Component } from 'react';
import LeftSideNav from '../components/common/LeftSideNav.component';
import '../styles/EventManagement.page.scss';
class EventManagementPage extends Component {
  render () {
    return (
        <div className="container-fluid newActivityContainer eventManagementContainer">
          <div className="row d-flex d-md-block flex-nowrap wrapper eventManagementBody">
            <main className="row col-12 main"> 
              <div className="page-header mt-3 col-sm-2 col-lg-2">
                <LeftSideNav />
              </div>
                {this.props.children}
            </main>
          </div>
        </div>
    );
  }
}

export default EventManagementPage;