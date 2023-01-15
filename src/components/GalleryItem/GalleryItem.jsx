// *****Note: if you want the description to be rendered on the page
// and not just on the backside of the image uncomment out line: 37

// GalleryItem will go through each Troll in our galleryItems array
// and render it with a name, picture, description on click, like button,
// and number of likes.

import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';
import LikeButton from '../LikeButton/LikeButton';

function GalleryItem({troll, fetchTrolls}){
    console.log('in gallery item', troll);
    const [isFlipped, setFlipped] = useState(false);
    const toggleFlip = () => {
        console.log('flipping', troll.id);
        setFlipped(!isFlipped);
    }
    // using conditional rendering we are able to "flip" the image 
    // from the front to the back.  The front has a uniqe image of
    // a troll and the back has a description.
    if (isFlipped === false){
        return (
            <div className="float-child" key={troll.id}>
                <p className="name">{troll.name}</p>
                <img src={troll.path} alt={troll.description} onClick={toggleFlip} /> 
                <p><LikeButton troll={troll} fetchTrolls={fetchTrolls}/></p>
                <p>Likes {troll.likes}</p>
            </div>
        )
        }else{
            return(
                <div className="float-child" key={troll.id}> 
                    <p className='name'>{troll.name}</p>
                    <img src={troll.back} alt={troll.description} onClick={toggleFlip} />
                    {/* <p onClick={toggleFlip}>{troll.description}</p>  */}
                    {/* I commented out the above line because I put the description 
                    in the back image.  Uncomment the above line if you want the description
                    to show up under the image as well */}
                    <p><LikeButton troll={troll} fetchTrolls={fetchTrolls}/></p>
                    <p>Likes {troll.likes}</p>
                </div>
            )
        }
}

export default GalleryItem;