import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const storage = localStorage.getItem('videoplayer-current-time');

    // player.on('timeupdate',
    //  _.throttle(function() {
        
    //     player.setCurrentTime(storage).then(function(seconds) {
    //         localStorage.setItem('videoplayer-current-time', seconds);
    //         // seconds = the actual time that the player seeked to
    //     }).catch(function(error) {
    //         switch (error.name) {
    //             case 'RangeError':
    //                 // the time was less than 0 or greater than the video’s duration
    //                 break;
        
    //             default:
    //                 // some other error occurred
    //                 break;
    //         }
    //     });
    // }, 1000),
    // player
    //       .setCurrentTime(storage)
    //       .then(function (seconds) {})
    //       .catch(function (error) {})
    // );  



    // const iframe = document.querySelector('#vimeo-player');
    // const player = new Vimeo(iframe);
    
    // const savedTime = localStorage.getItem('videoplayer-current-time');

    player.on(
        'timeupdate', _.throttle(function () {
          player.getCurrentTime()
            .then(function (seconds) {
              localStorage.setItem('videoplayer-current-time', seconds);
            })
            .catch(function (error) {});
        }, 1000),
        player
          .setCurrentTime(storage)
          .then(function (seconds) {})
          .catch(function (error) {})
      );