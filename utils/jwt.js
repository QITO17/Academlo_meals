const jwt = require('jsonwebtoken');

const generateJWT = id => {
  return new Promise((resolve, reject) => {
    const payload = { id };

    
    jwt.sign(
      payload,
      'SeguridadTotal',
      {
        expiresIn: '2h',
      },
      (err, token) => {
        console.log('a')
        if (err) {
          console.log(1)
          console.log(err);
          reject(err);
        }

        console.log('id')
        resolve(token);
      }
    );
  });
};

module.exports = generateJWT