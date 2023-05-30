import React, { useEffect } from 'react';
import FeedModal from './FeedModalComponent';
import FeedFotos from './FeedFotos';
import PropTypes from 'prop-types'

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null);
  const [pages, setPages] = React.useState([1]);
  const [ infinite, setInfinite ] = React.useState(true);


  useEffect(() => {
    let wait = false;
    function InfiniteScroll() {
      if(infinite) {
      const scroll = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      if(scroll > height * .75 && !wait) {
        setPages((pages) => [...pages, pages.length +1])
        wait = true;
        setTimeout(() => {
          wait = false
        }, 500);
      }
      }
     
    }

    window.addEventListener('wheel', InfiniteScroll);
    window.addEventListener('scroll', InfiniteScroll);
    return () => {
      window.removeEventListener('wheel', InfiniteScroll);
      window.removeEventListener('scroll', InfiniteScroll);
    };
  }, [infinite]);

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {/* const [pages, setPages] = React.useState([1,2]); */}
      {pages.map((page) => (
        <FeedFotos
          key={page}
          user={user}
          page={page}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
      <FeedFotos user={user} page="2" setModalPhoto={setModalPhoto} />
    </div>
  );
};

Feed.defaultProps = {
  user: 0,
}

Feed.propTypes = {
  user: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired
  ])
}

export default Feed;
