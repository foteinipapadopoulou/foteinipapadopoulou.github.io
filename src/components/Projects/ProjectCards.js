import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

import { MdAttachFile } from "react-icons/md";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
        {props.description}
</Card.Text>
        {props.ghLink && (
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        )}
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
        {props.isReport && props.reportLink && (
          <Button
            variant="primary"
            href={props.reportLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <MdAttachFile /> &nbsp;
            {"Report"}
          </Button>
        )}
        {props.otherLink && (
          <Button
            variant="primary"
            href={props.otherLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {props.otherLinkText}
          </Button>
        )}
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
