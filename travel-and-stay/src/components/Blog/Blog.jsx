import './blog.css'
import { BsArrowRightShort } from "react-icons/bs";


const Posts = [
    {
        id: 1,
        postImage: 'nature.jpg',
        title: 'Beautiful Morocco, lets travel',
        desc: 'The kingdom of Morocco is a Muslim country in the North West of Africa, with coastlines on the Atlantic ocean and the Mediterranean sea'
    },
    {
        id: 2,
        postImage: 'wallOfChina.jpg',
        title: 'Explore the Majestic Great Wall of China',
        desc: 'The Great Wall of China is an ancient series of walls and fortifications, totaling more than 13,000 miles, located in northern China.'
    },
    {
        id: 3,
        postImage: 'redeemer.jpg',
        title: 'Discover the Iconic Christ the Redeemer Statue',
        desc: 'Christ the Redeemer is a colossal statue of Jesus Christ in Rio de Janeiro, Brazil, considered one of the New Seven Wonders of the World.'
    },
    {
        id: 4,
        postImage: 'picchu.jpg',
        title: 'Unveil the Mysteries of Machu Picchu',
        desc: 'Machu Picchu is a 15th-century Inca citadel located in the Andes Mountains in Peru, known for its sophisticated dry-stone construction.'
    }
]

export function Blog(){
    return (
        <>
        <section className="blog container section">
            <div className="secContainer">
                <div className="secIntro">
                    <h2 className="secTitle">
                        Our Best Blog?
                    </h2>

                    <p>
                        An insight to the incredible experience in the world
                    </p>
                </div>

                <div className="mainContainer grid">
                    {Posts.map((post, index)=>(
                        <div key={index} className="singlePost grid">
                            <div className="imgDiv">
                                <img src={`images/${post.postImage}`} alt="" />
                            </div>

                            <div className="postDetails">
                                <h3>{post.title}</h3>
                                <p>
                                    {post.desc}
                                </p>
                            </div>

                            <a href="#">
                            Read More
                            <BsArrowRightShort className='icon'/>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        </>
    )
}