using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using GuitarTab.Models;
using System;

namespace GuitarTab.Controllers
{
    public class HomeController : Controller
    {
        [HttpGet("/")]
        public ActionResult Index()
        {
            return View();
        }

    }
}
