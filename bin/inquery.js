inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
    },
  ])
  .then((answers) => {
    console.log('Hello ' + answers.name);
  });

module.exports = inquirer;