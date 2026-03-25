import { Box, Divider } from "@mui/material"
import Navbar from "../organism/Navbar"
import HeroSection from "../organism/HeroSection"
import AboutMe from "../organism/AboutMe"
import Education from "../organism/Education"
import Skills from "../organism/Skills"
import Projects from "../organism/Projects"
import Experience from "../organism/Experience"
import Certifications from "../organism/Certifications"
import GetInTouch from "../organism/GetInTouch"

const sections = [
  {component: <AboutMe/>, id:"about"},
  {component: <Education />,id:"education"},
  {component: <Skills />,id:"skill"},
  {component: <Projects />,id:"project"},
  {component: <Experience />,id:"experience"},
  {component: <Certifications />,id:"certification"},
  {component: <GetInTouch />,id:"contact"}
]

const PortfolioTemplate = () => {
  return (
    <Box padding={4}>
      <Box sx={{ marginBottom: 10 }}>
        <Navbar />
      </Box>

      <Box sx={{ display: "flex", flexDirection:"column", alignItems:"center", gap: 10, marginBottom: 15 }}>
        <HeroSection />
        <Divider />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 10, alignItems: 'center', justifyContent: "center" }}>
        {sections.map((section) => (
          <Box component="section" key={section.id}  id={section.id} sx={{ width: { xs: "100%", md: "70%" } }}>
            {section.component}
          </Box>

        ))}
      </Box>

      <Divider sx={{marginTop:2}}/>
    </Box>
  )
}

export default PortfolioTemplate