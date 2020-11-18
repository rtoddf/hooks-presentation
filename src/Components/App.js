import React from 'react';
import useAxios from 'axios-hooks'

import Cards from './Cards';

import '../css/base.css';

function App() {

  const [{ data, loading, error }, refetch] = useAxios(
    'https://reqres.in/api/users?delay=1'
  )

  // console.log('data: ', data)
  // console.log('loading: ', loading)
  // console.log('error: ', error)
  // console.log('refetch: ', refetch)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  return (
    <div>
        <button onClick={refetch}>refetch</button>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        {!loading && !error &&
          <Cards items={data.data} />
        }
    </div>
  );

}

export default App;
