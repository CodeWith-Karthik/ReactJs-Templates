using EmployeeManagement.Data;
using EmployeeManagement.Models;
using Microsoft.AspNetCore.Mvc;

namespace EmployeeManagement.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        [HttpGet]
        public IActionResult GetEmployees()
        {
            var employees = DataStore.GetEmployees();
            return Ok(employees);
        }

        [HttpGet("{id}")]
        public IActionResult GetEmployeeById(Guid id)
        {
            var employee = DataStore.GetEmployeeById(id);

            if (employee == null)
            {
                return NotFound($"Employee with Id: {id} not found.");
            }

            return Ok(employee);
        }

        [HttpPost]
        public IActionResult AddEmployee([FromBody] Employee employee)
        {
            if (employee == null)
            {
                return BadRequest("Employee data is null.");
            }

            var employeeId = DataStore.AddEmployee(employee);
            return CreatedAtAction(nameof(GetEmployeeById), new { id = employeeId }, employee);
        }

        [HttpPut("{id}")]
        public IActionResult UpdateEmployee(Guid id, [FromBody] Employee employee)
        {
            if (employee == null || employee.Id != id)
            {
                return BadRequest("Invalid employee data.");
            }

            var isUpdated = DataStore.UpdateEmployee(employee);

            if (!isUpdated)
            {
                return NotFound($"Employee with Id: {id} not found.");
            }

            return NoContent(); 
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteEmployee(Guid id)
        {
            var isDeleted = DataStore.DeleteEmployee(id);

            if (!isDeleted)
            {
                return NotFound($"Employee with Id: {id} not found.");
            }

            return NoContent(); 
        }
    }
}
