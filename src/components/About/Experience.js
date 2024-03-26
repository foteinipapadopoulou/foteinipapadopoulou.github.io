import React from 'react';
import { Row, Col } from 'react-bootstrap';
import experienceData from './experienceData'; 
function parseDetails(detail) {
    const parts = detail.split(/\[([^\]]+)\]\(([^)]+)\)/g);
    return parts.map((part, index) => {
      // URLs will be in positions that are multiples of 3 plus 2 (starting from 0)
      if ((index - 2) % 3 === 0) {
        // The part before this one is the link text
        const text = parts[index - 1];
        return (
          <a key={index} href={part} target="_blank" rel="noopener noreferrer">
            {text}
          </a>
        );
      } else if (index % 3 === 0) {
        // Regular text parts will be in positions that are multiples of 3
        return part;
      }
      // Filter out non-text parts (e.g., link texts, as they've been handled)
      return null;
    }).filter(Boolean); // Filter out null values to clean up the result
  }
  
function Experience() {
    return (
      <Row className="timeline">
        <Col xs={12}>
          {experienceData.map((exp, index) => (
            <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <img src={exp.imageUrl} alt={exp.company} className="timeline-image-exp" />
                <h5>
                  <a href={exp.url} target="_blank" rel="noopener noreferrer">
                    {exp.company}
                  </a>
                </h5>
                <span className="text-muted">{exp.period}</span>
                <p className="details"><strong>{exp.role}</strong> - {exp.location}</p>
                {exp.details.map((detail, detailIndex) => (
                 <p key={detailIndex} className="details">{parseDetails(detail)}</p>
                ))}
              </div>
            </div>
          ))}
        </Col>
      </Row>
    );
}

export default Experience;
