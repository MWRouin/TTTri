namespace backend.Utils

{
    public static class ExceptionCatch
    {
        public static void InsertDataException(string connectionString, ExceptionDb e)
        {
            string qs = @"INSERT INTO ExceptionDb(
                            [Message]
                            ,[Stacktrace]
                            ,[Data]
                            ,[HResult]
                            ,[FunctionName]
                            ,[InPlaintext]
                            ,[Repository]
                            ,[CreateDate]) 
                        VALUES(@Message, @Stacktrace, @Data, @HResult, @FunctionName, @InPlaintext,@Repository, @CreateDate)";

            CreateCommand(qs, connectionString, e);
        }

        private static void CreateCommand(string queryString, string connectionString, ExceptionDb e)
        {
            using SqlConnection connection = new(connectionString);
            connection.Open();
            SqlCommand command = new(queryString, connection);
            command.Parameters.Add(new SqlParameter("@Message", e.Message));
            command.Parameters.Add(new SqlParameter("@Stacktrace", e.Stacktrace));
            command.Parameters.Add(new SqlParameter("@Data", e.Data));
            command.Parameters.Add(new SqlParameter("@HResult", e.Hresult));
            command.Parameters.Add(new SqlParameter("@Repository", e.Repository));
            command.Parameters.Add(new SqlParameter("@FunctionName", e.FunctionName));
            command.Parameters.Add(new SqlParameter("@InPlaintext", e.InPlaintext));
            command.Parameters.Add(new SqlParameter("@CreateDate", e.CreateDate));

            try{

                command.ExecuteNonQuery();
            }catch(Exception ex ){
                throw new Exception("", ex);
            }
         
            connection.Close();
        }

        public static ExceptionDb CreateInstanceExceptionDb(Exception e, string Repository, string functionName)
        {
            ExceptionDb exceptionDb1 = new()
            {

                InPlaintext = ExceptionExtensions.InPlainText(e),
                Message = e.Message,
                Stacktrace = e.StackTrace!,
                Data = e.Data.ToString()!,
                Hresult = e.HResult.ToString(),
                Repository = Repository,
                FunctionName = functionName,
                CreateDate = DateTime.Now
                
            };
            return exceptionDb1;
        }
    }
}
