import { SxProps, Theme, Typography } from '@mui/material';
import { ReactNode } from 'react'

interface CardTitleProps {
  children: ReactNode;
  sx?: SxProps<Theme>;
}
const CardTitle = ({children,sx}:CardTitleProps) => {
  return (
    <Typography variant="h6" sx={{fontSize:"1.25rem",...sx}}>{children}</Typography>
  )
}

export default CardTitle;