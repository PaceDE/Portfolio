import { Box, Button } from "@mui/material"
import Caption from "../atoms/Text/Caption"
import Heading from "../atoms/Text/Heading"
import { fetchData } from "@/utils/fetchData"
import { Profile } from "@/types"
import Body from "../atoms/Text/Body"
import profileImage from "@/assest/profile.jpg"
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ExternalLink from "../molecules/ExternalLink"
import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa";
import ScrollIndicator from "../molecules/ScrollIndicator"
import SectionHeading from "../molecules/SectionHeading"

const BASE_URL = process.env.BASE_URL as string
const GetInTouch = async () => {
    const profile = await fetchData<Profile>(`${BASE_URL}/api/profile`)

    return (
       <Box>
            <SectionHeading caption="07 - Contact" title="Get in touch"/>

            <Box display={"flex"} flexDirection={"column"} gap={2}>
            
                <Box sx={{ width: { xs: "100%", md: "50%" } }}  marginTop={3} >
                    <Body>
                       Looking for a junior role, internship, or freelance project. If you're hiring or just want to talk, feel free to reach out.
                    </Body>
                </Box>

                <Box display={"flex"} flexDirection={"column"} gap={2}>
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
            </Box>

        </Box >

    )
}

export default GetInTouch
