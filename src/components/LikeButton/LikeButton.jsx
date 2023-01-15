import { useState } from 'react';
import axios from 'axios';


function LikeButton ({ troll, fetchTrolls}) {
    const handleLike = (event) => {
        event.preventDefault();
        putList({troll});
    }
    
    //put request
    const putLike = ({troll}) => {
        console.log(troll.id);
        //try to insert id into url?
        axios.put(`/like/${troll.id}`)
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

       
       <button type="submit"
       onSubmit={handleLike}
       >
        Like
       </button>
        // <Button 
        // onClick={handleLike}
        //  sx={{ 
        //     width: "max-content", 
        //     color: "#fff"
        //     }}
        // >
        //     Like
        // </Button>


    )
    
    }
    
    export default LikeButton;