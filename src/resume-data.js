import git from "../src/components/Skills/logos/git-logo.webp"
import html from "../src/components/Skills/logos/html-css-logo.png"
import js from "../src/components/Skills/logos/js-logo.png"
import chai from "../src/components/Skills/logos/mocha-chai-logo.png"
import node from "../src/components/Skills/logos/nodejs-logo.png"
import react from "../src/components/Skills/logos/react-logo.png"

const contactInfo = [
  {email: "williamandrewb@gmail.com",
  phone: "970-778-5061",
  github: "https://github.com/DrewBradley",
  linkedin: "https://www.linkedin.com/in/drew-bradley-46a80918b/"
  }
]

const schoolData = [
  {id: 1, 
  name: "University of Denver",
  date: "08/2008 - 06/2012",
  detail: "While attending the Lamont School of Music at the University of Denver, I studied music performance and business. This prepared me to run a private music school, as well as teach music in public schools throughout Denver."
  },
  {id: 2, name: "Turing School of Software and Design",
  date: "08/2020 - present",
  detail: "Turing School of Software and Design taught me about JavaScript, and other technologies. But more importantly it trained me how to be an empathetic and hardworking developer."
  }
]

const techData = [
  {id: 1,
  name: "JavaScript",
  img: js},
  {id: 2,
  name: "HTML/CSS",
  img: html},
  {id: 3,
  name: "React",
  img: react},
  {id: 4,
  name: "Git",
  img: git},
  {id: 5,
  name: "NodeJS",
  img: node},
  {id: 6,
  name: "Mocha & Chai",
  img: chai},
]

const projectData = [
  {id: 1,
  name: "Songwriter App",
  description: "Using vanilla javascript, this application allows users to generate a chord progression. Users can select a key and mode from the drop down menus. Users can also listen to the chords by pressing and holding the chord display. This was one of my first self-guided projects, and was completed in about 4 days.",
  deployed: "https://drewbradley.github.io/SongwriterApp/", github: "https://github.com/DrewBradley/SongwriterApp"},
  {id: 2,
  name: "My Record Shelf",
  description: "I love records, so I built this application to show my love! Using React I built this app in under 48 hours. I made calls to the Discogs API, where a catalogue of my record collect is stored, then used conditional rendering to display 50 albums at a time. This project taught me how to navigate difficult APIs and use authentication to access the data I needed.",
  deployed: "https://drewbradley.github.io/record-shelf/", github: "https://github.com/DrewBradley/record-shelf"},
  {id: 3,
  name: "Star Wars Gifs",
  description: "These are not the gifs you're looking for. Or are they? This app was built with React and pulled information from 'swapi', the Star Wars API, and the GIPHY API. I was able to explore React component lifecycles in order to render a 'gif' that relates to a given Star Wars character.",
  deployed: "https://drewbradley.github.io/star-wars-gifs/", github: "https://github.com/DrewBradley/star-wars-gifs"},
  {id: 4,
  name: "Songwriter App",
  description: "Using vanilla javascript, this application allows users to generate a chord progression. Users can select a key and mode from the drop down menus. Users can also listen to the chords by pressing and holding the chord display. This was one of my first self-guided projects, and was completed in about 4 days.",
  deployed: "https://drewbradley.github.io/SongwriterApp/", github: "https://github.com/DrewBradley/SongwriterApp"}
]

const workData = [
  {id: 1,
  name: "Turing School of Software and Design",
  date: "08/2020 - present",
  description: ""},
  {id: 2,
  name: "Avanti Music Academy",
  date: "11/2012 – 01/2020",
  description: "Instruct students in guitar, voice, piano and ukulele; Organize events and concerts; Coordinate contract teachers; Manage customer relationship via social media, email, and other sources "},
  {id: 3,
  name: "Songs for Seeds",
  date: "08/2018 – 12/2019",
  description: "Accompany an educational children’s class on keyboard, guitar and vocals. Trained in New York City at the Appleseeds Headquarters."},
  {id: 4,
  name: "Denver Language School",
  date: "05/2015 – 05/2017",
  description: "Instruct third, fourth, and fifth grade music classes and middle school choir. Programmed two concerts per semester for each class."},
  {id: 4,
  name: "SkyView Academy",
  date: "01/2015 – 05/2015",
  description: "Instruct lessons primarily in music, history, French. Long term sub for 2+ months in high school French. (Spring of 2015)"},
]

export { contactInfo, schoolData, techData, projectData, workData };