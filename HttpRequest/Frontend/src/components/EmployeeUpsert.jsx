import React, { useState, useEffect } from 'react';

export default function EmployeeUpsert({ employee, onReset, onUpdate, onAdd }) {
  const [formState, setFormState] = useState({
    name: '',
    age: '',
    emailAddress: '',
    phoneNo: '',
  });

  useEffect(() => {
    if (employee) {
      setFormState({
        name: employee.name,
        age: employee.age,
        emailAddress: employee.emailAddress,
        phoneNo: employee.phoneNo,
      });
    } else {
      // If no employee is passed, reset form to empty values
      setFormState({
        name: '',
        age: '',
        emailAddress: '',
        phoneNo: '',
      });
    }
  }, [employee]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (employee) {
      // Update existing employee
      const updatedEmployee = { ...employee, ...formState };
      onUpdate(updatedEmployee);
      setFormState({
        name: '',
        age: '',
        emailAddress: '',
        phoneNo: '',
      });
    } else {
      // If no employee is passed, reset form to empty values
      onAdd(formState);
    }
    setFormState({
      name: '',
      age: '',
      emailAddress: '',
      phoneNo: '',
    });
  };

  const handleReset = () => {
    // Reset the form and clear the employee (switch to 'Add' mode)
    setFormState({
      name: '',
      age: '',
      emailAddress: '',
      phoneNo: '',
    });

    onReset();
  };

  console.log(employee);
  return (
    <div>
      <div className="form-container">
        <h1>{employee ? 'Update Employee' : 'Add Employee'}</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            name="age"
            value={formState.age}
            onChange={handleChange}
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            name="emailAddress"
            value={formState.emailAddress}
            onChange={handleChange}
          />
          <label htmlFor="phoneNo">Phone No</label>
          <input
            type="number"
            name="phoneNo"
            value={formState.phoneNo}
            onChange={handleChange}
          />
          <button className="btn-submit" type="submit">
            {employee ? 'Update' : 'Add'}
          </button>
          <button type="button" className="btn-reset" onClick={handleReset}>
            Reset
          </button>
        </form>
      </div>
    </div>
  );
}
