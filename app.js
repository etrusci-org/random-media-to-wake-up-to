'use strict'


const APP = {
    videos: [], // set in data.js
    queue: [], // set in new_queue()

    ele_vid: document.querySelector('.random-video'),
    ele_qmsg: document.querySelector('.queue-msg'),
    ele_btn: document.querySelector('.load-random-video'),

    new_queue() {
        APP.queue = [...APP.videos]
    },

    load_random_video() {
        if (APP.queue.length < 1) {
            APP.new_queue()
        }
        let rnd_key = Math.floor(Math.random() * APP.queue.length)
        let rnd_vid = APP.queue[rnd_key]
        APP.queue.splice(rnd_key, 1)
        APP.ele_vid.src = `https://www.youtube-nocookie.com/embed/${rnd_vid}`
        if (APP.queue.length > 0) {
            APP.ele_qmsg.innerHTML = `CLICK HERE TO LOAD ANOTHER VIDEO &middot;&middot;&middot; ${APP.queue.length} VIDEOS LEFT`
        }
        else {
            APP.ele_qmsg.innerHTML = `YOU'VE SEEN IT ALL FOR NOW &middot;&middot;&middot; RELOAD QUEUE`
        }
    },
}


APP.ele_btn.onclick = () => {
    APP.load_random_video()
}
