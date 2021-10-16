import projects from "../../project.json"
const index = (req, res) => {
    res.status(200).json(projects)
}

export default index
