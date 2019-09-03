using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api
{
    public class JsonResult<T>
    {
        JsonResult(T result)
        {
            Result = result;
        }


        JsonResult(bool success, T result)
        {
            Success = success;
            Result = result;
        }
        public bool Success { get; set; } = true;
        public T Result { get; set; }
    }
}
