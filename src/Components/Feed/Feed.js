import React from 'react'
import FeedModal from './FeedModalComponent'
import FeedFotos from './FeedFotos'

const Feed = () => {
  const [modalPhoto, setModalPhoto] = React.useState(null);

  return (
    <div>
      {modalPhoto && <FeedModal photo= {modalPhoto} setModalPhoto={setModalPhoto}/>}
      <FeedFotos setModalPhoto={setModalPhoto}/>
    </div>
  )
}

export default Feed