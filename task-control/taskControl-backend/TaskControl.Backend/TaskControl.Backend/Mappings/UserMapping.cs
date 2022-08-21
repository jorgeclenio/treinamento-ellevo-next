﻿using AutoMapper;
using MongoDB.Bson;
using TaskControl.Backend.Entities;
using TaskControl.Backend.Models;

namespace TaskControl.Backend.Mappings
{
    public class UserMapping : Profile
    {
        public UserMapping()
        {
            CreateMap<AddUserModel, UserEntity>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => ObjectId.GenerateNewId()))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.Username))
                .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password))
                .ForMember(dest => dest.Cpf, opt => opt.MapFrom(src => src.Cpf))
                .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.PhoneNumber))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email));

            CreateMap<UserEntity, UserModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Name))
                .ForMember(dest => dest.Username, opt => opt.MapFrom(src => src.Username))
                .ForMember(dest => dest.Password, opt => opt.MapFrom(src => src.Password))
                .ForMember(dest => dest.Cpf, opt => opt.MapFrom(src => src.Cpf))
                .ForMember(dest => dest.PhoneNumber, opt => opt.MapFrom(src => src.PhoneNumber))
                .ForMember(dest => dest.Email, opt => opt.MapFrom(src => src.Email));
        }
    }
}