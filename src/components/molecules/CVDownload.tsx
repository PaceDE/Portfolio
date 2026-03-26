"use client";
import { Box, Button, Modal } from '@mui/material'
import React, { useState } from 'react'
import Label from '../atoms/Button/Label'
import FilePreviewer from './FilePreviewer';

const CVDownload = () => {
    const [open, setOpen] = useState(false);
    return (
        <Box display="flex" gap={2}>
            <Box
                component="a"
                download
                href={"/Dipesh_CV.pdf"}
                sx={{'&:hover':{backgroundColor:'transparent'}}}
            >
                <Label sx={{ fontSize: '0.8rem' }}>
                    Download My CV
                </Label>
            </Box>
            <Box onClick={() => setOpen(true)}>
                <Label>
                    Preview My CV
                </Label>
            </Box>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={{
                    position: "absolute", top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "90vw", maxWidth: { xs: '90%', sm: '80%', md: '50%' },
                    bgcolor: "#fff", boxShadow: 24,
                    p: 2, borderRadius: 2
                }}>

                    <Box component="iframe" src="/Dipesh_CV.pdf" sx={{ width: "100%", height: "80vh", border: "none" }} />
                </Box>
            </Modal>
        </Box>
    )
}

export default CVDownload
