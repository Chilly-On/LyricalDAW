/* Tải npm install textalive-app-api
Code: qzuKA90J9NSxH5mv
*/
import { useEffect } from "react";
import { Player, type IBeat, type IPlayerApp } from "textalive-app-api";

type PlayerRefs = {
    timePos: number,
    beatPos: number,
    isPlaying: boolean;
    repeat: boolean;
    beatLeftPos: number;
    beatRightPos: number;
    leftTime: number;
    masterVolume: number;
};
interface TextAliveProps {       // for input parameters
    musicOffset: number;
    player: Player,
    timePos: number,
    setTimePos: (n: number) => void,
    beatPos: number,
    setBeatPos: (n: number) => void,
    refs: React.RefObject<PlayerRefs>,
    masterVolume: number,
    setMasterVolume: (n: number) => void,
}

const TextAlive: React.FC<TextAliveProps> = ({ musicOffset, player, timePos, setTimePos, beatPos, setBeatPos, refs, masterVolume, setMasterVolume }) => {
    let b: IBeat;       // beat, chord
    let overlay: boolean = true;

    // Force to update value completely
    useEffect(() => {
        refs.current.timePos = timePos;
    }, [timePos, refs]);
    useEffect(() => {
        refs.current.beatPos = beatPos;
    }, [beatPos, refs]);
    useEffect(() => {
        refs.current.masterVolume = masterVolume;
    }, [masterVolume, refs]);

    player.addListener({
        /* when the API is loaded */
        onAppReady: (app: IPlayerApp) => {
            if (!app.managed) { // If load music first time, Add music here
                 //アリフレーション / 雨良 Amala
                 player.createFromSongUrl("https://piapro.jp/t/SuQO/20250127235813", {
                   video: {
                     // 音楽地図訂正履歴
                     beatId: 4694276,
                     chordId: 2830731,
                     repetitiveSegmentId: 2946479,
                
                     // 歌詞URL: https://piapro.jp/t/GbYz
                     // 歌詞タイミング訂正履歴: https://textalive.jp/lyrics/piapro.jp%2Ft%2FSuQO%2F20250127235813
                     lyricId: 67811,
                     lyricDiffId: 20655
                   },
                 });
            }
        },

        onAppMediaChange: (mediaUrl: string) => {
            console.log("New music is set:", mediaUrl);
        },
        onPlay: () => {
            console.log("Music play");
            const popup = document.getElementById("popup")
            if (popup) {
                if (overlay)
                    overlay = false;
                else
                    popup.style.display = 'none'; // When play, not show popup
            }
        },
        onPause: () => {
            console.log("Music paused");
        },
        onStop: () => {
            console.log("Music stopped");
            setTimePos(0);
            setBeatPos(0);
        },
        onMediaSeek: (position: number) => {
            //console.log("Seek pos: ", position);
            //console.log("Music timeline moved to:", position, "ms");
            if (position > 232000) {            // end of song, not to overflow
                player.requestStop();
                refs.current.isPlaying = false;
            }
            if (position >= musicOffset) {
                const pos = position - musicOffset;      // Relative position to the song.
                const beat = player.findBeat(pos);
                if (b !== beat) {           // if b change
                    if (beat) {
                        const beatIndex = beat.index + (pos - beat.startTime) / beat.duration   // add remaining position to beat pos
                        if (refs.current.repeat && refs.current.beatLeftPos !== refs.current.beatRightPos && (
                            beatIndex > refs.current.beatRightPos || beatIndex < refs.current.beatLeftPos
                        )) {         // If set range and current position is higher than the loop (at right), return to start of the loop
                            player.requestMediaSeek(refs.current.leftTime);
                        }
                        else {
                            //console.log("Beat index: ", beat.index);
                            //console.log("Music time position:", position, "ms");
                            //console.log("Relative position from song:", pos, "ms");
                            setTimePos(pos);
                            setBeatPos(beatIndex);                     // Update beat here
                        }
                    }
                    b = beat;
                }
            }
            else {          // Not update when position if in the first delay before song.
                setTimePos(0);
                setBeatPos(0);
            }
            // No update track left and right here
        },
        /*Get current beat information */
        //onTimeUpdate: (position: number) => {   // position: Music time position
        //    //console.log("repeat: ", refs.current.repeat);
        //    if (position > 232000) {            // end of song, not to overflow
        //        player.requestStop();
        //    }
        //    if (position >= musicOffset) {
        //        const pos = position - musicOffset;      // Relative position to the song.
        //        const beat = player.findBeat(pos);
        //        if (b !== beat) {           // if b change
        //            if (beat) {
        //                const beatIndex = beat.index + (pos - beat.startTime) / beat.duration   // add remaining position to beat pos
        //                if (refs.current.repeat && refs.current.beatLeftPos !== refs.current.beatRightPos && (
        //                    beatIndex > refs.current.beatRightPos || beatIndex < refs.current.beatLeftPos
        //                )) {         // If set range and current position is higher than the loop (at right), return to start of the loop
        //                    player.requestMediaSeek(refs.current.leftTime);
        //                }
        //                else {
        //                    //console.log("Beat index: ", beat.index);
        //                    //console.log("Music time position:", position, "ms");
        //                    //console.log("Relative position from song:", pos, "ms");
        //                    setTimePos(pos);
        //                    setBeatPos(beatIndex);                     // Update beat here
        //                }
        //            }
        //            b = beat;
        //        }
        //    }
        //    else {          // Not update when position if in the first delay before song.
        //        setTimePos(0);
        //        setBeatPos(0);
        //    }
        //},
        //onThrottledTimeUpdate: (position: number) => {  // position: Music time position

        //},
        //onVideoReady: (v) => {
        //    if (v.firstChar) {   // If have lyrics

        //    }
        //},
        //onTextLoad: (text) => {
        //    //console.log("Load: ", text);
        //    //document.querySelector("#lyrics").textContent = text;
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
            if (!refs.current.isPlaying) {                    // ensure play 1 time
                console.log("Timer ready");
                const overlay = document.getElementById("overlay")
                if (overlay)
                    overlay.style.display = 'none'; // Loaded
                player.requestMediaSeek(musicOffset);
                setMasterVolume(0);
                refs.current.masterVolume = 0;
            }
            else {
                console.log("Stop excessing play");
            }
        },

        ///* When music play */
        //onPlay() {

        //},

        ///* When music stop */
        //onPause() {
        //}
    });

    return (
        <div></div>     // return text container
    );
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