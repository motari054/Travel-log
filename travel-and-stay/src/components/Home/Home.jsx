import './home.css'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export function Home(){
    useEffect(()=>{
        Aos.init({duration: 2000})
    }, [])

    return (
        <>
        <section className="home">
            <div className="secContainer container">
                <div className="homeText">
                    <h1 data-aos="fade-up" className="title">Plan your trip with Travel Dot</h1>
                    <p data-aos="fade-up" data-aos-duration="2500" className="subTitle">
                        Travel to your favorite city with respect of the environment
                    </p>

                    <button data-aos="fade-up" data-aos-duration="3000" className="btn"><a href="#">Explore Now</a></button>

                    <div className="homeCard grid">
                        <div data-aos="fade-right" data-aos-duration="1500" className="locationDiv">
                            <label htmlFor="location">Location</label>
                            <input type="text" name="" placeholder='Dream Destination' id="" />
                        </div>

                        <div data-aos="fade-right" data-aos-duration="2000" className="distDiv">
                            <label htmlFor="distance">Location</label>
                            <input type="text" name="" placeholder='11/meters' id="" />
                        </div>

                        <div data-aos="fade-right" data-aos-duration="2500" className="priceDiv">
                            <label htmlFor="price">Location</label>
                            <input type="text" name="" placeholder='$140-$500' id="" />
                        </div>
                        <button className="btn">Search</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}