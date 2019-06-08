using System.Collections.Generic;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using RepositoriesStore.API.Models;

namespace RepositoriesStore.API.SessionExtensions
{
    public static class SessionExtensions
    {
        private static List<string> sessionsKeys = new List<string>();

        public static List<string> SessionsKeys { get => sessionsKeys; set => sessionsKeys = value; }

        public static void SetObject(this ISession session, string key, object repository)
        {
            if(!SessionsKeys.Contains(key))
            {
                SessionsKeys.Add(key);
            }
            
            session.SetString(key, JsonConvert.SerializeObject(repository));
        }

        public static T GetObject<T>(this ISession session, string key)
        {
            var value = session.GetString(key);
            return value == null ? default(T) : JsonConvert.DeserializeObject<T>(value);
        }
    }

    
}