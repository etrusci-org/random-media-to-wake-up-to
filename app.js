'use strict'


const APP = {
    videos: [], // set in data.js

    load_random_video() {
        let video_id = APP.videos[Math.floor(Math.random() * APP.videos.length)]
        let ele = document.querySelector('.random-video')
        ele.src = `https://www.youtube-nocookie.com/embed/${video_id}`
    },
}
