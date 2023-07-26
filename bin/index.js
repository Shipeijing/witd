#!/usr/bin/env node

const args = process.argv.slice(2);

if (args.length === 0 || args[0] === 'update' || args[0] === '-u') {
  require('./update').update();
  // process.exit(0);
}

if (args.length > 0) {
  if (args[0] === 'init' || args[0] === '-i') {
    require('./init').init();
  }

  if (args[0] === 'version' || args[0] === '-v') {
    require('./version').version();
  }

  if (args[0] === 'help' || args[0] === '-h') {
    // console.log('super init(-i) 初始化组件');
    console.log('super update(-u) 更新组件版本');
    console.log('super version(-v) 查看最新版本');
    console.log('super help(-h) 获取帮助');
    process.exit(0);
  }
}
