import bcrypt from 'bcrypt';
const saltRounds = 10;

export function generateHashPassword(
  plainTextPassword: string,
): Promise<string | Error | null> {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(saltRounds, (_err, salt) => {
      if (_err) return reject(_err);
      bcrypt.hash(plainTextPassword, salt, function (err, hash) {
        if (err) reject(err);
        else resolve(hash);
      });
    });
  });
}

export function compareHashPassword(
  hashPassword: string,
  plainTextPassword: string,
): Promise<null | boolean> {
  return new Promise((resolve, reject) => {
    bcrypt.compare(plainTextPassword, hashPassword, function (err, result) {
      if (err) return reject(err);
      resolve(result);
    });
  });
}
