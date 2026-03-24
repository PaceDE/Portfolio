import { Certifications as CertificationsType} from '@/types'
import { fetchData } from '@/utils/fetchData'
import { Box } from '@mui/material'
import SectionHeading from '../molecules/SectionHeading'
import ProjectCard from '../molecules/ProjectCard'
import CertificationCard from '../molecules/CertificationCard'

const BASE_URL = process.env.BASE_URL
const Certifications = async () => {
    const certificates = await fetchData<CertificationsType[]>(`${BASE_URL}/api/certifications`)
    return (
        <Box>
            <SectionHeading caption="06 - Certifications" title="Learning & Certifications"/>
            <Box>
                {certificates?.map((certificate, i) => (
                    <CertificationCard key={i} certificate={certificate} />
                ))}
            </Box>         
        </Box>
    )
}

export default Certifications