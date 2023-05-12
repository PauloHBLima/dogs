import React from 'react'
import FeedFotosItem from './FeedFotosItem'
import useFetch from '../../Hooks/useFetch'
import { PHOTOS_GET } from '../../Api';

const FeedFotos = () => {
const { data, loading, error, request } = useFetch();

React.useEffect(() => {
async function fetchFotos() {
  const { url, options } = PHOTOS_GET({page: 1, total: 6, user: 0})
  const { response, json} = await request(url, options); 
  console.log(json)
}
fetchFotos();
}, [request]);

  return (
    <div>
      <FeedFotosItem />
    </div>
  )
}

export default FeedFotos