"use client";
import { useTheme } from "@/layout/ThemeProvider"
import { Box, Typography } from "@mui/material";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { useEffect, useState } from "react";

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme();
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    const lightMode = theme === 'light';
    
    return (
        <Box onClick={toggleTheme}
            sx={{
                display: "flex", justifyContent: "center", alignItems: "center",
                borderRadius: "50%", border: '1px solid', borderColor: 'divider', padding: 1,
                '&:hover': {
                    backgroundColor: 'var(--bg3)',
                    color: 'var(--text2)'
                }
            }}>
            {!mounted ? (
                <CircleOutlinedIcon sx={{ fontSize: 18 }} />
            ) : lightMode ? (
                <DarkModeOutlinedIcon sx={{ fontSize: 18 }} />
            ) : (
                <LightModeOutlinedIcon sx={{ fontSize: 18 }} />
            )}
        </Box>
    )
}

export default ThemeSwitch