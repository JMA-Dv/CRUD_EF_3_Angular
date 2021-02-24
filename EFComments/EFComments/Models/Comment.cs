using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace EFComments.Models
{
    public class Comment
    {
        public int Id { get; set; }
        [Required]
        public string Title { get; set; }
        [Required]
        public string CreatedBy { get; set; }
        [Required]
        public string Text { get; set; }
        [Required]
        public DateTime DateCreated { get; set; }

    }
}
