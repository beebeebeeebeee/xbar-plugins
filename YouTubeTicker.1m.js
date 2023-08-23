#!/usr/bin/env /usr/local/bin/node

// <xbar.var>string(XBAR_YOUTUBE_VAR_YOUTUBE_ID=""): Youtube id (UCpfiZNJ5zmnSQ3eUtTPdaWg).</xbar.var>
// <xbar.var>string(XBAR_YOUTUBE_VAR_API_KEY=""): API key to get access to remote data.</xbar.var>

const youTubeIcon = "iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADdcAAA3XAUI" +
    "om3gAAAMESURBVFhH7VbPS1RRGP2CogkRRAqyoH8gMsW0aX75AyWREFr0CysIgiByIUKL9pEUVus2SZm7CFqUSom1iTZBUdaqWkjawtGiotQ5r/O9+Wbe9HwjL/tBwRw" +
    "4vDv3ft853333vntHSijhvwHaZS3apMxplApyfRFWaIzGWtrK4CSkDgk5iJSczCTlLH8PZBIyTD4iJ9j/Gkl5wzGX2ra+FxrD510+BzRXNVRLNU2+ODiDCJP6MylJO83" +
    "i5NnkY2MR+uMKNFhImoX1My5idkvBSnucFktOLiUFEIZBua4mtRfj0mt2P4KVrWaV9zUoSPR3ULX5dsedOlljth4Qk00Meoam4OQ8U+QOY8L6wpLaXOKJL3HZYrYenJj" +
    "UMGgKjQGJOaphlDy9B+jaClSz3WBjYUhtFjDDdoPZeliISTMNvrozDEpWagFqOn4TmH0PXDzFWZVl+3aRy+UqOc4CsJCSDrP1QPH2XNCSxBxzBYwOIY+nD4HeDqCe/TU" +
    "WE5Rr1M1Ij/1m64Gdne7rD1PA8KC5GxbmgTtXgcPVQC3HYxYfxBYyJUfN1gMPin1o9gX7mS/ghjn78PkDMNgHtHJZdK8EadBjMSnHzdYDP8NfL+DjDDB0AWgrL16AvoG" +
    "EHDNbD7oEepqtbAm+AbevAIf4Zeg+WG4JspM8YLYe2LnbDQhTwEjBJnwyBvS0Z88FXX+NCcpVUttJicMvrtNsPThxaeIFEu4zfHALSE8D509QNJLt01kvl6vMjs9zv7W" +
    "arQfEZTsLeBfqIDqzFzjCHb+N7Z02FobZg2iahdSarQcGVHHwbxzFzzmJzWbrQS8jXhT3Ql1GP2tsNO2xwMtIQeE/fh3zDQZfxwq+mnUs4hKDZgv/TLjJhfT/EcnRH1e" +
    "gwbc7xz12WT3Mrjh4sdTztOpaTEg3CzrHdbvG5wgFHnOGL8m3LHKSnDJOah/jXmkMOcr2de72PuZ1c6xrPhpwA4aFI7KKM4zwUyufi0olRTd8qpeNFK5Sum32cXaVGqO" +
    "xmmPpJZTwL0PkOxoj5CNBuCXOAAAAAElFTkSuQmCC";

async function main(){
    const params = new URLSearchParams({
        id: process.env.XBAR_YOUTUBE_VAR_YOUTUBE_ID,
        part: "statistics",
        key: process.env.XBAR_YOUTUBE_VAR_API_KEY,
    });
    const result = await fetch(`https://www.googleapis.com/youtube/v3/channels?${params.toString()}`)
    const {items: [{statistics: {subscriberCount}}]} = await result.json()
    console.log(`${subscriberCount} | image=${youTubeIcon}`)
}

void main()

// console.log("HI")
// console.log("---")
// console.log("Open website | href=https://xbarapp.com | color=red | key=CmdOrCtrl+o\n" +
//     "Open home folder | shell=open | param1=\"~/\"\n" +
//     "App version: v1.0 | disabled=true | size=10")

