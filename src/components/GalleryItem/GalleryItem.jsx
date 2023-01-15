import './GalleryItem.css';
function GalleryItem({troll}){
    console.log('in gallery item', troll);
    return (
                <div className="float-child" key={troll.id}>
                  <img src={troll.path} alt={troll.description}/> 
                </div>
      )
    }

export default GalleryItem;