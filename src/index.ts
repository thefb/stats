import ts from 'typescript'
import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { dateStringToDate } from './utils'

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and passs in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

// matchReader.matches

let manUnitedWins = 0

for (let match of matchReader.matches) {
  if (match[5] === 'Man United') { manUnitedWins++ }
}

console.log(`Man United won ${manUnitedWins} games`)