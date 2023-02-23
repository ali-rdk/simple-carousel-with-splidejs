import './src/index.css';
import App from "./src/App.js";
import Splide from '@splidejs/splide';

const root = document.getElementById('root');

root.appendChild(App());

new Splide( '.splide',{
    perPage: 4,
    rewind : true,
    perMove: 1,
    type   : 'loop',
    padding: '10%',
    gap: '3rem',
}).mount();