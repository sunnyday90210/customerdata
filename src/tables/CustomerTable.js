import React from 'react';

const CustomerTable = () => (
  <table className="table">
    <thead className="text-white" style={{ background: '#333' }}>
      <tr>
        <th scope="col">Company</th>
        <th scope="col">Name</th>
        <th scope="col">Address</th>
        <th scope="col">Phone Number</th>
        <th scope="col">Comments</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">Test Company</th>
        <td>Mark Test</td>
        <td>1500 Test ave</td>
        <td>111-111-1111</td>
        <td>Mark is one of the best customers</td>
        <td>
          <button type="button" className="btn btn-outline-primary mr-2">
            Edit
          </button>
          <button type="button" className="btn btn-outline-danger">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
);

export default CustomerTable;
