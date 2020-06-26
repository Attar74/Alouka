var audio = {

    init: function() {
        audio.files = document.querySelectorAll('a.play');
        audio.player = document.querySelector('audio#player');

        for(var i in audio.files) {
                audio.files[i].onclick = audio.play;
        }
    },
    play: function(e){
        e.preventDefault();
        var requstedFile = e.target.dataset.audioFile;
        audio.player.src = requstedFile;
        audio.player.play();
    }
}

audio.init();

var gallary = {

    init:function() {

        gallary.thumbs = document.querySelectorAll('div.subPhotos a img');
        gallary.viewer = document.querySelector('div.mainPhoto img');

        for(var i in gallary.thumbs) {
            gallary.thumbs[i].onclick = gallary.change;
        }
    },
    change: function(evt) {
        evt.preventDefault();
        if((evt.target.nodeName == "IMG" || evt.target.nodeName == "img") && gallary.viewer.src != "") {
            var requesedImg = evt.target.parentNode.href;
            gallary.viewer.src = this.parentNode.href;
        }
    }
}

gallary.init();







