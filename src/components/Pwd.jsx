import React from 'react'
import chef from '../assets/chef1.jpg'

const Pwd = () => {
    return (
        <div className='container'>
            <h1>Commander votre repas en ligne</h1>
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
