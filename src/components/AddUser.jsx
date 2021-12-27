import { Button, FormControl, FormGroup, Input, InputLabel ,makeStyles, Typography,Box} from "@material-ui/core";
import { useState } from "react";
import { addUser } from "../Service/api";
import ten from '../components/assets/images/ten.jpg'
import s2 from '../components/assets/images/s2.jpg';
import ex from '../components/assets/images/ex.jpg';
import h1 from '../components/assets/images/h1.jpg';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

const useStyle=makeStyles({
    head:{
       color:"#ffffff",
       backgroundImage: `url(${h1})`,
       height:"60px",
       backgroundRepeat:"no-repeat",
       backgroundSize:"fixed",
       textAlign:"center",
       width:'500px',
        margin:'0 auto' 
    },
    body:{
        backgroundImage: `url(${ex})`,
        height:"650px",
        backgroundSize:'fixed',
        
    },
      container:{
          width:"900px",
          height:"400px",
          margin:"5% 0 0 18%",
          borderRadius:'25px',
          backgroundImage: `url(${s2})`,
          '& > *':{
              marginTop:20
          }
      }  
})

const initialValues={
    name:"",
    username:'',
    email:'',
    phone:''
}

const AddUser=()=>{

    const [user, setUser] =useState(initialValues);
    const {name,username,email,phone}=user;
    const classes=useStyle();

    
    


const onValueChange=(e)=>{
     setUser({...user,[e.target.name]:e.target.value})
    console.log(user);

}

const addUserDetails=async()=>{
    await addUser(user);
    
    
}

    return(
        <Box className={classes.body}>
            <h1 className={classes.head}><PersonAddIcon/>Add User</h1>
       <FormGroup className={classes.container}> 
       
           <FormControl>
               <InputLabel>Name</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name="name" value={name}/>
           </FormControl>
           <FormControl>
               <InputLabel>UserName</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name="username" value={username}/>
           </FormControl>
           <FormControl>
               <InputLabel>Email</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name="email" value={email}/>
           </FormControl>
           <FormControl>
               <InputLabel>Phone</InputLabel>
               <Input onChange={(e)=>onValueChange(e)} name="phone" value={phone}/>
           </FormControl>
           <Button variant="contained" color="primary" onClick={()=>addUserDetails()} value={name}> Add User <PersonAddAltIcon/></Button>
       </FormGroup>
       </Box>
    )
}
export default AddUser;