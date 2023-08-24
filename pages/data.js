import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";

export default function Data(props) {
  return (
    <div>
      <Box p={2} sx={{display: 'flex', justifyContent: 'center'}}>
        <Typography fontSize={'1.2rem'}>
          Data Science Projects
        </Typography>
      </Box>

      {projects.map((val) => (
        <Project key={val.name} props={val} />
      ))}
    </div>
  );
}

function Project({props}) {
  return (
    <Box p={1} sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Image 
        width={360}
        height={300}
        alt={props.name}
        src={`/ds/${props.image}`}
        priority={true}
      />
      <Box>
        {props.name}
        <Button href={props.gitLink}>
          github
        </Button>
        <Button href={props.projectLink}>
          project
        </Button>
      </Box>
    </Box>
  )
}

const projects = [
  {
    "image": "nn_relation.png",
    "name": "Neural Networks Nonlinear Learning",
    "gitLink": "https://github.com/vzwork/nn_relation",
    "projectLink": "https://github.com/vzwork/nn_relation/blob/main/project.ipynb"
  },
  {
    "image": "ds_graduate.png",
    "name": "Data Science Graduate Project",
    "gitLink": "https://github.com/vzwork/ds_graduate",
    "projectLink": "https://github.com/vzwork/ds_graduate/blob/main/2abc07c5-cfb4-4fc6-9e35-21aea07c5132.ipynb"
  },
  {
    "image": "deep_image_search.png",
    "name": "Deep Image Search",
    "gitLink": "https://github.com/vzwork/deep_image_search",
    "projectLink": "https://github.com/vzwork/deep_image_search/blob/main/project_en.ipynb"
  },
  {
    "image": "age_predictor.png",
    "name": "Age Predictor",
    "gitLink": "https://github.com/vzwork/age_predictor",
    "projectLink": "https://github.com/vzwork/age_predictor/blob/main/model_training.ipynb"
  },
  {
    "image": "cv.png",
    "name": "Computer Vision",
    "gitLink": "https://github.com/vzwork/cv",
    "projectLink": "https://github.com/vzwork/cv/blob/main/project.ipynb"
  },
  {
    "image": "nlp.png",
    "name": "Natural Language Processing",
    "gitLink": "https://github.com/vzwork/nlp",
    "projectLink": "https://github.com/vzwork/nlp/blob/main/project_en.ipynb"
  },
  {
    "image": "nn.png",
    "name": "Neural Networks",
    "gitLink": "https://github.com/vzwork/neural_networks",
    "projectLink": ""
  },
  {
    "image": "num_methods.png",
    "name": "Numerical Methods",
    "gitLink": "https://github.com/vzwork/num_methods",
    "projectLink": "https://github.com/vzwork/neural_networks/blob/main/project_us.ipynb"
  },
  {
    "image": "intro_to_ml.png",
    "name": "Intro to Machine Learning",
    "gitLink": "https://github.com/vzwork/intro_to_ml",
    "projectLink": "https://github.com/vzwork/intro_to_ml/blob/main/project_en.ipynb"
  },
  {
    "image": "StatisticalAnalysis.png",
    "name": "Statistical Analysis",
    "gitLink": "https://github.com/vzwork/statistical_analysis",
    "projectLink": "https://github.com/vzwork/statistical_analysis/blob/main/project_en.ipynb"
  }
]