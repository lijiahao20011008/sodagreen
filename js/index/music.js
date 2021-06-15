window.addEventListener('load', function() {
    var ps = document.querySelectorAll(".music p");
    var lis = document.querySelectorAll(".music li");
    var musics = document.getElementsByTagName("audio");
    var plays = document.getElementsByClassName("play");
    var pauses = document.getElementsByClassName("pause");
    var srcs = ['music/燕窝.mp3', 'music/你被写在我的歌里.mp3', 'music/小情歌.mp3', 'music/我好想你.mp3', 'music/再遇见.mp3', 'music/无与伦比的美丽.mp3'];
    for (var i = 0; i < musics.length; i++) {
        plays[i].setAttribute('index', i);
        pauses[i].setAttribute('index', i);
        plays[i].addEventListener('click', function() {
            for (var j = 0; j < musics.length; j++) {
                musics[j].src = '';
                ps[j].className = '';
                plays[j].className = 'play';
                pauses[j].className = 'pause';
            }
            let index = this.getAttribute('index');
            musics[index].src = srcs[index];
            ps[index].className = 'chosen';
            plays[index].className = 'chosen play';
            pauses[index].className = 'chosen pause';
            musics[index].play();
            musics[index].addEventListener("ended", function() {
                if (index == musics.length - 1) {
                    index = -1;
                }
                plays[++index].click();
            })
        })
        pauses[i].addEventListener('click', function() {
            let index = this.getAttribute('index');
            musics[index].pause();
        })
    }
    plays[0].click();
})