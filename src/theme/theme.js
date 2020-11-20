import Theme from 'styled-theming';

const lightTheme = {
    backgroundColor: '#e5e5e5',
    textColor: '#666',
    borderColor: '#e5e5e5',
    borderRadius: '1rem',
    borderRadiusCircle: '50%',
    boxShadow: '6px 6px 18px rgba(0,0,0,.16), -6px -6px 18px rgba(255, 255, 255, .70)',
    image: 'http://rtodd.net/images/female_hair_800x800.jpg'
}

const darkTheme = {
    backgroundColor: '#2a2a2a',
    textColor: '#cdcdcd',
    borderColor: '#585858',
    borderRadius: '1rem',
    borderRadiusCircle: '50%',
    boxShadow: '4px 4px 10px rgba(0,0,0,1), -4px -4px 18px rgba(58, 58, 58, 1)',
    image: 'http://rtodd.net/images/male_headphone_800x800.jpg'
}

export { lightTheme };
export { darkTheme };



// const backgroundColor = Theme('mode', {
//     light: '#e5e5e5',
//     dark: '#2a2a2a',
// });

// const textColor = Theme('mode', {
//     light: '#666',
//     dark: '#cdcdcd'
// });

// const boxShadow = Theme('mode', {
//     light: '6px 6px 18px rgba(0,0,0,.16), -6px -6px 18px rgba(255, 255, 255, .70)',
//     dark: '4px 4px 10px rgba(0,0,0,1), -4px -4px 18px rgba(58, 58, 58, 1)'
// })

// const borders = Theme('mode', {
//     light: '#e5e5e5',
//     dark: '#585858'
// })