import section from "../../../../styles/project.module.css"
import PropTypes from 'prop-types'
import Link from "next/link"

const index = ({ id, title, image, category, url }) => {
    return (
        <div className="col-md-4">
            <div className="d-flex justify-content-center">
                <div className={` mt-3 ${section.container}`} style={{ backgroundImage: `url(${image})` }}>
                    <div className={section.overlay}>
                        <div className={section.text}>
                            <p className="text-uppercase">
                                {category}
                            </p>
                            <div className="h4">
                                <a href="#" className={`text-capitalize ${section.href}`}>{title}</a>
                                {/* <Link href={`/details/${id}`}>
                                
                            </Link> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

index.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}

export default index
//{/* <Image src={image} layout="fill" alt={id} placeholder="empty" className="img-fluid" /> */}