using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.Owin;
using Owin;
//using Microsoft.Extensions.DependencyInjection;
//using Microsoft.AspNetCore.Authorization;

[assembly: OwinStartup(typeof(WebApplication1.Startup))]

namespace WebApplication1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }

        //public void ConfigureServices(IServiceCollection services)
        //{
        //    services.AddCors(options =>
        //    {
        //        options.AddPolicy("AllowAll",
        //                  p => p.AllowAnyOrigin()
        //                        .AllowAnyHeader()
        //                        .AllowAnyMethod()
        //                        .AllowCredentials());
        //    });
        //}
    }
}
