# QR Snake

## Overview

This is a snake game that is entirely embedded in a qr code! Very cool I know :D

The game is developed using basic web technologies: HTML, CSS, and JavaScript. The code is then minified and converted into a URL using the [data:html](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) method. At this stage, there's no need for URL encoding. The final step is the generation of a QR code that you can scan and play the game directly!

However, the gameplay might not be as intuitive as traditional snake games. To play, click on the right half of the screen to rotate the snake counter-clockwise, and on the left side to rotate it clockwise. This design choice was made to ensure compatibility with mobile and touch devices. An attempt was made to add keyboard controls, but it increased the file size to the point where the QR code didn't function correctly.

### Acknowledgments:
- The inspiration for this project came after watching this [video](https://www.youtube.com/watch?v=ExwqNreocpg).
- The snake game is adapted from this [gist](https://gist.github.com/ZiKT1229/5935a10ce818ea7b851ea85ecf55b4da#file-snake-html).