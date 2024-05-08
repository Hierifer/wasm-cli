const download = require("download-git-repo");

const chalk = require("chalk");

const downloadFun = async (url, projectName) => {
  // url: 下载地址，projectName: 项目名称
  const ora = await import('ora')
  const spinner = ora.default().start()// 开始loading
  spinner.text = "Loading......";
  download(url, projectName, { clone: true, checkout: 'main' }, function (err) {
    if (!err) {
      // 如果没有错误
      spinner.succeed("Loading succeed"); // 结束loading
      console.log(chalk.green("download success!") + "you can run :" + chalk.yellow("cd: ") + projectName);
      console.log(chalk.yellow("npm install") + " to install dependencies");
      console.log(chalk.yellow("npm run dev") + " to start the project");
    } else {
      console.log(err)
      spinner.fail(`Loading failed: ${url} + ${projectName}`); // 结束loading
    }
  });
};

module.exports = { downloadFun };