import { Avatar, Button, Card, CardContent, Typography } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { Box, Container } from '@mui/system'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Vlad() {
  return (
    <Container sx={{ fontFamily: 'Comfortaa' }}>
      <Card sx={{ margin: '1rem 0' }}>
        <Grid container>
          <Grid item xs={12} md={6}>
            <CardContent sx={{ display: 'flex' }}>
              <Avatar
                alt="Vladislav Zakharov"
                src="/Vlad.jpeg"
                sx={{ width: 100, height: 100, border: 'solid 2px black' }}
              />
              <Box
                sx={{
                  marginLeft: '1rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <h2>Vladislav Zakharov</h2>
                <p>Software Developer</p>
                <Box>
                  <Button
                    variant="outlined"
                    size="small"
                    href="https://github.com/vzwork"
                    sx={{ marginRight: '1rem' }}
                  >
                    <GitHubIcon />
                  </Button>
                  <Button
                    variant="outlined"
                    size="small"
                    href="https://linkedin.com/in/vzwork"
                  >
                    <LinkedInIcon />
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Grid>
          <Grid item xs={12} md={6}>
            <CardContent>
              <h2>What describes me:</h2>
              <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem' }}>
                <li>Problem oriented focus</li>
                <li>Strong organizational skills</li>
                <li>Rapid development</li>
              </ul>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Container>
  )
}
