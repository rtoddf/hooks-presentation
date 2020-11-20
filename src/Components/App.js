import React from 'react';
import useAxios from 'axios-hooks'
import styled, {ThemeProvider} from 'styled-components';
import Theme from 'styled-theming';
import theme from '../theme/theme';

import Cards from './Cards';

import '../css/base.css';

const backgroundColor = Theme('mode', {
  light: '#e5e5e5',
  dark: '#2a2a2a',
});

const textColor = Theme('mode', {
  light: '#666',
  dark: '#cdcdcd'
});

const boxShadow = Theme('mode', {
  light: '6px 6px 18px rgba(0,0,0,.16), -6px -6px 18px rgba(255, 255, 255, .70)',
  dark: '4px 4px 10px rgba(0,0,0,1), -4px -4px 18px rgba(58, 58, 58, 1)'
})

const borders = Theme('mode', {
  light: '#e5e5e5',
  dark: '#585858'
})

const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor}
`;

// const theme = { mode: 'light' };
const image = theme.mode === 'light' ? 'http://rtodd.net/images/female_hair_800x800.jpg' : 'http://rtodd.net/images/male_headphone_800x800.jpg';

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
    <ThemeProvider theme={theme}>
      <Wrapper>
          <button onClick={refetch}>refetch</button>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {!loading && !error &&
            <Cards items={data.data} image={image} />
          }
      </Wrapper>
    </ThemeProvider>
  );

}

export default App;
