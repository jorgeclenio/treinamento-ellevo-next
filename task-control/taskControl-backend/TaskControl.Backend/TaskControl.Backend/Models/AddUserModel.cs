namespace TaskControl.Backend.Models
{
    public class AddUserModel
    {
        public string Name { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public int Cpf { get; set; }
        public int PhoneNumber { get; set; }
        public string Email { get; set; }
    }
}
