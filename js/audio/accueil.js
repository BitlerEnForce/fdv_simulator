
if (musiqueCourante == "accueil") {
  musiqueAccueil.play();

  var slider = document.getElementById("slider");

  slider.addEventListener("input", function() {
    var value = slider.value;
    var volume = parseFloat(value) / 100;
    if (volume < 0) {
      volume = 0;
    } else if (volume > 1) {
      volume = 1;
    }
    musiqueAccueil.volume = volume;
    musiqueAccueil.play();
  });

  musiqueAccueil.addEventListener('ended', function() {
      musiqueAccueil.currentTime = 0;
      musiqueAccueil.play();
  });
}