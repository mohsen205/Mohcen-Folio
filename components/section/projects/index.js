import Project from "./project"
const index = ({ data }) => {
    console.log(data)
    return (
        <div className="row">
            {
                data.map(d => {
                    return (
                        <Project key={d.id}
                            id={d.id}
                            title={d.title}
                            image={d.image}
                            category={d.category}
                            url={d.url} />
                    )
                })
            }
        </div>
    )
}

export default index
