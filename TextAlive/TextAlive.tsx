/* Tải npm install textalive-app-api
Code: qzuKA90J9NSxH5mv
*/
import { Player } from "textalive-app-api";
player.addListener({
    onAppReady: (app) => {
        if (!app.managed) {
            // ストリートライト / 加賀(ネギシャワーP)
            player.createFromSongUrl("https://piapro.jp/t/ULcJ/20250205120202", {
                video: {
                    // 音楽地図訂正履歴
                    beatId: 4694275,
                    chordId: 2830730,
                    repetitiveSegmentId: 2946478,

                    // 歌詞URL: https://piapro.jp/t/DPXV
                    // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FULcJ%2F20250205120202
                    lyricId: 67810,
                    lyricDiffId: 20654
                },
            });
        }
    }
});

/* Code mẫu khác
// Get the character that will be spoken in 500ms

let current = c || player.video.firstChar;

while (current && current.startTime < position + 500) {

// A new character is about to be spoken

if (c !== current) {

newChar(current);

c = current;

}

current = current.next;

}

// Part-of-speech

const classes = [];

if (

char.parent.pos == "N" ||

char.parent.pos === "PN" ||

char.parent.pos === "X"

) classes.push("noun");

// Is this the last character of a phrase?
if (char.parent.parent.lastChar = char) classes.push("lastChar");

// Get current beat information

let beat = player.findBeat(position);

if (b!== beat) {

if (beat) {

requestAnimationFrame(() {

bar.className = "active";

requestAnimationFrame(() {

bar.className = "active beat";

})

})

}

b = beat;

}


*/