const WebTorrentComponent = require('webtorrent-element')

let elem = new WebTorrentComponent()
elem.src = MAGNETURL
elem.file = '1.mp4'
document.body.appendChild(elem)