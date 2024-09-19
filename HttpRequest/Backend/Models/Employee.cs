namespace EmployeeManagement.Models
{
    public class Employee
    {
        public Guid Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public int Age { get; set; }

        public string EmailAddress { get; set; } = string.Empty;

        public long PhoneNo { get; set; } 

    }
}
