const readline = require("readline-sync")
const youtubedl = require("youtube-dl")
const fs = require("fs")
const videoUrl = getUrl()

function getUrl() {
  return readline.question("URL: ")
}

const video = youtubedl(videoUrl,
  // Optional arguments passed to youtube-dl.
  ['--format=18'],
  // Additional options can be given for calling `child_process.execFile()`.
  { cwd: __dirname })

// Will be called when the download starts.
video.on('info', function(info) {
  console.log('Download started')
  console.log('filename: ' + info._filename)
  console.log('size: ' + info.size)
})

video.pipe(fs.createWriteStream('youtubeVideo.mp4')

video.on('end', function() { 
console.log('Yay, your video is on youtubeVideo.mp4') 
})
