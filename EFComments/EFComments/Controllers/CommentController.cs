using EFComments.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace EFComments.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CommentController(AppDbContext context)
        {
            _context = context;

        }
        // GET: api/<CommentController>
        [HttpGet]
        public ActionResult<Comment> Get()
        {
            try
            {
                var listComment = _context.Comment.ToList();
                return Ok(listComment);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
                
            }
        }

        // GET api/<CommentController>/5
        [HttpGet("{id}")]
        public ActionResult<Comment> Get(int id)
        {
            try
            {
                var comment = _context.Comment.Find(id);
                if (comment == null)
                {
                    return NotFound();
                }
                return Ok(comment);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);

            }
        }

        // POST api/<CommentController>
        [HttpPost]
        public ActionResult Post([FromBody] Comment comment)
        {
            try
            {
                _context.Add(comment);
                _context.SaveChanges();


                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // PUT api/<CommentController>/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Comment comment)
        {
            try
            {
                if (id != comment.Id)
                {
                    return BadRequest();

                }
                _context.Entry(comment).State = EntityState.Modified;
                _context.Update(comment);
                _context.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        // DELETE api/<CommentController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var comment = _context.Comment.Find(id);
                if (comment == null)
                {
                    return NotFound();

                }
                
                _context.Remove(comment);
                _context.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
