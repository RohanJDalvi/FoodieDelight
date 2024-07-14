using FoodieDelightAPI.Data;
using FoodieDelightAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace FoodieDelightAPI.Controllers
{
        [Route("api/[controller]")]
        [ApiController]
        public class RestaurantsController : ControllerBase
        {
            private readonly AppDbContext _context;

            public RestaurantsController(AppDbContext context)
            {
                _context = context;
            }

            [HttpGet]
            public async Task<ActionResult<IEnumerable<Restaurants>>> GetRestaurants()
            {
                return await _context.Restaurants.ToListAsync();
            }

            [HttpGet("{id}")]
            public async Task<ActionResult<Restaurants>> GetRestaurant(int id)
            {
                var restaurant = await _context.Restaurants.FindAsync(id);

                if (restaurant == null)
                {
                    return NotFound();
                }
                return restaurant;
            }

            [HttpPost]
            public async Task<ActionResult<Restaurants>> PostRestaurant(Restaurants restaurant)
            {
                _context.Restaurants.Add(restaurant);
                await _context.SaveChangesAsync();

                return CreatedAtAction(nameof(GetRestaurant), new { id = restaurant.Id }, restaurant);
            }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutRestaurant(int id, Restaurants updatedRestaurant)
        {
            var restaurant = await _context.Restaurants.FindAsync(id);
            if (restaurant == null)
            {
                return NotFound();
            }

            restaurant.Name = updatedRestaurant.Name;
            restaurant.Description = updatedRestaurant.Description;
            restaurant.Location = updatedRestaurant.Location;
            restaurant.Category = updatedRestaurant.Category;

            _context.Entry(restaurant).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RestaurantExists(id))
                {
                    return NotFound(new { message = "Restaurant not found." });
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }



        [HttpDelete("{id}")]
            public async Task<IActionResult> DeleteRestaurant(int id)
            {
                var restaurant = await _context.Restaurants.FindAsync(id);
                if (restaurant == null)
                {
                    return NotFound();
                }

                _context.Restaurants.Remove(restaurant);
                await _context.SaveChangesAsync();

                return NoContent();
            }

            private bool RestaurantExists(int id)
            {
                return _context.Restaurants.Any(e => e.Id == id);
            }
        }
    }

