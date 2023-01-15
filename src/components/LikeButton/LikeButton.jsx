import { useState } from 'react';
import axios from 'axios';


function LikeButton ({ troll, fetchTrolls}) {
    const handleLike = (event) => {
        event.preventDefault();
        console.log('clicked like');
        putLike({troll});
    }
    
    //put request
    const putLike = ({troll}) => {
        console.log(troll.id);
        //try to insert id into url?
        axios.put(`/gallery/like/${troll.id}`)
        .then(response => {
            fetchTrolls();
        })
        .catch(err => {
            alert('Error in PUT route');
            console.log(err);
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
      
      }
    
    return ( 
        <button type="button" onClick={handleLike}>
            Like
        </button>
        )
    }
    
    export default LikeButton;