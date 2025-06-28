import DAW from './DAW/DAW';
import './index.css'; // Use Tailwind's CSS instead of App.css
import 'bootstrap/dist/css/bootstrap.min.css';

import { Player } from "textalive-app-api";
//import P5 from 'p5';

//function loadText(player) {
//   // Use p5
//   new P5((p5) => {
//       // Set up canvas
//       const width = window.innerWidth - 100;
//       const height = window.innerHeight - 100;
//       const margin = 30;
//       const numChars = 10;
//       const textAreaWidth = width - margin * 2;

//       // Initialize canvas
//       p5.setup = () => {
//           const canvas = p5.createCanvas(width, height);
//           canvas.parent("lyrics"); // mount canvas here
//           p5.clear();
//           p5.colorMode(p5.HSB, 0);
//           p5.frameRate(30);
//           p5.noStroke();
//           p5.textFont("Noto Sans JP");
//           p5.textAlign(p5.CENTER, p5.CENTER);
//       };

//       // print the lyrics that Miku sings
//       p5.draw = () => {
//           if (!player || !player.video) {
//               return;
//           }
//           const position = player.timer.position;

//           // Background
//           p5.clear();
//           //p5.background(40);
//           //const beat = player.findBeat(position);
//           //if (beat) {
//           //    const progress = beat.progress(position);
//           //    const rectHeight = Ease.quintIn(progress) * height;
//           //    p5.fill(0, 0, 0, Ease.quintOut(progress) * 60);
//           //    p5.rect(0, rectHeight, width, height - rectHeight);
//           //}

//           // Start to print lyrics
//           let char = player.video.findChar(position - 100, { loose: true });

//           if (char) {
//               // Find index of char in the row
//               let index = player.video.findIndex(char);

//               while (char) {
//                   if (position > char.endTime + 160) {
//                       break;
//                   }

//                   /* TODO FOR TEXT ANIMATION */

//                   if (position > char.startTime - 100) {// if the position is 100ms before the char start time
//                       const x = ((index % numChars) + 0.5) * (textAreaWidth / numChars);
//                       let transparency,
//                           y = 0,
//                           size = 72;

//                       // 100 [ms]: Put the word into the canvas in 100ms
//                       if (position < char.startTime) {
//                           const progress = 1 - (char.startTime - position) / 100;
//                           const eased = Ease.circIn(progress);
//                           transparency = progress;
//                           size = 72 * eased + Math.min(width, height) * (1 - eased);
//                       }
//                       // 160 [ms]: Put the word out the canvas (it go up)
//                       else if (position > char.endTime) {
//                           const progress = (position - char.endTime) / 160;
//                           const eased = Ease.quintIn(progress);
//                           transparency = 1 - eased;
//                           y = -eased * (height / 2);
//                       }
//                       else {
//                           transparency = 1;
//                       }


//                       p5.fill(0, 0, 100, transparency * 100);
//                       p5.textSize(size);
//                       p5.text(char.text, margin + x, height / 2 + y);
//                   }
//                   char = char.next;
//                   index++;
//               }
//           }
//       };
//   });
//}

function App() {
    // Initialize TextAlive Player
    // Inital at beginning to make sure 1 player are in the project
    const player = new Player({
        app: { token: "qzuKA90J9NSxH5mv" },/* Code: qzuKA90J9NSxH5mv,  test*/
        //throttleInterval: 100,          // delay loading
        vocalAmplitudeEnabled: true     // load song master volume
    });  // use to avoid spam, change token later
    const musicDelay = 0; // Offset from first beat

    //loadText(player);

    return (
        <div className="flex flex-col">
            <DAW player={player} musicDelay={musicDelay} />
        </div>
    );
}

export default App;