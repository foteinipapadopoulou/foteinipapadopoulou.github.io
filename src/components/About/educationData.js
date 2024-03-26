import auebImg from '../../Assets/aueb.png';
import radImg from '../../Assets/radboud.png';

const educationData = [
  {
    id: 1,
    institution: "Radboud University",
    location: "Nijmegen, Netherlands",
    degree: "MSc in Artificial Intelligence",
    period: "09/2023 - Ongoing",
    details: [
      "2-year degree, 120 ECTS",
      "Track: Intelligent Technology",
      "Major in Interactive Agents"
    ],
    url: "https://www.ru.nl/english/",
    imageUrl: radImg,
  },
  {
    id: 2,
    institution: "Athens University of Economics and Business",
    location: "Athens, Greece",
    degree: "BSc in Computer Science",
    period: "09/2016 - 09/2021",
    details: [
      "4-year degree, 240 ECTS",
      "Grade: 7.5/10 “Very Good”",
      "Major in Information Systems and Information Security and Databases and Knowledge Management",
      "Indicative courses: Algorithms, Distributed Systems, Artificial Intelligence"
    ],
    url: "https://www.aueb.gr/en",
    imageUrl: auebImg,
  },
  {
    id: 3,
    institution: "Athens University of Economics and Business",
    location: "Athens, Greece",
    degree: "Licentiate Degree in Teacher Education Program",
    period: "09/2020 - 09/2021",
    details: [
      "1-year degree, 60 ECTS",
      "Indicative courses: Quality management in Education, Evolutionary Psychology",
      "Teaching Informatics courses in several Public High Schools in Greece."
    ],
    imageUrl: auebImg,
    url: "https://www.aueb.gr/en",
  }
];
export default educationData;