import React from 'react';
import useAxios from 'axios-hooks'
import styled, {ThemeProvider} from 'styled-components';
import Theme from 'styled-theming';
import {lightTheme, darkTheme} from '../theme/theme';

import Cards from './Cards';

import '../css/base.css';

const Wrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor}
`;

// const theme = { mode: 'light' };

const image = 'http://rtodd.net/images/female_hair_800x800.jpg';

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
    <ThemeProvider theme={lightTheme}>
      <Wrapper>
          <button onClick={refetch}>refetch</button>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {!loading && !error &&
            <Cards items={data.data} />
          }
      </Wrapper>
    </ThemeProvider>
  );

}

export default App;
