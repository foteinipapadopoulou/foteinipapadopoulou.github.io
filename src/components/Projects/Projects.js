import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import poster from "../../Assets/poster.png";
import twodoku from "../../Assets/twodoku.png";
import WER_whisper from "../../Assets/WER_whisper.png";
import alzheimers from "../../Assets/alzheimers.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          You can find some of my recents projects from my Master's degree in AI. More projects on my <a href="https://github.com/foteinipapadopoulou/">Github</a> profile.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poster}
              isBlog={false}
              isReport={true}
              title="Unveiling Sentiments and Topics in COVID-19 Vaccine Comments on YouTube Over Time: from the First Vaccine Approval to the Post-Pandemic Era"
              description="My research project in the context of the Text and Multimedia Mining course 
              at Radboud University. The project was presented as poster in the CLIN34 (the 34th Meeting of Computational Linguistics in The Netherlands)."
              ghLink="https://github.com/foteinipapadopoulou/COVIDVaccinesYouTubeNLP"
              reportLink="https://github.com/foteinipapadopoulou/COVIDVaccinesYouTubeNLP/blob/main/s1122141_txmm2023.pdf"
              otherLink="https://clin34.leidenuniv.nl/abstracts/unveiling-sentiments-and-topics-in-covid-19-vaccine-comments-on-youtube-over-time-from-the-first-vaccine-approval-to-the-post-pandemic-era/"
              otherLinkText="CLIN34"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={twodoku}
              isBlog={false}
              isReport={true}
              title="Twodoku solver with GA"
              description="A genetic algorithm was developed to solve a more complex version of Sudoku, Twodoku,
by utilizing two variants of existing genetic algorithms that solve the conventional Sudoku."
              ghLink="https://github.com/foteinipapadopoulou/Twodoku_solver_GA"
              reportLink="https://github.com/foteinipapadopoulou/Twodoku_solver_GA/blob/master/report.pdf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={WER_whisper}
              isBlog={false}
              isReport={true}
              title="Exploring Nationality and Gender Biases in Transformer-Based End-to-End ASR Systems"
              description="The nationality and gender biases were examined across four transformer-based ASR
models using the Speech Accent Archive dataset which contains recordings and demographic data
from individuals around the world."
              ghLink="https://github.com/foteinipapadopoulou/ASR-bias"
              reportLink="https://drive.google.com/file/d/19OZhH3T0Rq5m29HqkwJEXkAtBpgAiL22/view?usp=sharing"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://production-media.paperswithcode.com/datasets/Screenshot_2021-01-11_at_12.38.20.png"
              isBlog={false}
              isReport={true}
              title="Exploring First-Stage IR Approaches on the CORD-19 dataset"
              description="Our project is motivated by the Information Retrieval community's interest in aiding healthcare professionals and focuses on building a first-stage retrieval system using the CORD-19 dataset. We apply traditional retrieval models(TF-IDF, BM25, Language Model with Dirichlet smoothing) and a neural IR model (Deep Impact) to experiment with different variants of topics."
              ghLink="https://github.com/foteinipapadopoulou/CORD-19-IR-project/"
              reportLink="https://github.com/foteinipapadopoulou/CORD-19-IR-project/blob/main/report.pdf"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={alzheimers}
              isBlog={false}
              isReport={true}
              title="A Systematic Review of Speech-Based Models for Multi-Class Severity Classification in Alzheimer's Disease"
              description="This project has examined the recent studies that explore
speech-based models related to AD classification for the dif-
ferent severity levels showcasing the progression in this field,
the performance of these models, the datasets, metrics, and the
emerging challenges."
              reportLink="https://drive.google.com/file/d/1LQ3uHpCHR0wjnD3TZQHD01qwAOA5oeRG/view?usp=sharing"
            />
          </Col>
        </Row>

        {/* <h1 className="project-heading">
          My <strong className="purple">Publications </strong>
        </h1>
        <p style={{ color: "white" }}>
         Soon to be uploaded...
          </p> */}
      </Container>
    </Container>
  );
}

export default Projects;
