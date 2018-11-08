import React from 'react';
import CustomerTable from './tables/CustomerTable';

const App = () => {
  const customerData = [
    {
      company: 'test',
      name: 'Mark Test'
    }
  ];

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-sm navbar-dark mb-3 py-0"
        style={{ background: 'tomato' }}
      >
        <div className="container">
          <a href="/" className="navbar-brand">
            Vision
            <span>Pro</span>
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  <i className="fas fa-question" /> Help
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  <i className="fas fa-cog" /> Settings
                  <i
                    className="fas fa-sort-down"
                    style={{ float: 'right', padding: '1px' }}
                  />
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link text-white">
                  <i className="fas fa-user" /> Amin.Eshaq(demo)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <h1>Customer Center</h1>
        <div className="card card-body mb-3">
          <h2>Add Customer</h2>
        </div>
        <div className="card card-body mb-3">
          <h2>View Customer</h2>
          <CustomerTable />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
