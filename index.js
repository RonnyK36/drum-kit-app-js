var drumButtonLength = document.querrySelectorAll('.drum').length;

for (var i = 0; i < drumButtonLength; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('click', function() {
        alert("Hey");
        var playAudio = new Audio('sounds/tom-1.mp3');
        playAudio.play();
    });
}