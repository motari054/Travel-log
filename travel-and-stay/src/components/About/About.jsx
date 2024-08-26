import './about.css'

export function About(){
    return (
        <>
        <section className="about section">
            <div className="secContaiter">
                <div className="title">
                    Why Hikings?
                </div>

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
            </div>
        </section>
        </>
    )
}