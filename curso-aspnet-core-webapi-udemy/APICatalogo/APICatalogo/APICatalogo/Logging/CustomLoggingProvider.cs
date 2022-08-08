using System.Collections.Concurrent;

namespace APICatalogo.Logging
{
    public class CustomLoggingProvider : ILoggerProvider
    {
        public ILogger CreateLogger(string categoryName)
        {
            throw new NotImplementedException();
        }

        public void Dispose()
        {
            throw new NotImplementedException();
        }
    }
}
