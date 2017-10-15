import React from 'react';
import Calendar from 'react-calendar';
import '../styles/RightSideNav.component.scss';
const RightSideNav = () => {
  return (
    <div>
      <div className="container-fluid">
        {/* <a className="sideNavToggler" id="sideNavToggler" data-target="#sidebar" data-toggle="collapse"><FaListUI size={32} id="icon" /></a>        
         */}<Calendar className="calendar mt-3" />
      </div>
    </div>
  )
}

export default RightSideNav;