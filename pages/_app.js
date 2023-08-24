import "../styles/globals.css";
import Head from 'next/head'
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function MyApp({ Component, pageProps }) {
  return (
    <Box sx={{ position: "fixed", width: "100vw", height: "100vh" }}>
      <Head>
        <title>vzwork</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container sx={{ height: "100%" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }} p={2}>
          <Typography>Vladislav Zakharov</Typography>
          <Box>
            <Button
              variant="outlined"
              size="small"
              href="https://github.com/vzwork"
              sx={{ marginRight: "1rem" }}
            >
              <GitHubIcon />
            </Button>
            <Button
              variant="outlined"
              size="small"
              href="https://linkedin.com/in/vzwork"
              sx={{ marginRight: "1rem" }}
            >
              <LinkedInIcon />
            </Button>
            <Button
              variant="outlined"
              size="small"
              href="mailto:vladislav.zakharov.work@gmail.com"
            >
              <MailOutlineIcon />
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ height: "calc(100% - 5rem)", display: "flex" }}>
          <Box
            p={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              textAlign: "right",
            }}
          >
            <Link href="/">
              <Button>profile</Button>
            </Link>
            {/* <Link href="/locus">
              <Button>locus</Button>
            </Link> */}
            <Link href="/data">
              <Button>data</Button>
            </Link>
            <Link href="/vladislav_zakharov_resume.pdf">
              <Button>resume</Button>
            </Link>
          </Box>
          <Divider orientation="vertical" flexItem />
          <Box p={1} sx={{ overflowY: "scroll", width: "100%" }}>
            <Component {...pageProps} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
