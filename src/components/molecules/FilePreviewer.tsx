import { Box } from '@mui/material'
import React from 'react'

const FilePreviewer = ({url}:{url:string}) => {
  return (
    <Box sx={{width:{xs:'100%', lg:'70%'}}}>
        <Box>
            <Box component="iframe" src={url}/>
        </Box>

    </Box>
  )
}

export default FilePreviewer