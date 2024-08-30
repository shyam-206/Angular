using System;
using System.Collections.Generic;

namespace CrudAPI.Models.Context;

public partial class Category
{
    public int CategoryId { get; set; }

    public string? Name { get; set; }
}
