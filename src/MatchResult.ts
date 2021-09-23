export enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

export const matchWinner = (homeTeam: string, awayTeam: string, winner: string): string => {
  if (winner === MatchResult.HomeWin) { return homeTeam }
  if (winner === MatchResult.AwayWin) { return awayTeam }
  return MatchResult.Draw
}