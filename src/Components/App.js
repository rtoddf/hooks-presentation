import React from 'react';
import useAxios from 'axios-hooks'
import styled, {ThemeProvider} from 'styled-components';
// import Theme from 'styled-theming';
import {lightTheme, darkTheme} from '../theme/theme';

import Cards from './Cards';

import '../css/base.css';

const Wrapper = styled.div`
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor}
`;

const Button = styled.button`
  margin: 20px;
  padding: .5rem;
  background: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 4px;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

// const theme = { mode: 'light' };

function App() {

  const [{ data, loading, error }, refetch] = useAxios(
    'https://jsonplaceholder.typicode.com/users'
  )

  console.log('data: ', data)
  // console.log('loading: ', loading)
  // console.log('error: ', error)
  // console.log('refetch: ', refetch)

  return (
    <ThemeProvider theme={darkTheme}>
      <Wrapper>
          
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {loading &&
            <Button><p>Loading...</p></Button>
          }

          {error &&
            <Button><p>Error!</p></Button>
          }

          {!loading && !error &&
            <>
              <Button onClick={refetch}>Refetch</Button>
              <Cards items={data} />
            </>
          }
      </Wrapper>
    </ThemeProvider>
  );

}

export default App;
