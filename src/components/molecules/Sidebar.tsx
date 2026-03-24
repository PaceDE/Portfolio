"use client";

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Close } from '@mui/icons-material';
import { IconButton } from '@mui/material';

const navItems = [
  { nav: "About", id: "about" },
  { nav: "Education", id: "education" },
  { nav: "Skills", id: "skill" },
  { nav: "Projects", id: "project" },
  { nav: "Experience", id: "experience" },
  { nav: "Certification", id: "certification" },
  { nav: "Contact", id: "contact" },
]

interface SidebarProps {
  handleClick:(id:string)=>void, 
  active:string
}

const Sidebar = ({handleClick, active}:SidebarProps) => {
  const [open, setOpen] = useState(false);

  const handleScrollOnClick = (id: string): void => {
    setOpen(false)
    handleClick(id);
  }

  return (
    <Box>
      <Box onClick={() => setOpen(true)} sx={{
        display: { xs: 'block', md: 'none' },
      }}>
        <MenuIcon />
      </Box>
      <Drawer
        anchor="left"
        open={open}
        aria-hidden="false"
        onClose={() => setOpen(false)}
      >
        <Box sx={{ width: 250, display: 'flex', flexDirection: 'column', p: 2 }}>
          {/* Close button at the top */}
         
          <Box sx={{ display: "flex", justifyContent: 'flex-end' }}>
            <IconButton onClick={() => setOpen(false)}>
              <Close />
            </IconButton>
          </Box>

          <List>
            {navItems.map((item) => {
              const isActive = active == item.id
              return (
                <ListItem sx={{
                  cursor: 'pointer', color: isActive ? 'primary.main' : 'text.secondary',
                  '&:hover': { color: 'text.primary', bgcolor: 'var(--bg2)', }
                }}
                  onClick={() => handleScrollOnClick(item.id)} key={item.id}>
                  <ListItemText primary={item.nav} />
                </ListItem>
              )
            })}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Sidebar;