import { useState } from 'react';
import axios from 'axios';

function LikeButton ({ troll, fetchTrolls}) {
    const handleLike = (event) => {
        event.preventDefault();
        console.log('clicked like');
        putLike({troll});
    }
    
    const putLike = ({troll}) => {
        console.log('you liked troll', troll.id);
        axios.put(`/gallery/like/${troll.id}`)
        .then(response => {
            fetchTrolls();
        })
        .catch(err => {
            alert('Error in PUT route');
            console.log(err);
        })
    }
    
    return ( 
        <button type="button" onClick={handleLike}>
            Like
        </button>
        )
    }
    
    export default LikeButton;