const video = document.getElementById('video')
const btn_play_video = document.getElementById('play')
const btn_pause_video = document.getElementById('pause')
const btn_stop_video = document.getElementById('stop')

const part_1 = document.getElementById('part-1')
const part_2 = document.getElementById('part-2')
const part_3 = document.getElementById('part-3')

const volume = document.getElementById('volume')
const show_hide = document.querySelector('.show-hide')
const video_description = document.querySelector('.video-description__content')

function playVideo() {
    video.play();
}

function pauseVideo() {
    video.pause();
}

function stopVideo() {
    video.pause();
    video.currentTime = 0
}

function currentTime_1() {
    video.currentTime = 0
}
function currentTime_2() {
    video.currentTime = 120
}
function currentTime_3() {
    video.currentTime = 180
}

volume.addEventListener('click', function() {
     if (video.muted == false) {
         video.muted = true
         volume.classList.add('active')
     } else {
         video.muted = false
         volume.classList.remove('active')
       }
    });

part_1.addEventListener('click', currentTime_1)
part_2.addEventListener('click', currentTime_2)
part_3.addEventListener('click', currentTime_3)

btn_play_video.addEventListener('click', playVideo)
btn_pause_video.addEventListener('click',pauseVideo)
btn_stop_video.addEventListener('click',stopVideo)

show_hide.addEventListener('click', function() {

     show_hide.classList.toggle('show')
     video_description.classList.toggle('show')
    
     show_hide.classList.contains('show') ? show_hide.textContent = "hide" : show_hide.textContent = "show"
 })