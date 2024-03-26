import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FaUniversity } from 'react-icons/fa';
import educationData from './educationData';

function Education() {
    return (
      <Row className="timeline">
        <Col xs={12}>
          {educationData.map((edu, index) => (
            <div key={edu.id} className={`timeline-item ${index % 2 === 0 ? 'timeline-left' : 'timeline-right'}`}>
              <div className="timeline-dot"></div>
              <div className="timeline-content">
              
              <img src={edu.imageUrl} alt={edu.institution} className="timeline-image" />
                <h5>
                  <a href={edu.url} target="_blank" rel="noopener noreferrer">
                    {edu.institution}
                  </a>
                </h5>
                <span className="text-muted"> {edu.period}</span>
                <p><FaUniversity className="me-2" />{edu.degree}</p>
               {/* Map through the details array and render each detail */}
              {edu.details.map((detail, detailIndex) => (
                <p key={detailIndex} className="details">{detail}</p>
              ))}
              </div>
            </div>
          ))}
        </Col>
      </Row>
    );
  }
  

export default Education;
