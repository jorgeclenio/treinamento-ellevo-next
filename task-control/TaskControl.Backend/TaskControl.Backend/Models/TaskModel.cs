using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskControl.Backend.Models
{
    public class TaskModel
    {
        public string Generator { get; set; }
        public string Title { get; set; }
        public string Description{ get; set; }
        public string Status { get; set; }
        public string Responsible { get; set; }
        public string Activity { get; set; }
    }
}
