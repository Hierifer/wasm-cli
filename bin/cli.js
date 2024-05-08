#!/usr/bin/env node
const { program } = require("commander");
program.option('-p, --peppers', 'Add peppers');
program
    .command('init <name> [other...]') // 自定义init指令 <name> 必填参数 [other...] 可选参数
    .alias('i') // 指令别名
    .description('init project') // 指令描述
    .action((name, args) => { // 指令执行的操作
        console.log(name, args);
    });

program
    .command('custom-help') // 自定义init指令 <name> 必填参数 [other...] 可选参数
    .alias('h') // 指令别名
    .description('help') // 指令描述
    .action((name, args) => { // 指令执行的操作
        console.log(name, args);
    });
program.parse(process.argv);