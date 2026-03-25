import { Box } from "@mui/material"
import Body from "../atoms/Text/Body"
import SectionHeading from "../molecules/SectionHeading"
import { fetchData } from "@/utils/fetchData"
import { Profile } from "@/types"

const BASE_URL = process.env.BASE_URL as string
const AboutMe = async () => {
    const profile = await fetchData<Profile>(`${BASE_URL}/api/profile`);
    return (
        <Box>
            <SectionHeading caption="01 - About Me" title="Who am I"/>
            <Box>
                {profile?.bio.split('\n').map((line, i) => (  
                    <Body key={i}>
                        {line}
                        <br/>
                    </Body>
                ))}           
            </Box>
        </Box>
    )
}

export default AboutMe
