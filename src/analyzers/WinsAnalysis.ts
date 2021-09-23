import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';

export class WinsAnalysis implements Analyzer {
  constructor(public teamName: string) { }

  run(matches: MatchData[]): string {
    let wins = 0

    for (let match of matches) {
      if (match[5] === this.teamName) { wins++ }
    }

    return `${this.teamName} won ${wins}`
  }
}