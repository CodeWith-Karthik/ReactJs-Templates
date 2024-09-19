import React from 'react';

export default function Employees({ employees, onEdit }) {
  if (employees.length === 0) {
    return (
      <div>
        <h1>No Records to Show</h1>
      </div>
    );
  }

  return (
    <div className="cards">
      {employees.map((employee) => {
        return (
          <div key={employee.id} className="card">
            <p>
              <span className="title">Name: </span>
              {employee.name}
            </p>
            <p>
              <span className="title">Age: </span>
              {employee.age}
            </p>
            <p>
              <span className="title">Email Address: </span>
              {employee.emailAddress}
            </p>
            <p>
              <span className="title">Phone No: </span>
              {employee.phoneNo}
            </p>
            <div className="btn-group">
              <button
                className="btn-update"
                onClick={() => {
                  onEdit(employee.id);
                }}
              >
                Edit
              </button>
              <button className="btn-delete">Delete</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
