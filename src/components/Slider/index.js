import '@splidejs/splide/css';
import EL from "../../utils/EL.js";

const Carousel = ()=>{
    const swipper = EL({
        element: 'section',
        className: 'splide',
        children: [
            EL({
                element: 'div',
                className: 'splide__track',
                children: [
                    EL({
                        element: 'ul',
                        className: 'splide__list',
                        children: [
                            EL({
                                element: 'li',
                                className: 'splide__slide',
                                children: [
                                    EL({
                                        element: 'img',
                                        className: 'h-[20rem] w-[20rem]',
                                        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/98bae157607557.59dcb9a811b32.png'
                                    })
                                ]
                            }),
                            EL({
                                element: 'li',
                                className: 'splide__slide',
                                children: [
                                    EL({
                                        element: 'img',
                                        className: 'h-[20rem] w-[20rem]',
                                        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/d6b05157607557.59dcb9a812d1e.png'
                                    })
                                ]
                            }),
                            EL({
                                element: 'li',
                                className: 'splide__slide',
                                children: [
                                    EL({
                                        element: 'img',
                                        className: 'h-[20rem] w-[20rem] absolute z-1',
                                        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/efd25b57607557.59dcb9a81170f.png'
                                    }),
                                    // EL({
                                    //     element: 'div',
                                    //     className: 'bg-gradient-to-t from-black from-gray-400 absolute h-[20rem] w-[17rem] z-0',
                                    //     children: [
                                    //         EL({
                                    //             element: 'div',
                                    //             className: 'absolute top-[5rem] left-[3.5rem]',
                                    //             innerHTML: '<svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 24 24"><path fill="currentColor" d="m9.5 16.5l7-4.5l-7-4.5v9ZM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22Zm0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20Zm0-8Z"/></svg>'
                                    //         })
                                    //     ]

                                    // })
                                ]
                            })

                        ]
                    })
                ]
            })      
        ]  
    })

    return swipper
}

export default Carousel;