var flag = 'begin'

var seasons = [0, 0, 0, 0]
var chapterOneBefore = "./assets/c1b.mp4"
var chapterOne = "./assets/c1.mp4"
var chapterTwo = "./assets/c2.mp4"
var chapterTwoContent = "./assets/c2c.mp4"
var chapterThreeBefore = "./assets/c3.mp4"
var chapterTwoVideo = [
  "./assets/c2/1.mp4",
  "./assets/c2/2.mp4",
  "./assets/c2/3.mp4",
  "./assets/c2/4.mp4",
  "./assets/c2/5.mp4",
]

var chapterThreeVideo = [
  "./assets/c3/1.mp4",
  "./assets/c3/2.mp4",
  "./assets/c3/3.mp4",
  "./assets/c3/4.mp4",
]

$('.button').click(function () {
  video.play();
  $('.begin-wrap').css('display', "none")
});


$('#video').on('ended', function () {
  chapterVideo()
})
$('#video2').on('ended', function () {
  chapterVideo()
})


function chapterVideo() {
  if (flag === 'begin') {
    setVideoSrc('#video2', chapterOneBefore, 'c1b')
  } else if (flag === 'c1b') {
    setVideoSrc('#video', chapterOne, 'c1')
  } else if (flag === 'c1') {
    setVideoSrc('#video2', chapterTwo, 'c2')
  } else if (flag === 'c2') {
    setVideoSrc('#video', chapterTwoContent, 'c2c')
  } else if (flag === 'c2c') {
    chapterTwoChoice()
  } else if (flag === 'c2cV') {
    flag = 'c2c'
    chapterTwoChoice()
  } else if (flag === 'c3b') {
    chapterThreeChoice()
  } else if (flag === 'c3V') {
    if (seasons.indexOf(0) === -1) {
      $('#end').css('display', "block")
      $('#end').fadeIn(2000);
      $('#end')[0].load();
      $('#end')[0].play();
    } else {
      flag = 'c3b'
      chapterThreeChoice()
    }
  }
}


function chapterTwoChoice() {
  $('.c2cBox').css('display', "block")
  $('.item').click(function (e) {
    if ($(this).index() < 5) {
      $('.c2cBox').css('display', "none")
      const url = chapterTwoVideo[$(this).index()]
      $('#video').attr('src', url);
      $('#video')[0].load();
      $('#video')[0].play();
      flag = 'c2cV'
    }

  })
  $('.gotoC3').click(function (e) {
    $('.c2cBox').css('display', "none")
    setVideoSrc('#video', chapterThreeBefore, 'c3b')
  })
}

function chapterThreeChoice() {
  $('.c3cBox').css('display', "block")
  $('.item').click(function (e) {
    $('.c3cBox').css('display', "none")
    const index = $(this).index()
    const url = chapterThreeVideo[index]
    $('#video').attr('src', url);
    $('#video')[0].load();
    $('#video')[0].play();
    flag = 'c3V'
    seasons[index] = 1
  })

}


function setVideoSrc(id, url, t) {
  if (id === '#video') {
    $('#video2').fadeOut(1000);
  } else {
    $('#video').fadeOut(1000);
  }
  $(id).fadeIn(1000);
  $(id).attr('src', url);
  $(id)[0].load();
  $(id)[0].play();
  flag = t
}