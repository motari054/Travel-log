import './popular.css'
import { BsArrowLeftShort } from "react-icons/bs";
import { BsArrowRightShort } from "react-icons/bs";
import { BsDot } from "react-icons/bs";



export function Popular(){
    const Data = [
        {
            id: 1,
            destTitle: 'Nairobi City',
            imgSrc: 'nbo.jpg',
            location: 'Kenya',
            grade: 'CULTURAL RELAX',
        },
        {
            id: 2,
            destTitle: 'Barcelona',
            imgSrc: 'barcelona.jpg',
            location: 'Spain',
            grade: 'Camp Nou',
        },
        {
            id: 3,
            destTitle: 'Golden Gate Bridge',
            imgSrc: 'new-york.jpg',
            location: 'USA',
            grade: 'Golden Gate Bridge',
        },
        {
            id: 4,
            destTitle: 'Wembley Stadium',
            imgSrc: 'London.jpg',
            location: 'Englalnd',
            grade: 'Wembley',
        },
    ]
    return (
        <>
        <section className="popular section container">
            <div className="secContainer">

                <div className="secHeader flex">
                    <div className="textDiv">
                        <h2 className="secTitle">Popular Destination</h2>
                        <p>
                            From historical cities to natural spectacularts, come see the best of the
                            world
                        </p>
                    </div>

                    <div className="iconsDiv flex">
                        <BsArrowLeftShort className='icon leftIcon'/>
                        <BsArrowRightShort className='icon rightIcon'/>
                    </div>
                </div>

                <div className="mainContent grid">
                    {Data.map((destination, index)=>(
                        <div key={index} className="singleDestination">
                            <div className="destImage">
                                <img src={`images/${destination.imgSrc}`} alt="ImageTitle" />

                                <div className="overlayInfo">
                                    <h3>{destination.destTitle}</h3>
                                    <p>
                                        {destination.location}
                                    </p>

                                    <BsArrowRightShort className='icon'/>
                                </div>
                            </div>

                            <div className="destFooter">
                                <div className="number">
                                    0{destination.id}
                                </div>

                                <div className="destText flex">
                                    <h6>{destination.location}</h6>
                                    <span className="flex">
                                        <span className="dot">
                                            <BsDot className='icon'/>
                                        </span>
                                        Dot
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}

                    

                </div>
            </div>
        </section>
        </>
    )
}