global.fetch = require('node-fetch');

import { searchAlbums } from '../src/spotify-wrapper/main';

const albums = searchAlbums('Incubus');
albums.then(data => console.log(data));
