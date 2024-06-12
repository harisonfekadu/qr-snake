# QR Snake


https://github.com/harisonfekadu/qr-snake/assets/11662806/dc021e8b-367f-4051-bcc0-ae195d2df044


## Overview

This is a snake game that is entirely embedded in a qr code! Very cool I know 🤩

The game is developed using basic web technologies: HTML, CSS, and JavaScript. The code is then minified and converted into a URL using the [data:html](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) method. At this stage, there's no need for URL encoding. The final step is the generation of a QR code that you can scan and play the game directly!

However, the gameplay might not be as intuitive as traditional snake games. To play, click on the right half of the screen to rotate the snake counter-clockwise, and on the left side to rotate it clockwise. This design choice was made to ensure compatibility with mobile and touch devices. An attempt was made to add keyboard controls, but it increased the file size to the point where the QR code didn't function correctly.

### Demo
Scan to play! 📷

![qr-snake](https://github.com/harisonfekadu/qr-snake/assets/11662806/64b7cb52-57bc-4a47-81f1-978b8075ebcc)

If you're having trouble scanning then just paste this in your browser address bar:
```
data:text/html,<style>body,html{background:black;display:flex;align-items:center;justify-content:center}p{position:absolute;opacity:.3;user-select:none;font-family:Verdana}p:nth-child(2){left:200}p:nth-child(3){right:200}canvas{background:white}</style><canvas width=800 height=800 id=g></canvas><p>Rotate Clockwise<p>Rotate Counter-Clockwise</p><script>(()=>{let e=document.getElementById("g");e.height=16*Math.floor((window.innerHeight-100)/16),e.width=16*Math.floor((window.innerWidth-100)/16);let l=e.getContext("2d"),t=16,i=0,d={x:160,y:160,dx:t,dy:0,cells:[],maxCells:4},n={x:320,y:320};function x(e,l){return Math.floor(Math.random()*(l-e))+e}document.addEventListener("click",(function(l){let i=l.clientX-e.width/2;i/=Math.abs(i),0===d.dx?(d.dx=i*t*(d.dy/t)*-1,d.dy=0):0===d.dy&&(d.dy=i*t*(d.dx/t),d.dx=0)})),requestAnimationFrame((function y(){requestAnimationFrame(y),++i<8||(i=0,l.clearRect(0,0,e.width,e.height),d.x+=d.dx,d.y+=d.dy,d.x<0?d.x=e.width-t:d.x>=e.width&&(d.x=0),d.y<0?d.y=e.height-t:d.y>=e.height&&(d.y=0),d.cells.unshift({x:d.x,y:d.y}),d.cells.length>d.maxCells&&d.cells.pop(),l.fillStyle="red",l.fillRect(n.x,n.y,t,t),l.fillStyle="black",d.cells.forEach((function(i,y){l.fillRect(i.x,i.y,t,t),i.x===n.x&&i.y===n.y&&(d.maxCells++,n.x=x(0,e.width/16)*t,n.y=x(0,e.height/16)*t);for(let e=y+1;e<d.cells.length;e++)i.x===d.cells[e].x&&i.y===d.cells[e].y&&(d.x=160,d.y=160,d.cells=[],d.maxCells=4,d.dx=t,d.dy=0,n.x=x(0,25)*t,n.y=x(0,25)*t)})))}))})()</script>
```

### Acknowledgments:
- The inspiration for this project came after watching this [video](https://www.youtube.com/watch?v=ExwqNreocpg).
- The snake game is adapted from this [gist](https://gist.github.com/ZiKT1229/5935a10ce818ea7b851ea85ecf55b4da#file-snake-html).
