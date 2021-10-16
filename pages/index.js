import Header from "../components/header"
import Navbar from "../components/navbar"
import Mean from "../components/home"
import Modal from "../components/modal"
import AboutMe from "../components/aboutMe"
import Section from "../components/section"
import projects from "../project.json"
const Home = () => {
  return (
    <>
      <Header />
      <div className="home">
        <Navbar />
        <Modal id="about" idLabel="aboutLabel">
          <AboutMe />
        </Modal>
        <Mean />
      </div>
      <Section data={projects.projects} />
      <div className="text-center py-5">
        <div className="copy-right">
          © 2021 ALL RIGHT RESEVED
        </div>
      </div>
    </>
  )
}

export default Home
