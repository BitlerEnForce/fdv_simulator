function refreshMusique() {
  console.log(musiqueCourante);
  if (musiqueCourante == "plaine") {
    console.log("coucou");
    musiquePlaine.play();
    var slider2 = document.getElementById("slider");

    slider2.addEventListener("input", function() {
      var value = slider.value;
      var volume = parseFloat(value) / 100;
      if (volume < 0) {
        volume = 0;
      } else if (volume > 1) {
        volume = 1;
      }
      musiquePlaine.volume = volume;
      musiquePlaine.play();
    });

    musiquePlaine.addEventListener('ended', function() {
      refreshMusique();
      musiquePlaine.currentTime = 0;
      musiquePlaine.play();
    });
  }
}

refreshMusique();