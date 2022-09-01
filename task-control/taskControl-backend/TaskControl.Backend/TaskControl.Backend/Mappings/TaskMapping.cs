using AutoMapper;
using MongoDB.Bson;
using TaskControl.Backend.Entities;
using TaskControl.Backend.Models;

namespace TaskControl.Backend.Mappings
{
    public class TaskMapping : Profile
    {
        public TaskMapping()
        {
            CreateMap<AddTaskModel, TaskEntity>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => ObjectId.GenerateNewId()))
                .ForMember(dest => dest.GeneratorId, opt => opt.MapFrom(src => new ObjectId(src.GeneratorId)))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status))
                .ForMember(dest => dest.ResponsibleId, opt => opt.MapFrom(src => new ObjectId(src.ResponsibleId)))
                .ForMember(dest => dest.ActivityId, opt => opt.MapFrom(src => new ObjectId(src.ActivityId)));

            CreateMap<TaskEntity, TaskModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id.ToString()))
                .ForMember(dest => dest.GeneratorId, opt => opt.MapFrom(src => src.GeneratorId))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status))
                .ForMember(dest => dest.ResponsibleId, opt => opt.MapFrom(src => src.ResponsibleId))
                .ForMember(dest => dest.ActivityId, opt => opt.MapFrom(src => src.ActivityId));

            CreateMap<UpdateTaskModel, TaskEntity>()
                .ForMember(dest => dest.GeneratorId, opt => opt.MapFrom(src => new ObjectId(src.GeneratorId)))
                .ForMember(dest => dest.Title, opt => opt.MapFrom(src => src.Title))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
                .ForMember(dest => dest.Status, opt => opt.MapFrom(src => src.Status))
                .ForMember(dest => dest.ResponsibleId, opt => opt.MapFrom(src => new ObjectId(src.ResponsibleId)))
                .ForMember(dest => dest.ActivityId, opt => opt.MapFrom(src => new ObjectId(src.ActivityId)));
        }
    }
}
