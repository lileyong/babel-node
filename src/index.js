import logo from './logo'
import water from './water'
import fs from 'fs'

const logos = logo.match(/[^\s]+\.png/mg).map(path => 'img/bankcard/logo/' + path)
const waters = water.match(/[^\s]+\.png/mg).map(path => 'img/bankcard/water/' + path)

fs.writeFile('./logo.md', logos.join('\n'), () => {})
fs.writeFile('./water.md', waters.join('\n'), () => {})
