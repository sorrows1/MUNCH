import { Container, Grid } from '@mui/material'


const Section = ({children}) => {
    return (
        <section>
            <Grid display='grid' gridTemplateColumns='1fr min(1350px, 100% - 100px) 1fr' columnGap={5} sx={{mt: 6}}>
                <Container maxWidth='mx' disableGutters sx={{gridColumn: '2 / auto'}}>
                    {children}
                </Container>
            </Grid>
        </section>
    )
}

export default Section