import { createTheme } from '@mui/material/styles';

const theme = createTheme({
     colors:{
          bg:"#ff9100",
          textColor:"#000"
      }
    ,
    typography: {
      fontSize: 16,
      h3: {
        fontWeight: 700,
        fontSize: '2.2rem'
      },
      h4: {
        fontWeight: 700,
        fontSize: '1.75rem'
      },
      h5: {
        fontWeight: 500
      },
      h6: {
        fontWeight: 500
      }
    }
  })

  export default theme;