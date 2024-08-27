import './about.css'

export function About(){
    return (
        <>
        <section className="about section">
            <div className="secContainer">
                <h2 className="title">
                    Why Hikings?
                </h2>

                <div className="mainContent containter grid">
                    <div className="singleItem">
                        <img src="images/mountain.png" alt="" />

                        <h3>100+ Mountains</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Totam, vero. Quisquam nulla eligendi odio sed!
                        </p>
                    </div>

                    <div className="singleItem">
                        <img src="images/hike.png" alt="" />
                        
                        <h3>1000+ Hikings</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Totam, vero. Quisquam nulla eligendi odio sed!
                        </p>
                    </div>

                    <div className="singleItem">
                        <img src="images/customer.png" alt="" />
                        
                        <h3>20000+ Customers</h3>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Totam, vero. Quisquam nulla eligendi odio sed!
                        </p>
                    </div>
                </div>

                <div className="videoCard container">
                    <div className="cardContent grid">

                        <div className="cardText">
                            <h2>
                                Lorem ipsum, dolor sit amet consectetur 
                                adipisicing elit. Saepe, natus?
                            </h2>
                            
                            <p>
                                Lorem ipsum dolor sit, amet consectetur adipisicing 
                                elit. Placeat numquam harum necessitatibus 
                                cumque mollitia nesciunt in repellat a sunt d
                                olor?
                            </p>
                        </div>

                        <div className="cardVideo">
                            <video src="video/video.mp4" autoPlay loop muted
                            typeof='video/mp4'></video>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}