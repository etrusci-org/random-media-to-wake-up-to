import { MEDIA } from './data.js';
export const APP = {
    debug: true,
    queue: [...MEDIA],
    ui: {
        app: document.querySelector('.app'),
        loadRandomMedia: document.querySelector('.loadRandomMedia'),
        mediaEmbed: document.querySelector('.mediaEmbed'),
        mediaSelect: document.querySelector('.mediaSelect'),
    },
    main() {
        var _a, _b, _c, _d, _e;
        if (!this.ui.app) {
            return;
        }
        this.ui.app.style.display = 'block';
        (_a = this.ui.loadRandomMedia) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => this.loadMedia());
        (_b = this.ui.mediaSelect) === null || _b === void 0 ? void 0 : _b.addEventListener('change', () => this.loadMedia(true));
        for (const k in MEDIA) {
            if (MEDIA[k]) {
                let opt = document.createElement('option');
                opt.value = k;
                opt.innerHTML = truncStr(`${(_c = MEDIA[k]) === null || _c === void 0 ? void 0 : _c.title}`, 40);
                opt.title = `${(_d = MEDIA[k]) === null || _d === void 0 ? void 0 : _d.title}`;
                (_e = this.ui.mediaSelect) === null || _e === void 0 ? void 0 : _e.append(opt);
            }
        }
        this.loadMedia();
    },
    loadMedia(selected = false) {
        var _a;
        if (!this.ui.mediaEmbed ||
            !this.ui.mediaSelect ||
            !this.ui.loadRandomMedia) {
            return;
        }
        if (this.queue.length == 0) {
            this.queue = [...MEDIA];
        }
        let m = null;
        if (!selected) {
            m = this.getRandomMedia();
            this.ui.mediaSelect.selectedIndex = 0;
        }
        else {
            m = MEDIA[parseInt((_a = this.ui.mediaSelect) === null || _a === void 0 ? void 0 : _a.value)];
        }
        let embedCode = this.getEmbedCode(m);
        if (m && embedCode) {
            let queuePos = `${MEDIA.length - this.queue.length}`.padStart(`${MEDIA.length}`.length, '0');
            this.ui.loadRandomMedia.innerHTML = `load random (${queuePos}/${MEDIA.length})`;
            this.ui.mediaEmbed.innerHTML = `<h2>${m.title}</h2> ${embedCode}`;
        }
    },
    getRandomMedia() {
        if (this.queue.length == 0) {
            this.queue = [...MEDIA];
        }
        let k = Math.floor(Math.random() * this.queue.length);
        let item = this.queue[k];
        if (!item) {
            return null;
        }
        this.queue.splice(k, 1);
        return item;
    },
    getEmbedCode(media) {
        if (!media) {
            return null;
        }
        let embedCode = null;
        if (this.debug) {
            return `<code>${JSON.stringify(media)}</code> <iframe class="${media.platform}">dummy iframe for debugging</iframe>`;
        }
        switch (media.platform) {
            case 'bandcamp':
                embedCode = `<iframe class="bandcamp" src="https://bandcamp.com/EmbeddedPlayer/track=${media.slug}/size=large"></iframe>`;
                break;
            case 'soundcloud':
                embedCode = `<iframe class="soundcloud" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${media.slug}"></iframe>`;
                break;
            case 'youtube':
                embedCode = `<iframe class="youtube" src="https://www.youtube-nocookie.com/embed/${media.slug}" allow="encrypted-media;"></iframe>`;
                break;
        }
        return embedCode;
    },
};
function truncStr(str, length, end = '...') {
    return (str.length > length + end.length) ? `${str.substring(0, length)}${end}` : str;
}
