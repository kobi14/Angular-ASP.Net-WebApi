using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;
using System.Web.Http.Cors;

namespace WebApplication1.Controllers
{
    [RoutePrefix("Welcome")]
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]

    public class WelcomeController : ApiController
    {

        public WelcomeController()
        {

        }


        [HttpGet]
        [Route("GetAllWelcomes")]
        // [EnableCors("AllowSpecificOrigin")]

        public HttpResponseMessage GetAllWelcomes()
        {
            try
            {

                List<Welcome> WelList = new List<Welcome>();
                WelList.Add(new Welcome() { Id = 1, Code = "Code 0", Name = "Asanga" });
                WelList.Add(new Welcome() { Id = 2, Code = "Code 2", Name = "Sajith Premadasa" });

                return Request.CreateResponse<List<Welcome>>(HttpStatusCode.OK, WelList);

            }
            catch(Exception ex)
            {
                return Request.CreateResponse(HttpStatusCode.InternalServerError, ex);
            }

        }


    }
}

