import './offers.css'
import { MdKingBed } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { CiWifiOn } from "react-icons/ci";
import { MdAirportShuttle } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { BsArrowRightShort } from "react-icons/bs";

export function Offers(){
    const Offers = [
        {
            id: 1,
            imgSrc: 'china.jpg',
            destTitle: 'China Square',
            location: 'Beijing',
            price: 7000,
        },
        {
            id: 2,
            imgSrc: 'donalds.jpg',
            destTitle: 'Mc Donalds',
            location: 'Istanbul',
            price: 2000,
        },
        {
            id: 3,
            imgSrc: 'kfc.jpg',
            destTitle: 'KFC',
            location: 'Johannesburg',
            price: 4000,
        },
        {
            id: 1,
            imgSrc: 'starbucks.jpg',
            destTitle: 'Starbucks Restauruant',
            location: 'Ottawa',
            price: 19000,
        },
    ]
    return (
        <>
        <section className="offer container section">
            <div className="secContainter">
                <div className="secIntro">
                    <h2>Special Offers</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, voluptatem!
                    </p>
                </div>
                <div className="mainContent grid">
                    {Offers.map((offerItem, index)=>(
                        <div key={index} className="singleOffer">
                            <div className="destImage">
                                <img src={`images/${offerItem.imgSrc}`} alt="Image name" />

                                <span className="discount">
                                    30% Off
                                </span>
                            </div>

                            <div className="offerBody">
                                <div className="price flex">
                                    <h4>
                                        ${offerItem.price}
                                    </h4>
                                    <span className="status">
                                        For Rent
                                    </span>
                                </div>

                                <div className="amenities flex">
                                    <div className="singleAmenity flex">
                                        <MdKingBed className='icon'/>
                                        <small>2 Beds</small>
                                    </div>

                                    <div className="singleAmenity flex">
                                        <GiBathtub className='icon'/>
                                        <small>1 Bath</small>
                                    </div>

                                    <div className="singleAmenity flex">
                                        <CiWifiOn className='icon'/>
                                        <small>Wi-Fi</small>
                                    </div>

                                    <div className="singleAmenity flex">
                                        <MdAirportShuttle className='icon'/>
                                        <small>Shuttle</small>
                                    </div>
                                </div>

                                <div className="location flex">
                                    <CiLocationOn className='icon'/>
                                    <small>{offerItem.location}</small>
                                </div>

                                <button className="btn flex">
                                    View Details
                                    <BsArrowRightShort className='icon'/>
                                </button>
                            </div>
                        </div>
                    ))}
                    
                </div>
            </div>
        </section>
        </>
    )
}