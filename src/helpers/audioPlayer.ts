export function audioPlayer(audioFile: string, playTime: number = 0) {
  const audio = new Audio(audioFile)
  audio.currentTime = playTime
  audio.play()
}
