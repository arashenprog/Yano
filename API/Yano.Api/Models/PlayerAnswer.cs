namespace Yano.Api.Models
{
    public class PlayerAnswer : BaseModel
    {
        public ulong QuestionId { get; set; }

        public ulong PlayerId { get; set; }

        public Answer Answer { get; set; }
    }
}
