import { MatchData } from '../MatchData';
import { Analyzer } from '../Summary';

export class AverageGoalsAnalysis implements Analyzer {
  constructor(public teamName: string) { }

  run(matches: MatchData[]): string {
    let goals = 0
    let count = 0

    for (let match of matches) {
      if (match[1] === this.teamName) { goals += match[3], count++ }
      if (match[2] === this.teamName) { goals += match[4], count++ }
    }

    const averageGoals: number = goals / count

    return `${this.teamName} has an average of ${averageGoals} per game.`
  }
}