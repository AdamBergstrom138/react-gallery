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