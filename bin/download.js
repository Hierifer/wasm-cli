const download = require("download-git-repo");
const ora = require("ora");
const chalk = require("chalk");

const downloadFun = (url, projectName) => {
  // url: 下载地址，projectName: 项目名称
  const spinner = ora().start(); // 开始loading
  spinner.text = "Loading......";
  download(url, projectName, { clone: true }, function (err) {
    if (!err) {
      // 如果没有错误
      spinner.succeed("Loading succeed"); // 结束loading
      console.log(chalk.green("download success!") + "you can run :" + chalk.yellow("cd: ") + projectName);
      console.log(chalk.yellow("npm install") + " to install dependencies");
      console.log(chalk.yellow("npm run dev") + " to start the project");
    } else {
      spinner.fail("Loading failed"); // 结束loading
    }
  });
};

module.exports = downloadFun;