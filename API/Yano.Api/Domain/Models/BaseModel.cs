using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Yano.Api.Domain.Models
{
    public abstract class BaseModel
    {
        [BsonId(IdGenerator = typeof(CounterIdGenerator))]
        public ulong Id { get; set; }
    }

    public class CounterIdGenerator : IIdGenerator
    {
        private static ulong _counter = 1;
        public object GenerateId(object container, object document)
        {
            return _counter++;
        }

        public bool IsEmpty(object id)
        {
            return id.Equals(default(ulong));
        }
    }
}
