import { Certifications } from '@/types'
import { Box, Button } from '@mui/material'
import CardTitle from '../atoms/Text/CardTitle'
import Caption from '../atoms/Text/Caption'
import Body from '../atoms/Text/Body'

const CertificationCard = ({ certificate }: { certificate: Certifications }) => {
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", borderWidth: "1px 0", borderColor: "divider", paddingY: 4, width: "100%" }}>

            <Box sx={{ width: { xs: '90%', md: '70%' }, transition: 'translate 0.2s ease-in', '&:hover': { translate: '10px' } }}>
                {/* Title */}
                <Box>
                    <CardTitle sx={{ fontSize: '1.25rem' }} >{certificate.name}</CardTitle>
                    <Caption sx={{ color: 'primary.main' }}>Issued by: {certificate.issuer}</Caption>
                </Box>

                {/* Description */}
                {certificate.credential_id && (
                    <Box>
                        <Body>{`Credential: ${certificate.credential_id}`}</Body>
                    </Box>
                )}
            </Box>

            <Box>
                <Caption>
                    {certificate.issued_date}
                </Caption>
            </Box>
        </Box>
    )
}

export default CertificationCard;
