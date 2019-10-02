namespace Yano.Api.Domain.Models
{
    public class PlayerAnswer : BaseModel
    {
        public ulong QuestionId { get; set; }

        public ulong PlayerId { get; set; }

        public Answer Answer { get; set; }
        public string DisLikeReason { get; set; }
    }
}
