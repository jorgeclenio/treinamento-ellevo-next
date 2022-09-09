using AutoMapper;
using MongoDB.Bson;
using TaskControl.Backend.Entities;
using TaskControl.Backend.Models;

namespace ActivityControl.Backend.Mappings
{
    public class ActivityMapping : Profile
    {
        public ActivityMapping()
        {
            CreateMap<AddActivityModel, ActivityEntity>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => ObjectId.GenerateNewId()))
                .ForMember(dest => dest.TaskId, opt => opt.MapFrom(src => new ObjectId(src.TaskId)))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description));

            CreateMap<UpdateActivityModel, ActivityEntity>()
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description));

            CreateMap<ActivityEntity, ActivityModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id.ToString()))
                .ForMember(dest => dest.Description, opt => opt.MapFrom(src => src.Description))
                .ForMember(dest => dest.TaskId, opt => opt.MapFrom(src => src.TaskId.ToString()))
                .ForMember(dest => dest.Date, opt => opt.MapFrom(src => src.Id.CreationTime));
        }
    }
}
