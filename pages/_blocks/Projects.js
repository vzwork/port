import React from 'react'
import { Container } from '@mui/system'
import Grid from '@mui/material/Unstable_Grid2'
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Link,
  Paper,
} from '@mui/material'

const projects = [
  {
    name: 'indepth',
    img: '/Indepth.png',
    href: 'https://www.indepth.social/',
    about: 'Project in works...',
    lessons: ['NextJS + AWS', 'ChatGPT generated content', 'TreeX rework'],
  },
  {
    name: 'poll app',
    img: '/pollapp.png',
    href: 'http://easily-poll-students.s3-website-us-west-2.amazonaws.com/',
    about: 'Back-end engineer',
    lessons: ['AWS backend', 'custom authentication flow', 'GraphQL'],
  },
  {
    name: 'Speedy Legal',
    img: '/speedylegal.png',
    href: 'https://www.speedy.legal/',
    about: 'Intern at a startup',
    lessons: ['Teamwork', 'AWS (Amplify, GraphQL, DynamoDB)', 'Figma'],
  },
  {
    name: 'Style Home Design',
    img: '/stylehomedesign.png',
    href: 'https://style-home-design.web.app/',
    about: 'Contract website',
    lessons: ['Feature management', 'TypeScript', 'PDF file management'],
  },
  {
    name: 'TreeX',
    img: '/treex.png',
    href: 'https://tree-x.web.app/#/tree',
    about: 'Educational project',
    lessons: ['NoSQL management/optimization', 'Firebase', 'React'],
  },
  {
    name: 'Floop',
    img: '/Floop.png',
    href: 'https://floopedu.com/',
    about: 'Front-end Intern',
    lessons: ['React', 'Firebase', 'Teamwork'],
  },
]

export default function Projects() {
  return (
    <Container sx={{ fontFamily: 'Comfortaa' }}>
      <Grid container spacing={2}>
        {projects.map((project, idx) => (
          <Grid item xs={12} md={6} lg={4} key={idx}>
            <Card>
              <CardMedia
                sx={{ height: 240 }}
                image={project.img}
                title={project.name}
              >
                <Button
                  href={project.href}
                  sx={{
                    background: 'rgba(255, 255, 255, 0.8)',
                    width: '100%',
                    height: '100%',
                    transition: 'ease-in-out 0.5s',
                    borderRadius: '0',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.2)',
                      color: 'rgba(0, 0, 0, 0)',
                    },
                    color: 'black',
                    fontFamily: 'Comfortaa',
                    fontSize: '1.6rem',
                  }}
                >
                  {project.name}
                </Button>
              </CardMedia>
              <CardContent>
                <p style={{ textAlign: 'center', margin: '1rem' }}>
                  {project.about}
                </p>
                <ul style={{ paddingLeft: '1.2rem' }}>
                  {project.lessons.map((lesson, idx) => (
                    <li key={idx}>{lesson}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
