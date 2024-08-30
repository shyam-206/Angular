using System;
using System.Collections.Generic;

namespace CrudAPI.Models.Context;

public partial class Employee
{
    public int Id { get; set; }

    public string? Name { get; set; }

    public string? Email { get; set; }

    public string? Phone { get; set; }

    public decimal? Salary { get; set; }
}
