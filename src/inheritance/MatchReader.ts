import { CsvFileReader } from './CsvFileReader';
import { MatchResult, matchWinner } from './MatchResult';
import { dateStringToDate } from './utils';

type MatchData = [Date, string, string, number, number, string, string]

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      matchWinner(row[1], row[2], row[5]),
      row[6]
    ]
  }
}