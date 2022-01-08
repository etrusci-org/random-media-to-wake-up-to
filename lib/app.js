'use strict'


const APP = {
    data: [],
    queue: [],
    ui: {},


    main: () => {
        // Fetch UI elements
        document.querySelectorAll('[data-uikey]').forEach((ele) => {
            ele.classList.add('ui', ele.dataset.uikey)
            APP.ui[ele.dataset.uikey] = ele
        })

        // Register event handlers
        APP.ui.ctrlLoadRandomMedia.onclick = APP.loadMedia

        // Init progress bar
        APP.ui.pbar.value = 0
        APP.ui.pbar.max = APP.data.length
        APP.ui.pbarLabel.innerHTML = `${APP.ui.pbar.value}/${APP.ui.pbar.max}`

        // Load initial random media
        APP.loadMedia()
    },


    loadMedia: () => {
        // Reload data into queue if queue is empty
        if (APP.queue.length <= 0) {
            APP.queue = [...APP.data]
        }

        // Select media item
        let rmk = Math.floor(Math.random() * APP.queue.length)
        let media = APP.queue[rmk]
        APP.queue.splice(rmk, 1)

        // Set embed code for media platform
        let embedCode = APP.embedCode(media)

        // Finally insert data into ui
        APP.ui.mediaTitle.innerHTML = media.title
        APP.ui.mediaEmbedCode.innerHTML = embedCode
        APP.ui.pbar.value = APP.data.length - APP.queue.length
        APP.ui.pbarLabel.innerHTML = `${APP.ui.pbar.value}/${APP.ui.pbar.max}`
    },


    embedCode: (media) => {
        let embedCode = ``

        switch (media.platform) {
            case 'bc':
                embedCode = `<iframe class="bc" src="https://bandcamp.com/EmbeddedPlayer/track=${media.slug}/size=large"></iframe>`
                break

            case 'sc':
                embedCode = `<iframe class="sc" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${media.slug}"></iframe>`
                break

            case 'yt':
                embedCode = `<iframe class="yt" src="https://www.youtube-nocookie.com/embed/${media.slug}" allow="encrypted-media;"></iframe>`
                break

            // TODO: add more platforms which do not require the user to login to consume the media

            default:
                embedCode = `<p>Unknown media platform:<br><code>${JSON.stringify(media)}</code></p>`
                console.error('Unknown media platform:', media)
        }

        return embedCode
    },
}
