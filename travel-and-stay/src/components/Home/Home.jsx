import './home.css'
export function Home(){
    return (
        <>
        <section className="home">
            <div className="secContainer container">
                <div className="homeText">
                    <h1 className="title">Plan your trip with Travel Dot</h1>
                    <p className="subTitle">
                        Travel to your favorite city with respect of the environment
                    </p>

                    <button className="btn"><a href="#">Explore Now</a></button>

                    <div className="homeCard grid">
                        <div className="locationDiv">
                            <label htmlFor="location">Location</label>
                            <input type="text" name="" placeholder='Dream Destination' id="" />
                        </div>

                        <div className="distDiv">
                            <label htmlFor="distance">Location</label>
                            <input type="text" name="" placeholder='11/meters' id="" />
                        </div>

                        <div className="priceDiv">
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