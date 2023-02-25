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

// const cover = document.querySelectorAll('#poster');
// const play_btn = document.querySelectorAll('#play_btn');
// console.log(play_btn);
// cover.forEach((item, index) =>{
//     item.addEventListener('mouseover', (event)=>{
//         play_btn[index].style = "z-index: 2"
//     })
// })