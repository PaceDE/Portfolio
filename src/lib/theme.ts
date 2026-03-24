import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
    interface TypeText {
        description: string
    }
}

const theme = createTheme({
    cssVariables: {
        colorSchemeSelector: 'class',  // ← tells MUI to use .dark class
    },
    typography: {
        fontFamily: 'var(--font-epilogue)',        // body text
        h1: { fontFamily: 'var(--font-fraunces)' }, // heading
        h2: { fontFamily: 'var(--font-fraunces)' }, // section titles
        h3: { fontFamily: 'var(--font-fraunces)' }, // card titles
        h4: { fontFamily: 'var(--font-fraunces)' }, // sub headings
        h5: { fontFamily: 'var(--font-fraunces)' }, // sub headings
        h6: { fontFamily: 'var(--font-fraunces)' }, // Bold text
        caption: { fontFamily: 'var(--font-mono)' }, // labels, dates
    },
    colorSchemes: {
        light: {
            palette: {
                primary: { main: '#8a6c4a' },              // buttons hover, links
                secondary: { main: 'rgba(138,108,74,0.07)' }, // dark
                success: { main: '#3a6a4a' },
                background: {
                    default: '#f7f5f0',  // page background
                    paper: '#ffffff',  // card, component background
                },
                text: {
                    primary: '#1a1916',  // headings, important text
                    description: '#7a7264', // body text, descriptions 
                    secondary: '#5a5248',  // labels, dates
                },
                divider: 'rgba(0,0,0,0.07)',  // borders, dividers
            },
        },
        dark: {
            palette: {
                primary: { main: '#c8b89a' },               // buttons hover, links
                secondary: { main: 'rgba(200,184,154,0.08)' }, // dark
                success: { main: '#618d6f' },
                background: {
                    default: '#0d0d0d',  // page background
                    paper: '#181818',  // card, component background
                },
                text: {
                    primary: '#e8e6df',  // headings, important text
                    description: '#7a7870', // body text, descriptions 
                    secondary: '#a09e97',  // labels, dates
                },
                divider: 'rgba(255,255,255,0.08)',  // borders, dividers
            },
        },
    },
})

export default theme