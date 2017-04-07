// Converting Between Degrees and Radians
// https://www.safaribooksonline.com/library/view/javascript-cookbook/9781449390211/ch04s08.html
// http://mathhelpforum.com/trigonometry/1847-how-heck-do-you-convert-real-numbers-radian.html
// http://www.kylesconverter.com/angle/minutes-of-time-to-degrees

function moveClockHands() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const radius = document.getElementById('circle').getAttribute('r');

  function getCoordinates(time, timeFormat, r, axis) {
    // axysX1 = 100
    // axysY1 = 100
    const x = 100 + r * Math.sin(2 * Math.PI * time/timeFormat);
    const y = 100 - r * Math.cos(2 * Math.PI * time/timeFormat);
    if (axis == 'x') {
      return x;
    } else if (axis == 'y'){
      return y;
    }
  }

  //console.log(hours + " " + minutes + " " + seconds);
  document.getElementById('seconds').setAttribute('x2', getCoordinates(seconds, 60, radius, 'x'));
  document.getElementById('seconds').setAttribute('y2', getCoordinates(seconds, 60, radius, 'y'));

  document.getElementById('minutes').setAttribute('x2', getCoordinates(minutes, 60, radius, 'x'));
  document.getElementById('minutes').setAttribute('y2', getCoordinates(minutes, 60, radius, 'y'));

  document.getElementById('hours').setAttribute('x2', getCoordinates(hours, 12, radius, 'x'));
  document.getElementById('hours').setAttribute('y2', getCoordinates(hours, 12, radius, 'y'));
  // console.log('x1: ' + document.getElementById('seconds').getAttribute('x1'));
  // console.log('x2: ' + document.getElementById('seconds').getAttribute('x2'));
  // console.log('y1: ' + document.getElementById('seconds').getAttribute('y1'));
  // console.log('y2: ' + document.getElementById('seconds').getAttribute('y2'));

}
moveClockHands();

window.setInterval(moveClockHands, 1000);
