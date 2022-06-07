import { Container, Grid } from '@mui/material'


const Section = ({children, sx}) => {
    return (
        <section>
            <Grid display='grid' gridTemplateColumns='1fr min(1350px, 100% - 100px) 1fr' columnGap={5} sx={{...sx}}>
                <Container maxWidth='mx' disableGutters sx={{gridColumn: '2 / auto'}}>
                    {children}
                </Container>
            </Grid>
        </section>
    )
}

export default Section