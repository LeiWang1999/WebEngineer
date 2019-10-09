var fastn = require('fastn')(require('fastn/domComponents')());
var binding = fastn.binding;
var Model = fastn.Model;

var state = {};

function playSintel(){
    Model.set(state, 'src', "magnet:?xt=urn:btih:08ada5a7a6183aae1e09d831df6748d566095a10&dn=Sintel&tr=wss%3A%2F%2Ftracker.btorrent.xyz&tr=wss%3A%2F%2Ftracker.fastcast.nz&tr=wss%3A%2F%2Ftracker.openwebtorrent.com&ws=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2F&xs=https%3A%2F%2Fwebtorrent.io%2Ftorrents%2Fsintel.torrent");
    Model.set(state, 'file', "Sintel.mp4");
}

var ui = fastn('div',
    fastn('input', {
        placeholder: 'src',
        value: binding('src'),
        oninput: 'value:value'
    }),

    fastn('input', {
        placeholder: 'file',
        value: binding('file'),
        oninput: 'value:value'
    }),

    fastn('button', 'play Sintel')
        .on('click', playSintel),

    fastn('web-torrent', {
        src: binding('src'),
        file: binding('file')
    })
)
.attach(state);

ui.render();

window.addEventListener('DOMContentLoaded', function(){
    document.body.appendChild(ui.element);
});