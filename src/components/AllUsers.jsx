import { Table, TableBody, TableCell, TableHead, TableRow , makeStyles, Button,Box} from "@material-ui/core";
import { useEffect, useState } from "react";
import { getUsers,deleteUser } from "../Service/api";
import { Link } from "react-router-dom";
import six from '../components/assets/images/six.jpg';
import h1 from '../components/assets/images/h1.jpg';
import seven from '../components/assets/images/seven.jpeg';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
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
        backgroundImage: `url(${seven})`,
        height:"700px"
     },
    table:{
        width:"90%",
        margin:'50px 0 0 50px',
        backgroundImage: `url(${six})`,
        color:'white'
        
    },
    thead:{
        '& > *':{
            background:"#000000",
            color:'#ffffff',
            fontSize:"20px"
        }
    },
    row:{
        '& > *':{
           
            fontSize:20,
            color:'white'
        }
    }
})
const AllUsers=()=>{
const [users,setUsers]=useState([]);
const classes=useStyle();
    useEffect(()=>{
        getAllUsers();
    },[])

    const getAllUsers =async()=>{
    const response=  await  getUsers();
    console.log(response.data);
    setUsers(response.data);
    }

const deleteUserData=async(id)=>{
    await deleteUser(id);
    getAllUsers();
}

    return(
        <Box className={classes.body}>
            <h1 className={classes.head}>ALL Users</h1>
       <Table className={classes.table}>
           <TableHead>
               <TableRow className={classes.thead}>
                   <TableCell>
                       Id
                   </TableCell>
                   <TableCell>
                       Name
                   </TableCell>
                   <TableCell>
                       UserName
                   </TableCell>
                   <TableCell>
                       Email
                   </TableCell>
                   <TableCell>
                       Phone
                   </TableCell>
                   <TableCell>
                       Update
                   </TableCell>
                   <TableCell>
                       Delete
                   </TableCell>
               </TableRow>
           </TableHead>
           <TableBody>
              {
                  users.map(user=>(
                      <TableRow className={classes.row} key={user._id}>
                          <TableCell>{user._id}</TableCell>
                          <TableCell>
                              {user.name}
                          </TableCell>
                          <TableCell>
                              {user.username}
                          </TableCell>
                          <TableCell>
                              {user.email}
                          </TableCell>
                          <TableCell>
                              {user.phone}
                          </TableCell>
                          <TableCell>
                              <Button variant="contained" color="primary" component={Link} to={`/edit/${user._id}`}><EditIcon/> Edit</Button>
                          </TableCell>
                          <TableCell>
                          <Button variant="contained" color="secondary" onClick={()=>deleteUserData(user._id)}><DeleteForeverIcon/> Delete</Button>
                          </TableCell>
                      </TableRow>
                  ))
              }
           </TableBody>
       </Table>
       </Box>
    );
}
export default AllUsers;