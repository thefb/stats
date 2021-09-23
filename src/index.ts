import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { HtmlReport } from './reportTargets/HtmlReport'
import { Summary } from './Summary'

// Create an object that satisfies the 'DataReader' interface
const csvFileReader = new CsvFileReader('football.csv')

// Create an instance of MatchReader and passs in something satisfying
// the 'DataReader' interface
const matchReader = new MatchReader(csvFileReader)
matchReader.load()

// matchReader.matches

const summary = new Summary(
  new WinsAnalysis('Tottenham'),
  new HtmlReport()
)

summary.buildAndPrintReport(matchReader.matches)