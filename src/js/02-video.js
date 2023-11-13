import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player', {});

const saveTime = time => localStorage.setItem('videoplayer-current-time', time);

const savedTime = localStorage.getItem('videoplayer-current-time');

if (savedTime) player.setCurrentTime(parseFloat(savedTime));

player.on(
  'timeupdate',
  throttle(data => saveTime(data.seconds), 1000)
);
