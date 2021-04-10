import git from "../src/components/Skills/logos/git-logo.webp"
import html from "../src/components/Skills/logos/html-css-logo.png"
import js from "../src/components/Skills/logos/js-logo.png"
import chai from "../src/components/Skills/logos/mocha-chai-logo.png"
import node from "../src/components/Skills/logos/nodejs-logo.png"
import react from "../src/components/Skills/logos/react-logo.png"
import redux from "../src/components/Skills/logos/redux-logo.png"
import cypress from "../src/components/Skills/logos/cypress-logo-.png"

const contactInfo = [
  {email: "williamandrewb@gmail.com",
  github: "https://github.com/DrewBradley",
  linkedin: "https://www.linkedin.com/in/drew-bradley/"
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
  name: "Redux",
  img: redux},
  {id: 5,
  name: "Git",
  img: git},
  {id: 6,
  name: "Node.js",
  img: node},
  {id: 7,
  name: "Mocha & Chai",
  img: chai},
  {id: 8,
  name: "Cypress.io",
  img: cypress},
]

const projectData = [
  {id: 1,
  name: "Song Starter",
  description: "Song Starter is a revamped version of the 'Songwriter App' that utilizes React as well as the TonalJS and HowlerJS library. Using a single audio asset and HowlerJS's 'sprite' function I was able to utilize midi integers to trigger the notes associated with each chord. PoetryDB returns a poem, but only displays the first four lines. Users are also able to save songs which will persist through the page being reloaded.",
  deployed: "https://song-starter.herokuapp.com/", github: "https://github.com/DrewBradley/song-starter",
  gif: "https://media.giphy.com/media/MA7imX21FSCyIuMw9j/giphy.gif"},
  {id: 2,
  name: "Songwriter App",
  description: "Using vanilla javascript, this application allows users to generate a chord progression. Users can select a key and mode from the drop down menus. Users can also listen to the chords by pressing and holding the chord display. This was one of my first self-guided projects, and was completed in about 4 days.",
  deployed: "https://drewbradley.github.io/SongwriterApp/", github: "https://github.com/DrewBradley/SongwriterApp",
  gif: "https://media.giphy.com/media/TM8frZhZYu7Is9p7JL/giphy.gif"},
  {id: 3,
  name: "Monstronomicon",
  description: "In the Monstronomicon you can search for your favorite monsters by name, or you can filter all 332 SRD monsters by challenge rating. Choose a monster and read its stats - if you like what you see, add that monster to your ongoing Encounter. This app was built in one week during mod3 at Turing to this spec. We chose to learn Redux and continue building on our knowledge of React, Cypress, and React Router. We chose the dnd5e API and focused on the monsters endpoint.",
  deployed: "https://monstronomicon.herokuapp.com/", github: "https://github.com/DrewBradley/dnd-monstronomicon",
  gif: "https://media.giphy.com/media/NCycYdDE8xBCooWJMN/giphy.gif"},
  {id: 4,
  name: "My Record Shelf",
  description: "I love records, so I built this application to show my love! Using React I built this app in under 48 hours. I made calls to the Discogs API, where a catalogue of my record collection is stored, then used conditional rendering to display 50 albums at a time. This project taught me how to navigate difficult APIs and use authentication to access the data I needed.",
  deployed: "https://drewbradley.github.io/record-shelf/", github: "https://github.com/DrewBradley/record-shelf", gif: "https://media.giphy.com/media/XfaOnpl2BNCH4EQaV7/giphy.gif"},
  {id: 5,
  name: "Stik-e-Note",
  description: "Keep track of all your thought with this simple React-based note pad app! To get a better understanding of React lifecycles, I decided to utilize localStorage to cache user's input, so that data would persist through page loads, and refreshing.",
  deployed: "https://drewbradley.github.io/stik-e-notes/", github: "https://github.com/DrewBradley/stik-e-notes", gif: "https://media.giphy.com/media/2bqZqdcbi0ku9YmMSb/giphy.gif"},
  {id: 6,
  name: "Star Wars Gifs",
  description: "These are not the gifs you're looking for. Or are they? This app was built with React and pulled information from 'swapi', the Star Wars API, and the GIPHY API. I was able to explore React component lifecycles in order to render a 'gif' that relates to a given Star Wars character.",
  deployed: "https://drewbradley.github.io/star-wars-gifs/", github: "https://github.com/DrewBradley/star-wars-gifs", gif: "https://media.giphy.com/media/oRN4jLMJjHdSt4Gc5U/giphy.gif"}
]

const workData = [
  {id: 1,
  name: "Turing School of Software and Design",
  date: "08/2020 - present",
  description: "While attending Turing School of Software and Design I designed and built dozens of application using technologies such as HTML, CSS and JavaScript.  I also used React to build a number of applications. I learned how to use these skills to better help people, and bring technology to everyone."},
  {id: 2,
  name: "Avanti Music Academy",
  date: "11/2012 – 01/2020",
  description: "Though my initial role at Avanti Music Academy was to instruct students in guitar, voice, piano and ukulele, when I became an owner and administrator, I took on many more responsibilities. These included: organizing events and concerts, coordinating contract teachers, and managing customer relationship via social media, email, and other sources."},
  {id: 3,
  name: "Songs for Seeds",
  date: "08/2018 – 12/2019",
  description: "Education takes many forms, and at Songs for Seeds, education is presented through music. I accompanied an educational children’s class on keyboard, guitar and vocals. To begin working with the program I trained in New York City at the Appleseeds Headquarters."},
  {id: 4,
  name: "Denver Language School",
  date: "05/2015 – 05/2017",
  description: "I instructed third, fourth, and fifth grade music classes and middle school choir, and programmed two concerts per semester for each class. I helped grow the music program by allowing students to have a say in the music they were learning."},
  {id: 4,
  name: "SkyView Academy",
  date: "01/2015 – 05/2015",
  description: "Instruct lessons primarily in music, history, French. I was the long term sub for 2+ months in high school French. (Spring of 2015)"},
]

const bio =
  {id: 1,
  name: "Turing School of Software and Design",
  date: "08/2020 - present",
  description: "While attending Turing School of Software and Design I designed and built dozens of application using technologies such as HTML, CSS and JavaScript.  I also used React to build a number of applications. I learned how to use these skills to better help people, and bring technology to everyone."}

export { contactInfo, schoolData, techData, projectData, workData, bio };