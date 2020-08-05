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

const week = ['الأحد','الأثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعه', 'السبت'];
const months = ['يناير','فبراير', 'مارس','أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر','أكتوبر', 'نوفمير','ديسمبر']
function setTime() {
    var nowDiv = document.querySelector('#wrapper #topHead #topHeadContent #date');
var now = new Date();
// var hours = now.getHours();
// var minuts = now.getMinutes();
// var seconds = now.getSeconds();
var day = now.getDay();
var year = now.getFullYear();
var month = now.getMonth();
var d = now.getDate();
    nowDiv.textContent = week[day] + " " +  d + " " + months[month] + " " + year;
}

window.onload = () => {
    'use strict';

    setInterval(setTime, 500);
}



