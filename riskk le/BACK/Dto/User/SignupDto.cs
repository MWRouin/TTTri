namespace backend.Dto
{
    public class SignUpDto
    {
        public required string Email { get; set; }
        public required string Password { get; set; }
        public required string Firstname { get; set; }
        public required string Lastname { get; set; }
        public required string Telephone { get; set; }
        public required string Addresse { get; set; }
    }
}