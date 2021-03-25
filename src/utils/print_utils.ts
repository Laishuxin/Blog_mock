import chalk from 'chalk'

export function printInfo(...msg: any[]) {
  console.log(chalk.greenBright(...msg))
}

export function printWarning(...msg: any[]) {
  console.log(chalk.yellowBright(...msg))
}

export function printError(...msg: any[]) {
  console.log(chalk.redBright(...msg))
}

export default printInfo
