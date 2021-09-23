import ts from 'typescript'
import { MatchReader } from './MatchReader'
import { dateStringToDate } from './utils'

const reader = new MatchReader('football.csv')
reader.read()

let manUnitedWins = 0

for (let match of reader.data) {
  if (match[5] === 'Man United') { manUnitedWins++ }
}

console.log(`Man United won ${manUnitedWins} games`)