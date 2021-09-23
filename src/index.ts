import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { Summary } from './Summary'

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and passs in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

// matchReader.matches
const winsAnalysis = new WinsAnalysis('Arsenal')

new Summary(winsAnalysis, new ConsoleReport())