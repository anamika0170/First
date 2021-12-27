import {AppBar, Toolbar,makeStyles} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
const useStyle = makeStyles({
    header:{
        background:"#111111"
    },
    tabs:{
        color:'#ffffff',
        textDecoration:'none',
        marginRight:30,
        fontSize:25
        
    }
})

const NavBar =()=>{
    const classes =useStyle();
    return(
        <div>
            <AppBar className={classes.header} position="static">
                <Toolbar>
                    <NavLink className={classes.tabs} to="./" exact>
                        TASK
                    </NavLink>
                    <NavLink className={classes.tabs} to="all" exact>
                        All User
                    </NavLink>
                    <NavLink className={classes.tabs} to="add" exact>
                        Add User
                    </NavLink>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default NavBar;