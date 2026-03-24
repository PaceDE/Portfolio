"use client";
import { useState, useEffect } from "react"
import { Box } from "@mui/material"
import Caption from "../atoms/Text/Caption"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import "../../../app/globals.css"


const ScrollIndicator = () => {
    const [visible, setVisible] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY < 1)
        }
        document.addEventListener("scroll", handleScroll)
        return () => document.removeEventListener("scroll", handleScroll)

    }, [])

    if (!visible) return null

    return (
        <Box className="scroll-dot" sx={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Box>
                <Box sx={{
                    height: 80, width: 40, paddingTop: "10px",
                    border: "1px solid", borderColor: "divider", borderRadius: 5,
                    display: "flex", justifyContent: "center",
                }}>
                    <Box  sx={{ width: 6, height: 12, borderRadius: 3, backgroundColor: "var(--bg3)", }} />
                </Box>
                <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
                    <KeyboardArrowDownIcon sx={{ color: "text.primary", opacity: 0.55 }} />
                    <Caption>Scroll</Caption>
                </Box>
            </Box>
        </Box>
    )
}
export default ScrollIndicator