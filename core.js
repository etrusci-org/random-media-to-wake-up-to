'use strict'


APP.main = () => {
    // Fetch ui elements
    document.querySelectorAll('.ui').forEach((ele) => {
        ele.classList.add(ele.dataset.key)
        if (ele.dataset.key) APP.ui[ele.dataset.key] = ele
    })

    // Register event handlers
    APP.ui.ctrl_loadmedia.onclick = APP.load_random_media

    // Init progress bar
    APP.ui.pbar.value = 0
    APP.ui.pbar.max = APP.data.length
    APP.ui.pbar_label.innerHTML = `${APP.ui.pbar.value}/${APP.ui.pbar.max}`

    // Load first media
    APP.load_random_media()
}

APP.load_random_media = () => {
    // Reload data into queue if queue is empty
    if (APP.queue.length <= 0) {
        APP.queue = [...APP.data]
    }

    // Select random queue item
    let media_key = Math.floor(Math.random() * APP.queue.length)
    let media = APP.queue[media_key]
    APP.queue.splice(media_key, 1)

    // Set embed code for media platform
    let embed_code = ``
    switch (media.platform) {
        case 'bc':
            embed_code = `<iframe class="bc" src="https://bandcamp.com/EmbeddedPlayer/track=${media.slug}/size=large"></iframe> (source: Bandcamp)`
        break

        case 'sc':
            embed_code = `<iframe class="sc" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${media.slug}"></iframe> (source: SoundCloud)`
        break

        case 'yt':
            embed_code = `<iframe class="yt" src="https://www.youtube.com/embed/${media.slug}" allow="encrypted-media;"></iframe> (source: YouTube)`
        break

        // TODO: add more platforms which do not require the user to login to listen

        default:
            console.error(`unknown media platform: ${JSON.stringify(media)}`)
    }

    // Finally insert data into ui
    document.title = media.title
    APP.ui.mediatitle.innerHTML = media.title
    APP.ui.mediaembed.innerHTML = embed_code
    APP.ui.pbar.value = APP.data.length - APP.queue.length
    APP.ui.pbar_label.innerHTML = `${APP.ui.pbar.value}/${APP.ui.pbar.max}`
}
