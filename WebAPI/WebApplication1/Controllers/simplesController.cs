using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebApplication1.Models;


namespace WebApplication1.Controllers
{
    public class simplesController : ApiController
    {
        private DBModel db = new DBModel();

        // GET: api/simples
        public IQueryable<simple> Getsimples()
        {
            return db.simples;
        }

        // GET: api/simples/5
        [ResponseType(typeof(simple))]
        public IHttpActionResult Getsimple(int id)
        {
            simple simple = db.simples.Find(id);
            
            if (simple == null)
            {
                return NotFound();
            }

            return Ok(simple);
        }

        // PUT: api/simples/5
        [ResponseType(typeof(void))]
        [System.Web.Http.HttpPut]

        public IHttpActionResult Putsimple(int id, simple simple)
        {
            if (!ModelState.IsValid)
            {
               
              
               return BadRequest(ModelState);
            }

            if (id != simple.Id)
            {
                return BadRequest();
            }

            db.Entry(simple).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!simpleExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/simples
        [ResponseType(typeof(simple))]
        public IHttpActionResult Postsimple(simple simple)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.simples.Add(simple);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = simple.Id }, simple);
        }

        // DELETE: api/simples/5
        [ResponseType(typeof(simple))]
        public IHttpActionResult Deletesimple(int id)
        {
            simple simple = db.simples.Find(id);
            if (simple == null)
            {
                return NotFound();
            }

            db.simples.Remove(simple);
            db.SaveChanges();

            return Ok(simple);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool simpleExists(int id)
        {
            return db.simples.Count(e => e.Id == id) > 0;
        }
    }
}