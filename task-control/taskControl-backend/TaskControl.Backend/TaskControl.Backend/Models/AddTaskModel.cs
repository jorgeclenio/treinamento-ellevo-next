using TaskControl.Backend.Enums;

namespace TaskControl.Backend.Models
{
    public class AddTaskModel
    {
        public string GeneratorId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public ETaskTypes Status { get; set; }
        public string ResponsibleId { get; set; }
    }
}
