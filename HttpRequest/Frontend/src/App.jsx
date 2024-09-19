import { useEffect, useState } from 'react';
import './App.css';
import Employees from './components/Employees';
import EmployeeUpsert from './components/EmployeeUpsert';

function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: 'Alex',
      age: 36,
      emailAddress: 'alex@gmail.com',
      phoneNo: 789461230,
    },
    {
      id: 2,
      name: 'John',
      age: 28,
      emailAddress: 'john@gmail.com',
      phoneNo: 789461230,
    },
  ]);

  const [employee, setEmployee] = useState(null);

  useEffect(() => {}, [employee]);

  const handleAdd = (newEmployee) => {
    setEmployees((prevEmployees) => [
      ...prevEmployees,
      { ...newEmployee, id: prevEmployees.length + 1 }, // Assign a new unique id
    ]);
  };

  const handleEdit = (id) => {
    const emp = employees.find((x) => x.id === id);
    setEmployee(emp);
  };

  const handleUpdate = (updatedEmployee) => {
    setEmployees((prevEmployees) =>
      prevEmployees.map((emp) =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setEmployee(null); // Clear the form after update
  };

  const handleReset = () => {
    setEmployee(null); // Switch back to "Add" mode
  };

  return (
    <div className="main-container">
      <Employees employees={employees} onEdit={handleEdit} />
      <EmployeeUpsert
        employee={employee}
        onReset={handleReset}
        onUpdate={handleUpdate}
        onAdd={handleAdd}
      />
    </div>
  );
}

export default App;
