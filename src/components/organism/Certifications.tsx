import { Box } from '@mui/material'
import SectionHeading from '../molecules/SectionHeading'
import CertificationCard from '../molecules/CertificationCard'
import { fetchData } from '@/utils/fetchData'
import { Certifications as CertificationType } from '@/types'

const BASE_URL = process.env.BASE_URL
const Certifications = async () => {
    const certificates = await fetchData<CertificationType[]>(`${BASE_URL}/api/certifications`);
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