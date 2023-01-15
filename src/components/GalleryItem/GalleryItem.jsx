import { useState } from 'react';
import axios from 'axios';
import './GalleryItem.css';
import LikeButton from '../LikeButton/LikeButton';

function GalleryItem({troll, fetchTrolls}){
    console.log('in gallery item', troll);
    const [isFlipped, setFlipped] = useState(false);
    const toggleFlip = () => {
        console.log('flipping');
        setFlipped(!isFlipped);
    }

    if (isFlipped === false){
        return (
            <div className="float-child" key={troll.id}>
                <img src={troll.path} alt={troll.description} onClick={toggleFlip} /> 
                <p><LikeButton troll={troll} fetchTrolls={fetchTrolls}/></p>
                <p>Likes {troll.likes}</p>
            </div>
        )
        }else{
            return(
                <div className="float-child" key={troll.id}> 
                    <p onClick={toggleFlip}>{troll.description}</p>
                    <p><LikeButton troll={troll} fetchTrolls={fetchTrolls}/></p>
                    <p>Likes {troll.likes}</p>
                </div>
            )
        }
}

export default GalleryItem;