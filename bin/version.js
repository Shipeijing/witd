const { getVersion, readPackage } = require('./utils');

exports.version = async (update) => {
  const name = __dirname.split('/');
  const fileName = name.slice(0, name.length - 1).join('/');
  const _config = await readPackage(fileName + '/package.json');
  console.log('\x1B[34m%s\x1b[0m', `当前版本：${_config.version}`);
  const version = await getVersion();
  console.log('\x1B[33m%s\x1b[0m', `最新版本：${version}`);
  const cv = Number(_config.version.replace('.', '')); // 本地
  const v = Number(version.replace('.', '')); // 远程
  if (cv < v) {
    if (!update) console.log('\x1B[33m%s\x1b[0m', `依赖已落后，建议更新依赖！ ${cv} -> ${v}`);
    return true;
  } else {
    console.log('\x1B[32m%s\x1b[0m', `已是最新版本！`);
    return false;
  }
};
