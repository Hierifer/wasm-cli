#!/usr/bin/env node
const { program } = require("commander");
const pkginfo = require('pkginfo')
const init = require('./services/init');
const fs = require('fs')
const child_process = require('child_process')
const inquirer = require('inquirer')
const download = require('./services/download');
const { down } = require("inquirer/lib/utils/readline");

const archive = {
    'vue': 'Hierifer/vue-3-tailwind-vite'
}

program.version(pkginfo.version, '-v, --version', '@calmer/terminal-cli 当前版本')

// ⭐ 注册主命令相关选项
program
    // .description('命令描述') // 命令描述
    .option('-d, --dir <dirname>', '带参选项描述', '选项默认值') // 带参选项（选项全称 取值时转成驼峰写法），支持设置默认值
    .option('-i, --ip [dirname...]', '带参选项描述') // 数组参数，非必填(不填值为true)，指令中多个参数空格分割，不支持设置默认值

program
    .command('create <name> [template...]') // 自定义init指令 <name> 必填参数 [other...] 可选参数
    .alias('c') // 指令别名
    .description('create template') // 指令描述
    .action(async (n,t) => { // 指令执行的操作
        if(n === '.'){
            // 原地创建
        } else {
            if(fs.existsSync(`./${n}`)) {
                let needExit = await new Promise((resolve, reject) => {
                    inquirer
                    .prompt([
                      {
                        type: 'input',
                        name: 'remove',
                        message: `Already has a folder named ${n}, will you cover it? answer [y] or [yes]`,
                      },
                    ])
                    .then((answers) => {
                        if(answers.remove === 'yes' || answers.remove === 'y'){
                            child_process.exec(`rm -rf ./${n}`,  function(err,stdout){
                                if(!err) resolve(0)
                                else resolve(2)
                            });
                        } else {
                            console.log("exit for dup folder. Plz solve it by renaming or remove")
                            resolve(1)
                        }
                    });
                })

                if(needExit){
                    return 0
                }
            }
        }

        download.downloadFun(archive[t] || archive.vue, `./${n}`)
    });

program
    .command('custom-help') // 自定义init指令 <name> 必填参数 [other...] 可选参数
    .alias('h') // 指令别名
    .description('help') // 指令描述
    .action((name, args) => { // 指令执行的操作
        console.log(name, args);
    });

program.parse(process.argv);