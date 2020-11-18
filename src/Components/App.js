import React from 'react';
import useAxios from 'axios-hooks'
import styled, {ThemeProvider} from 'styled-components';
import theme from 'styled-theming';

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

  const backgroundColor = theme('mode', {
    light: '#e5e5e5',
    dark: '#1a1a1a',
  });

  const textColor = theme('mode', {
    light: '#666',
    dark: '#cdcdcd'
  });

  const Wrapper = styled.div`
    background-color: ${backgroundColor};
    color: ${textColor}
  `;

  console.log('theme: ', theme)

  return (
    <ThemeProvider theme={{ mode: 'light' }}>
      <Wrapper>
          <button onClick={refetch}>refetch</button>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {!loading && !error &&
            <Cards items={data.data} backgroundColor={backgroundColor} />
          }
      </Wrapper>
    </ThemeProvider>
  );

}

export default App;
