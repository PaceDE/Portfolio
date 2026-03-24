"use client"
import { Box, Menu, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import Boldtext from '../atoms/Text/Boldtext';
import Topbar from '../molecules/Topbar';
import ThemeSwitch from '../molecules/ThemeSwitch';
import Sidebar from '../molecules/Sidebar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [active, setActive] = useState("");
    const router = useRouter();

    useEffect(() => {
        const hash = window.location.hash.replace("#", "");
        const sections = document.querySelectorAll("section");

        if (hash) {
            setActive(hash);
            const element = document.getElementById(hash) as HTMLElement
            window.scrollTo({ top: element.offsetTop - 250, behavior: 'smooth' })
        }

        const handleScroll = () => {
            const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 10

            let current = "";

            if (scrolledToBottom) {
                setActive('contact')
                return;
            }
            sections.forEach((section) => {
                if (window.scrollY >= section.offsetTop - 250) {
                    current = section.id;
                }
            });
            setActive(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleScrollOnClick = (id: string): void => {
        const element = document.getElementById(id) as HTMLElement
        window.scrollTo({ top: element.offsetTop - 250, behavior: 'smooth' })
        setActive(id)
        router.replace(`#${id}`, { scroll: false })
    }

    return (
        <Box sx={{
            position: "fixed", top: 0, left: 0, zIndex: 1000,
            width: "100%",
            backgroundColor: "background.default",
            display: "flex", gap: 2, alignItems: "center", justifyContent: "space-between", p: 2, border: 1, borderColor: 'divider'
        }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ display: { xs: 'block', md: 'none' }, }}>
                    <Sidebar handleClick={handleScrollOnClick} active={active} />
                </Box>
                <Box display="flex" gap={2} alignItems={"center"}>
                    <Boldtext sx={{ fontSize: { md: '1rem' } }}>Dipesh Shrestha</Boldtext>
                </Box>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
                <Topbar handleClick={handleScrollOnClick} active={active} />
            </Box>


            <Box sx={{ display: "flex", alignItems: "center" }}>
                <ThemeSwitch />
            </Box>
        </Box>
    )
}

export default Navbar