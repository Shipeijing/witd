const fs = require('node:fs'); //文件
const exec = require('node:child_process').exec;
// const babylon = require('prettier/parser-babel'); //文件
// const babylonHtml = require('prettier/parser-html'); //文件
// const prettier = require('prettier/standalone'); //文件

exports.readPackage = (packageName) => {
  // 读取本地依赖文件
  return new Promise((resolve, reject) => {
    fs.readFile(packageName, 'utf8', (err, res) => {
      if (err) {
        reject({ version: '未知' });
        return console.log('读取文件失败', err.message);
      }
      resolve(JSON.parse(res));
    });
  });
};

exports.getVersion = () => {
  // 获取远程依赖版本
  return new Promise((resolve, reject) => {
    exec(
      'npm view react-super version',
      {
        cwd: process.cwd(),
      },
      (err, stdout, stderr) => {
        if (err) {
          reject('未知');
          return console.log(err);
        }
        resolve(stdout);
      },
    );
  });
};

exports.readSuperConfig = (url, isJson) => {
  return new Promise((resolve, reject) => {
    fs.readFile(url, 'utf8', (err, res) => {
      if (err) {
        reject({});
        return console.log('读取文件失败', err.message);
      }
      resolve(isJson ? JSON.parse(res) : res);
    });
  });
};

exports.prettierCode = (data, parser) => {
  // try {
  //   return prettier.format(data, {
  //     semi: false,
  //     parser: parser,
  //     plugins: [babylon, babylonHtml],
  //   });
  // } catch (error) {
  //   console.log('格式化错误');
  //   process.exit(0);
  // }
};
