import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(savedPlayedTime, 1000));

function savedPlayedTime(data) {
    const playedTime = data.seconds;
    localStorage.setItem(STORAGE_KEY, playedTime);
}

player.setCurrentTime(localStorage.getItem(STORAGE_KEY)).then(function(seconds) {}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});