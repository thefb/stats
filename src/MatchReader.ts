import { dateStringToDate, matchWinner } from './utils'

type MatchData = [
  Date, string, string, number, number, string, string
]
interface DataReader {
  read(): void
  data: string[][]
}

export class MatchReader {
  matches: MatchData[] = []
  constructor(public reader: DataReader) { }
  load(): void {
    this.reader.read();
    this.matches = this.reader.data
      .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          matchWinner(row[1], row[2], row[5]),
          row[6]
        ]
      })
  }

}