import TypeWriter from 'typewriter-effect'
import { Box } from '@mui/system';
import theme from '../../../assets/theme'
import { Typography } from '@mui/material';


const Writer = (props) => {

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
        typewriter.typeString('<strong>Bored?</strong>')
        .pauseFor(1250)
        .deleteAll()
        .typeString('Choose 3 <strong>Games</strong>')
       
        .pauseFor(1000)
        .deleteAll()
         .typeString('Pick A <strong>Nyte</strong>!')
         .pauseFor(1000)
        .deleteAll()
        .typeString('Invite Your Friends').pauseFor(1000)
        .deleteAll()
        .typeString('Make It A<br><strong>Bored?GameNyte!</strong>').callFunction(()=> props.classChange('button'))
        .pauseFor(6000)
        .deleteAll().callFunction(()=> props.classChange('button1'))
        
        .start()
      }}
      />
  </Typography>
     

    </Box>
   );
}
 
export default Writer;