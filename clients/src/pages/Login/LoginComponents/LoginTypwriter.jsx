import TypeWriter from 'typewriter-effect'
import { Box } from '@mui/system';
import theme from '../../../assets/theme'
import { Typography } from '@mui/material';


const Writer = () => {
  return ( 
    <Box
      sx={{
        width: "100%",
        backgroundColor: theme.palette.primary.dark,
        display:'flex',
        justifyContent: 'center',        
      }}
    >
      <Typography alighn={"center"} sx={{color:'white'}} variant="h1">
     <TypeWriter options={{
    autoStart: true,
    loop: true,
  }}
      onInit={(typewriter) => {
        typewriter.typeString('Bored?')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Pick The Nyte!')
        .pauseFor(1500)
        .deleteAll()
        .typeString('Invite Your Friends').pauseFor(500)
        .deleteAll()
        .typeString('Choose 3 Games').pauseFor(500)
        .deleteAll()
        .typeString('Make It A Bored?GameNyte!')
        .pauseFor(5000)
        .deleteAll()
        
        .start()
      }}
      />
  </Typography>
     

    </Box>
   );
}
 
export default Writer;