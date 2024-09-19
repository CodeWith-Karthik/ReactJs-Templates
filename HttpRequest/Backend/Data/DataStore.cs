using EmployeeManagement.Models;

namespace EmployeeManagement.Data
{
    public static class DataStore
    {
        private static List<Employee> employees = new();


        public static List<Employee> GetEmployees()
        {
            return employees;
        }

        public static Employee GetEmployeeById(Guid id)
        {
            return employees.Where(x=>x.Id == id).FirstOrDefault();
        }

        public static Guid AddEmployee(Employee employee) 
        {
            employee.Id = Guid.NewGuid();
            employees.Add(employee);
            return employee.Id;
        }

        public static bool UpdateEmployee(Employee employee)
        {
            var existingEmployee = employees.Where(x => x.Id == employee.Id).FirstOrDefault();

            if (existingEmployee != null)
            {
                existingEmployee.Name = employee.Name;
                existingEmployee.Age = employee.Age;
                existingEmployee.EmailAddress = employee.EmailAddress;
                existingEmployee.PhoneNo = employee.PhoneNo;
                return true;  
            }

            return false; 
        }

        public static bool DeleteEmployee(Guid id)
        {
            var employee = employees.Where(x => x.Id == id).FirstOrDefault();

            if (employee != null)
            {
                employees.Remove(employee);
                return true;  
            }

            return false;  
        }
    }
}
