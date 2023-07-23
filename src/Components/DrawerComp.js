import { List, ListItemButton, ListItemIcon, ListItemText,Drawer, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'

const DrawerComp = () => {

    const [openDrawer,setOpenDrawer] = useState(false);
    const PAGES = ["Home", "Service", "Features", "Pricing", "Contact"];


  return (
    <React.Fragment>
        <Drawer  anchor='right'  open={openDrawer} onClose={()=>setOpenDrawer(false)}>
            <List>
                {
                    PAGES.map((page,index)=>(
                        <ListItemButton key={index} onClick={()=>setOpenDrawer(false)}>
                        <ListItemIcon>
                            <ListItemText>{page}</ListItemText>
                        </ListItemIcon>
                    </ListItemButton>
                    ))
                }
            
            </List>
        </Drawer>
        <IconButton sx={{ marginLeft: "auto" }} onClick={()=>setOpenDrawer(!openDrawer)}>
           <MenuIcon/>
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp