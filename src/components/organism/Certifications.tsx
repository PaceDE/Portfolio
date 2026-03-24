import { Box } from '@mui/material'
import SectionHeading from '../molecules/SectionHeading'
import CertificationCard from '../molecules/CertificationCard'
import { getCertifications } from '@/lib/db'

const BASE_URL = process.env.BASE_URL
const Certifications = async () => {
    const certificates = await getCertifications();
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