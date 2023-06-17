import Vimeo from "@vimeo/player";
import throttle from 'lodash.throttle'


const iframe = document.querySelector('iframe');
const player = new Vimeo(iframe);
const LOCALSTORAGE_KEY = "videoplayer-current-time";

const savedLocalData = (data) => {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds)
}

player.on('timeupdate', throttle(savedLocalData, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY)).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;

        default:
            break;
    }
});