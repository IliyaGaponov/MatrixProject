using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using RepositoriesStore.API.Models;
using RepositoriesStore.API.SessionExtensions;

namespace RepositoriesStore.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SessionController : Controller
    {
        [HttpGet("set")]
        public IActionResult setSession(string repositoryName, string avatarUrl)
        {
            Repository repository = new Repository{
                Name = repositoryName,
                AvatarUrl = avatarUrl
            };
         
            HttpContext.Session.SetObject(avatarUrl, repository);
            return Ok("The session was saved");
        }

        [HttpGet("get")]
        public IActionResult getSessions()
        {
            List<Repository> repositories = GetAllRepositories();
            
            if(repositories.Count > 0) 
                return Ok(repositories);                             
            else 
                return Ok("The sessions is not working");
        }

        private List<Repository> GetAllRepositories()
        {
            List<Repository> repositories = new List<Repository>();
            
            foreach(string key in SessionExtensions.SessionExtensions.SessionsKeys)
            {
                repositories.Add(HttpContext.Session.GetObject<Repository>(key));
            }

            return repositories;
        }
    }
}