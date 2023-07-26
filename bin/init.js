const fs = require('node:fs'); //文件
const { prettierCode, readSuperConfig } = require('./utils');
// 插入umi-plugin-super
// 写入.super.js文件

exports.init = async function (file_num = 3) {
  const name = __dirname.split('/');
  const fileName = name.slice(0, name.length - file_num).join('/');
  const usUrl = name.slice(0, name.length - 1).join('/');
  const packageName = fileName + '/package.json';
  const configName = fileName + '/.super.js';

  const pData = await readPackage(packageName);
  await writePackage(pData.packageName, pData.data);
  await readConfig(usUrl, configName);
};

function readPackage(packageName) {
  return new Promise((resolve, reject) => {
    fs.readFile(packageName, 'utf8', (err, res) => {
      if (err) {
        reject();
        return console.log('读取文件失败', err.message);
      }
      console.log('\x1B[32m%s\x1b[0m', '1.配置文件读取成功');
      const data = JSON.parse(res);
      data.scripts['super'] = 'super';
      resolve({ packageName, data });
    });
  });
}

function writePackage(packageName, data) {
  return new Promise((resolve, reject) => {
    // 格式化代码  prettierCode(JSON.stringify(data), 'js')
    fs.writeFile(packageName, data, 'utf8', (err) => {
      if (err) {
        reject();
        return console.log('配置文件写入失败');
      }
      console.log('\x1B[32m%s\x1b[0m', '2.命令行写入成功');
      resolve();
    });
  });
}

async function readConfig(usUrl, configName) {
  // 读取配置文件
  const superConfig = await readSuperConfig(usUrl + '/.super.js');
  console.log('\x1B[32m%s\x1b[0m', '3.读取配置文件成功');
  writerConfig(configName, superConfig);
}

function writerConfig(configName, txt) {
  const writer = fs.createWriteStream(configName, {
    flags: 'wx',
    encoding: 'utf8',
  });
  writer.on('error', function (err) {
    console.log('配置文件写入失败');
    writer.end();
  });
  writer.on('ready', () => {
    writer.write(txt);
    console.log('\x1B[32m%s\x1b[0m', '4.配置文件写入成功');
    console.log('\x1B[32m%s\x1b[0m', 'success 组件初始化完成');
  });
}
