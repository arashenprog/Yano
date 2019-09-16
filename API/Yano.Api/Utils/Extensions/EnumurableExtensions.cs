using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api.Utils.Extensions
{
    public static class EnumurableExtensions
    {
        public static T PickRandom<T>(this IEnumerable<T>  list)
        {
            var random = new Random();
            int index = random.Next(list.Count());
            return list.ElementAt(index);
        }
    }
}
