import { Box, Button } from "@mui/material"
import Caption from "../atoms/Text/Caption"
import Heading from "../atoms/Text/Heading"
import Body from "../atoms/Text/Body"
import profileImage from "@/assest/profile.jpg"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ExternalLink from "../molecules/ExternalLink"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import ScrollIndicator from "../molecules/ScrollIndicator"
import { fetchData } from "@/utils/fetchData"
import { Profile } from "@/types"
import Label from "../atoms/Button/Label"
import CVDownload from "../molecules/CVDownload"

const BASE_URL = process.env.BASE_URL as string
const HeroSection = async () => {

    const profile = await fetchData<Profile>(`${BASE_URL}/api/profile`);

    return (
        <Box sx={{ width: { xs: "100%", md: "70%" } }}>
            <Button className="animate-pulse" sx={{ marginBottom: 2, textTransform: "none", borderBottom: 1, borderColor: 'divider' }}>
                <Caption sx={{ color: profile?.working ? "red" : "success.main" }}>{profile?.working ? "Currently Employed" : "Open to Work"}</Caption>
            </Button>

            <Box display={"flex"} flexDirection={"column"} gap={2}>
                <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Box sx={{ borderRadius: '50%', width: { xs: '100px', md: '150px' }, overflow: "hidden" }}>
                        <Box component="img" src={profileImage.src} />
                    </Box>
                    <Box>
                        <Heading>Web Developer</Heading>
                        <Heading sx={{ color: "primary.main", fontStyle: "italic" }}>based in Kathmandu.</Heading>
                    </Box>
                </Box>
                <Box sx={{ marginLeft: 2, width: { xs: "100%", md: "50%" } }} marginTop={3} >
                    <Body>
                        I build web apps using React, Next.js, and Node.js. About 2 years in, still learning, always growing.
                    </Body>
                </Box>

                <Box sx={{ marginLeft: 2, flexWrap:"wrap" }} display={"flex"} gap={2}>
                    {profile?.email && (
                        <ExternalLink label={profile.email} url={`mailto:${profile.email}`} icon={<EmailOutlinedIcon sx={{ fontSize: 14 }} />} />
                    )}
                    {profile?.github && (
                        <ExternalLink label={`github/${profile.github.split('/').at(-1)}`} url={profile.github} icon={<FaGithub size={14} />} />
                    )}
                    {profile?.linkedin && (
                        <ExternalLink label={`linkedin/${profile.linkedin.split('/').at(-2)}`} url={profile.linkedin} icon={<FaLinkedin size={14} />} />
                    )}
                </Box>
                <Box marginLeft={3}>
                    <CVDownload/>
                </Box>

            </Box>

            <ScrollIndicator />
        </Box >

    )
}

export default HeroSection
