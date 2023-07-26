const exec = require('node:child_process').exec;
const inquirer = require('inquirer');
const { readPackage } = require('./utils');
const { version } = require('./version');
exports.update = async () => {
  const v = await version(true);
  if (!v) return;
  inquirer
    .prompt([
      {
        type: 'list',
        message: '请选择安装方式',
        name: 'install',
        choices: ['yarn', 'npm', 'cnpm', 'pnpm'],
      },
    ])
    .then(async (answer) => {
      let installCode = getCMD(answer.install);
      console.log('\x1B[32m%s\x1b[0m', '开始更新依赖, 请稍等...');
      const i = await installPkg(installCode);
      if (i) {
        const name = __dirname.split('/');
        const fileName = name.slice(0, name.length - 1).join('/');
        const _config = await readPackage(fileName + '/package.json');
        console.log('\x1B[32m%s\x1b[0m', `当前版本 ${_config.version}`);
      }
    });
};

function installPkg(installCode) {
  return new Promise((resolve, reject) => {
    exec(
      installCode,
      {
        cwd: process.cwd(),
      },
      (err, stdout, stderr) => {
        if (err) {
          reject(false);
          console.log(err);
          return;
        }
        resolve(true);
        console.log(`${stdout}`);
        console.log('\x1B[32m%s\x1b[0m', 'success 更新完成');
      },
    );
  });
}

function getCMD(cmd) {
  switch (cmd) {
    case 'yarn':
      return cmd + ' add react-super';
    case 'pnpm':
      return cmd + ' update react-super';
    default:
      return cmd + ' update react-super';
  }
}
