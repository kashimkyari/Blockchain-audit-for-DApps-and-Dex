const { exec } = require('child_process');

const analyzeWithMythril = (contractPath) => {
  return new Promise((resolve, reject) => {
    exec(`myth analyze ${contractPath}`, (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  });
};

module.exports = analyzeWithMythril;
