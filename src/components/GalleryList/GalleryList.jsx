// GalleryList will .map through our Trolls Array and send each 
// Troll to GalleryItem to creat each item with a name, picture, description
// and like button with number of likes displayed on the DOM
import GalleryItem from '../GalleryItem/GalleryItem';
function GalleryList({ trolls, fetchTrolls }) {

    return (
        trolls.map((troll) => {
            return (
            <GalleryItem troll={troll} key={troll.id} fetchTrolls={fetchTrolls}/>
            )
        })
    )
  }
  
  export default GalleryList;