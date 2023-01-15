import GalleryItem from '../GalleryItem/GalleryItem';
import { useState } from 'react';
function GalleryList({ trolls }) {
    // const [trollItem, setTrollItem] = useState([]);
    //     trolls.map((troll) => {
    //     setTrollItem(troll);
    //         return (
    //         <GalleryItem trollItem={trollItem} />
    //         )
    // })
    

    return (
        trolls.map((troll) => {
            return (
            <GalleryItem troll={troll} key={troll.id} />
            )
        })
    )
  }
  
  export default GalleryList;