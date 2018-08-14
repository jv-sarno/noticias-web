var second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;

var now = new Date();
now.setHours(now.getHours()+5);
now.setMinutes(now.getMinutes()+43);

var countDown = now.getTime(),
  x = setInterval(function() {

    var now = new Date().getTime(),
      distance = countDown - now;

      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

  }, second)
