import React,  { Component } from 'react';

class AdminPage extends Component {
  render () {
    return (
      <div>
        <div className="container py-4">
          <div className="row">
              <div className="col-md-10 my-4 mx-auto">
                  <h4 className="text-left">User registration</h4>             
                  <hr />
                  <div className="row">
                      <div className="col-lg-12">
                          <div className="table-responsve">
                          <table className="table table-striped table-hover">
                            <thead className="thead-inverse">
                              <tr>
                                <th className="">Student Number/ID</th>
                                <th className="">Name</th>
                                <th className="">Position</th>
                                <th className="">Type</th>
                                <th className=""></th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="text-uppercase font-weight-bold">
                                <td>3212489</td>
                                <td>Juan Dela Cruz</td>
                                <td>Student</td>
                                <td>Member</td>
                                <td><button className="btn btn-success">Accept</button>
                                <button className="btn btn-danger ml-3">Deny</button></td>
                              </tr>
                            </tbody>
                            <tfoot className="">
                            </tfoot>
                          </table>
                      </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      </div>
    );
  }
}

export default AdminPage;