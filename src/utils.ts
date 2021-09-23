import { MatchResult } from './MatchResult'

export const dateStringToDate = (dateString: string): Date => {
  // 28/10/2018
  const dateParts = dateString
    .split('/')
    .map((part: string): number => { return parseInt(part) })

  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0])

}

export const matchWinner = (homeTeam: string, awayTeam: string, winner: string): string => {
  if (winner === MatchResult.HomeWin) { return homeTeam }
  if (winner === MatchResult.AwayWin) { return awayTeam }
  return MatchResult.Draw
}