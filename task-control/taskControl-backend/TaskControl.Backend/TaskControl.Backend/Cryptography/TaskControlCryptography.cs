using System;
using System.Security.Cryptography;
using System.Text;

namespace TaskControl.Backend.Cryptography
{
    public class TaskControlCryptography
    {
        private const string iv = "d4378ec5b3f440eb";
        private const string key = "d4378ec5b3f440eb90722db982d99316";

        public static string Encrypt(string decrypted)
        {
            var textBytes = Encoding.ASCII.GetBytes(decrypted);

            using (var aes = Aes.Create())
            {
                SetParameters(aes);

                var encryptor = aes.CreateEncryptor(aes.Key, aes.IV);
                var encrypted = encryptor.TransformFinalBlock(textBytes, 0, textBytes.Length);

                encryptor.Dispose();

                return Convert.ToBase64String(encrypted);
            }
        }

        public static string Decrypt(string encrypted)
        {
            var encryptedBytes = Convert.FromBase64String(encrypted);

            using (var aes = Aes.Create())
            {
                SetParameters(aes);

                var decryptor = aes.CreateDecryptor(aes.Key, aes.IV);
                var decrypted = decryptor.TransformFinalBlock(encryptedBytes, 0, encryptedBytes.Length);

                decryptor.Dispose();

                return Encoding.ASCII.GetString(decrypted);
            }
        }

        private static void SetParameters(SymmetricAlgorithm aes)
        {
            aes.BlockSize = 128;
            aes.KeySize = 256;
            aes.Key = Encoding.ASCII.GetBytes(key);
            aes.IV = Encoding.ASCII.GetBytes(iv);
            aes.Padding = PaddingMode.PKCS7;
            aes.Mode = CipherMode.CBC;
        }

    }
}
