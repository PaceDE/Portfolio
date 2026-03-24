'use client';
import { Box } from '@mui/material'
import Navbutton from '../atoms/Button/Navbutton'
import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

const navItems = [
  { nav: "About", id: "about" },
  { nav: "Education", id: "education" },
  { nav: "Skills", id: "skill" },
  { nav: "Projects", id: "project" },
  { nav: "Experience", id: "experience" },
  { nav: "Certification", id: "certification" },
  { nav: "Contact", id: "contact" },
]

interface TopbarProps {
  handleClick:(id:string)=>void, 
  active:string
}

const Topbar = ({handleClick, active}:TopbarProps) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: "center", justifyContent: "center" }}>
      {navItems.map(navItem => (
        <Box key={navItem.id} onClick={() => handleClick(navItem.id)}>
          <Navbutton active={active === navItem.id}>{navItem.nav}</Navbutton>
        </Box>
      ))}
    </Box>
  )
}

export default Topbar
