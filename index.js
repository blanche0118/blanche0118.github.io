
var flag = 'begin'


var chapterOneBefore = "./assets/c1b.mp4"
var chapterOne = "./assets/c1.mp4"
var chapterTwo = "./assets/c2.mp4"

$('.button').click(function() {
    video.play();
    $('.begin-wrap').css('display', "none")
  });


$('#video').on('ended', function () {  
  chapterVideo()
})
$('#video2').on('ended', function () {  
  chapterVideo()
})


function chapterVideo(){
  if(flag === 'begin'){
    setVideoSrc('#video2', chapterOneBefore, 'c1b')
  }else if(flag === 'c1b'){
    setVideoSrc('#video', chapterOne, 'c1')
  }else if(flag === 'c1'){
    setVideoSrc('#video2',chapterOne, 'c2')
  }
}


function setVideoSrc(id, url, t){
  if(id === '#video'){
    $('#video2').fadeOut(1000);
  }else{
    $('#video').fadeOut(1000);
  }
  $(id).fadeIn(1000);
  $(id).attr('src', url);
  $(id)[0].load();
  $(id)[0].play();
  flag = t
}