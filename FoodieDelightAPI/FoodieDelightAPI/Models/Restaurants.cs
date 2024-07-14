using System.ComponentModel.DataAnnotations;

namespace FoodieDelightAPI.Models
{
    public class Restaurants
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        public string Description { get; set; }
        public string Location { get; set; }
        public string Category { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime ModifiedOn { get; set; }
    }
}
