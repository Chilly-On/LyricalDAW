/* Tải npm install textalive-app-api
Code: qzuKA90J9NSxH5mv
*/

const TextAlive = ({ player, isPlaying, setIsPlaying, setTimePos }) => {
    const textContainer = document.querySelector("#text");

    player.addListener({
        /* when the API is loaded */
        onAppReady: (app) => {
            if (!app.managed) { // If load music first time, Add music here
                // アリフレーション / 雨良 Amala
                player.createFromSongUrl("https://piapro.jp/t/SuQO/20250127235813", {
                    video: {
                        beatId: 4694276,
                        chordId: 2830731,
                        repetitiveSegmentId: 2946479,
                        lyricId: 67811,
                        lyricDiffId: 20655
                    },
                });
            }
        },

        onAppMediaChange: (mediaUrl) => {
            console.log("New music is set:", mediaUrl);
        },
        onPlay: () => {
            console.log("Music play");
        },
        onPause: () => {
            console.log("Music paused");
        },
        onStop: () => {
            console.log("Music stopped");
        },
        onMediaSeek: (position) => {
            //console.log("Music timeline moved to:", position, "ms");
            setTimePos(position);
        },
        /*Get current beat information */
        onTimeUpdate: (position) => {   // position: Music time position
            //console.log("Music time position:", position, "ms");
            setTimePos(position);
        },
        //onThrottledTimeUpdate: (position) => {
        //    console.log("Music time position:", position, "ms");
        //    setTimePos(position);
        //},
        onVideoReady: (v) => {
            if (v.firstChar) {   // If have lyrics
                console.log(v.firstPhrase.toString());      // Print the whole sentence: 取って付けたような
                console.log(v.firstPhrase.next.toString()); // Print next sentence.
            }
        },
        onTextLoad: (text) => {
            console.log("Load: ", text);
            //document.querySelector("#lyrics").textContent = text;
        },

        ///* when the API is loaded */
        //onAppReady(app) {
        //    if (!app.managed) { // Add music here
        //        // アリフレーション / 雨良 Amala
        //        player.createFromSongUrl("https://piapro.jp/t/SuQO/20250127235813", {
        //            video: {
        //                beatId: 4694276,
        //                chordId: 2830731,
        //                repetitiveSegmentId: 2946479,
        //                lyricId: 67811,
        //                lyricDiffId: 20655
        //            },
        //        });
        //    }
        //},

        ///* The code activated when change music */
        //onAppMediaChange() {

        //},

        ///* The code activated when getting the information of music */
        //onVideoReady() {

        //},

        /* The code activated when the media controller is ready */
        /* Called when Timer is ready for playback */
        onTimerReady() {
            if (!isPlaying) {                    // ensure play 1 time
                console.log("Timer ready");
                //setIsPlaying(true);
                //player.requestPlay();   // Touch anywhere in the screen to play
            }
            else {
                console.log("Stop excessing play");
            }
        },

        ///* Get current beat information */
        //onTimeUpdate(position) {
        //    // 現在のビート情報を取得
        //    let beat = player.findBeat(position);
        //    if (b !== beat) {
        //        if (beat) {
        //            requestAnimationFrame(() => {
        //                bar.className = "active";
        //                requestAnimationFrame(() => {
        //                    bar.className = "active beat";
        //                });
        //            });
        //        }
        //        b = beat;
        //    }

        //    // 歌詞情報がなければこれで処理を終わる
        //    if (!player.video.firstChar) {
        //        return;
        //    }

        //    // 巻き戻っていたら歌詞表示をリセットする
        //    if (c && c.startTime > position + 1000) {
        //        resetChars();
        //    }

        //    // 500ms先に発声される文字を取得
        //    let current = c || player.video.firstChar;
        //    while (current && current.startTime < position + 500) {
        //        // 新しい文字が発声されようとしている
        //        if (c !== current) {
        //            newChar(current);
        //            c = current;
        //        }
        //        current = current.next;
        //    }
        //},

        ///* When music play */
        //onPlay() {

        //},

        ///* When music stop */
        //onPause() {
        //}
    });

    /**
     * 新しい文字の発声時に呼ばれる
     * Called when a new character is being vocalized
     */
    function newChar(current) {
        // 品詞 (part-of-speech)
        // https://developer.textalive.jp/packages/textalive-app-api/interfaces/iword.html#pos
        const classes = [];
        if (
            current.parent.pos === "N" ||
            current.parent.pos === "PN" ||
            current.parent.pos === "X"
        ) {
            classes.push("noun");
        }

        // フレーズの最後の文字か否か
        if (current.parent.parent.lastChar === current) {
            classes.push("lastChar");
        }

        // 英単語の最初か最後の文字か否か
        if (current.parent.language === "en") {
            if (current.parent.lastChar === current) {
                classes.push("lastCharInEnglishWord");
            } else if (current.parent.firstChar === current) {
                classes.push("firstCharInEnglishWord");
            }
        }

        // noun, lastChar クラスを必要に応じて追加
        const div = document.createElement("div");
        div.appendChild(document.createTextNode(current.text));

        // 文字を画面上に追加
        const container = document.createElement("div");
        container.className = classes.join(" ");
        container.appendChild(div);
        container.addEventListener("click", () => {
            player.requestMediaSeek(current.startTime);
        });
        textContainer.appendChild(container);
    }

    /**
     * 歌詞表示をリセットする
     * Reset lyrics view
     */
    function resetChars() {
        c = null;
        while (textContainer.firstChild)
            textContainer.removeChild(textContainer.firstChild);
    }

    //return (
    //    <div id="lyrics"
    //        style={style}
    //    ></div>     // return text container
    //);
}

export default TextAlive;

/* Code mẫu khác
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
if (b !== beat) {
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