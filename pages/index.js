import Header from "../components/header"
import Navbar from "../components/navbar"
import Mean from "../components/home"
import Modal from "../components/modal"
import AboutMe from "../components/aboutMe"
import Section from "../components/section"
const Home = ({ projects }) => {
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

export async function getStaticProps() {
  const response = await fetch("http://localhost:3000/api")
  const data = await response.json()
  return {
    props: {
      projects: data
    }
  }
}