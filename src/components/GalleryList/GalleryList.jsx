function GalleryList({ trolls }) {

    return (
      <ul>
        {
          trolls.map((troll) => {
            return (
              <div key={troll.id}>
                <img src={troll.path} alt={troll.description}/>
                {/* {creature.name} is from {creature.origin} */}
              </div>
            )
          })
        }
      </ul>
    )
  }
  
  export default GalleryList;