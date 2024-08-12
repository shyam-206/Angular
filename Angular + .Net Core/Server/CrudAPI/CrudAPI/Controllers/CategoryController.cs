using CrudAPI.Models.Context;
using CrudAPI.Models.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CrudAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly ApplicationDbContext db;

        public CategoryController(ApplicationDbContext db)
        {
            this.db = db;
        }

        [HttpPost("CreateCategory")]
        public async Task<IActionResult> CreateCategory(CategoryModel categoryModel)
        {
            Category category = new Category();
            category.Name = categoryModel.Name;

            await db.Categories.AddAsync(category);
            await db.SaveChangesAsync();

            return Ok(new { message = "Category created successfully" });
        }
    }
}
