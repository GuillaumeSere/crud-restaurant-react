import React from 'react'
import chef from '../assets/chef1.jpg'
import { Player } from '@lottiefiles/react-lottie-player';
import animation from '../assets/102780-cateringfork-knife.json';

const Pwd = () => {
    return (
        <div className='container'>
            <Player
                autoplay
                loop
                src={animation}
                style={{ height: '200px', width: '200px' }}
                className="animation1"
            >
            </Player>
            <h1>Commander votre repas en ligne</h1>
            <Player
                autoplay
                loop
                src={animation}
                style={{ height: '200px', width: '200px' }}
                className="animation2"
            >
            </Player>
            <div className="content">
                <div className="image">
                    <img src={chef} alt="chef cuisine" />
                </div>
                <div className="home">
                    <h2>Cuisine En Ligne</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut ad deleniti porro exercitationem neque fugiat nihil
                        quod adipisci illum iste.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem beatae numquam cum laudantium, voluptates aperiam
                        quasi id pariatur sint incidunt culpa libero porro
                        molestiae soluta! Doloremque odio possimus ipsa vero?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut ad deleniti porro exercitationem neque fugiat nihil
                        quod adipisci illum iste.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem beatae numquam cum laudantium, voluptates aperiam
                        quasi id pariatur sint incidunt culpa libero porro
                        molestiae soluta! Doloremque odio possimus ipsa vero?</p>
                </div>
            </div>
        </div>
    )
}

export default Pwd
