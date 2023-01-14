import GalleryList from "../GalleryList/GalleryList";
function GalleryItem({troll}){
    console.log('in gallery item', troll);
    return (
                <div key={troll.id}>
                  <img src={troll.path} alt={troll.description}/> 
                </div>
      )
    }

export default GalleryItem;