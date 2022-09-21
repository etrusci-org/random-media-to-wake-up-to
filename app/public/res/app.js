import { Media } from './media.js';
export const App = {
    debug: true,
    queue: [],
    init() {
        this.queue = [...Media];
        if (this.debug)
            console.debug('App ready', this);
    },
    getRandomMedia() {
        return null;
    }
};
