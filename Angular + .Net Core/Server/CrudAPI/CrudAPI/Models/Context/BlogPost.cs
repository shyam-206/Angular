using System;
using System.Collections.Generic;

namespace CrudAPI.Models.Context;

public partial class BlogPost
{
    public int BlogId { get; set; }

    public string? Description { get; set; }

    public string? Content { get; set; }

    public bool? IsVisible { get; set; }
}
