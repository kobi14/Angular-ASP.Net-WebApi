using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApplication1.Models
{
    public class Welcome
    {

        public int Id { get; set; }
        public string Code { get; set; }
        public string Name { get; set; }
    }




    class Aaa {
        public int YY { get; set; }
    }

    class Bbb {
       

        public Bbb(Aaa a)
        {
            a.YY = 10;
        }
    }
    class ARef
    {
        Aaa a = new Aaa();
       
        void Test() {
            a.YY = 120;
            Bbb b = new Bbb(a);
        }
    }
}