import { Box, Divider, Link, List, ListItem, Typography } from "@mui/material";

export default function Profile(props) {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", overflow: "scroll" }}
    >
      <Box p={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography fontSize={"1rem"}>Looking for SWE/DE positions.</Typography>
      </Box>
      <Experience />
      <Divider />
      <Education />
    </div>
  );
}

function Experience() {
  return (
    <>
      <Box p={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography fontSize={"1.2rem"}>Experience</Typography>
      </Box>
      <Divider />
      <Box p={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Link href="https://www.speedy.legal">Speedy Legal</Link>
            <Typography fontStyle={"italic"}>
              &nbsp;- Full-stack Developer
            </Typography>
          </div>
          <Typography fontSize={"0.8rem"}>2022 Nov - 2023 Dec</Typography>
        </Box>
        <List>
          <ListItem>
            Facilitated advertising/product team efforts by implementing the
            employee referral system
          </ListItem>
          <ListItem>
            Enhanced user experience by implementing audio notifications
          </ListItem>
          <ListItem>
            Developed full-stack features using AWS and React framework
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box p={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Typography>Equals</Typography>
            <Typography fontStyle={"italic"}>
              &nbsp;- Project Manager
            </Typography>
          </div>
          <Typography fontSize={"0.8rem"}>2022 Sep - 2022 Nov</Typography>
        </Box>
        <List>
          <ListItem>
            Led a team of 4 engineers to develop a mobile version of an
            educational platform
          </ListItem>
          <ListItem>
            Communicated with the client and project supervisor to resolve
            technical issues
          </ListItem>
          <ListItem>
            Successfully delivered android version of an application developed
            with React Native
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box p={1}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Link href="https://floopedu.com">Floop</Link>
            <Typography fontStyle={"italic"}>
              &nbsp;- Front-end Developer
            </Typography>
          </div>
          <Typography fontSize={"0.8rem"}>2022 Mar - 2022 Jun</Typography>
        </Box>
        <List>
          <ListItem>
            Supervised the efforts of 3 interns and helped resolve technical
            issues
          </ListItem>
          <ListItem>
            Communicated with the client to confirm design and engineering
            decisions
          </ListItem>
          <ListItem>
            Developed front-end features using React framework and Firebase
            database
          </ListItem>
        </List>
      </Box>
    </>
  );
}

function Education() {
  return (
    <>
      <Box p={4} sx={{ display: "flex", justifyContent: "center" }}>
        <Typography fontSize={"1.2rem"}>Education</Typography>
      </Box>
      <Divider />
      <Box p={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Typography>North Seattle College</Typography>
            <Typography fontStyle={"italic"}>
              &nbsp;- Application Development BAS
            </Typography>
          </div>
          <Typography fontSize={"0.8rem"}>2021 Sep - 2023 Jun</Typography>
        </Box>
        <List>
          <ListItem>Course work:</ListItem>
          <ListItem>
            <Box>
              Web Development
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Mobile Development
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Cloud Development
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Network Architecutre
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CPU
              Architecture
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Databases
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Data
              Structures & Algorithms
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Project Management
            </Box>
          </ListItem>
        </List>
      </Box>
      <Divider />
      <Box p={1}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Link href="https://tripleten.com/data-science/">tripleten</Link>
            <Typography fontStyle={"italic"}>
              &nbsp;- Data Science
            </Typography>
          </div>
          <Typography fontSize={"0.8rem"}>2021 Sep - 2023 Jun</Typography>
        </Box>
        <List>
          <ListItem>Course work:</ListItem>
          <ListItem>
            <Box>
              Probability Theory & Statistics
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Linear Algebra
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Algorithms & Numerical Methods
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Preprocessing Data
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Exploratory Data Analysis (EDA)
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Data Storage
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Time Series Analysis
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              Machine Learning
            </Box>
          </ListItem>
        </List>
      </Box>
    </>
  );
}
