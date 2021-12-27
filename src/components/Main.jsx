import { Box } from "@material-ui/core";
import fourth from '../components/assets/images/fourth.jpg'
import fifth from '../components/assets/images/fifth.jpg'


const Main=()=>{
    return(
            <Box>
                <img src={fourth} height={170} width={1600}/>
                <img src={fifth} height={400} width={1600}/>
            </Box>
    )
}
export default Main;