import PropTypes from 'prop-types'

const Error = ({ error }) => {
    return (
        <div className="text-danger" style={{ fontSize: "15px" }}>
            {error}
        </div>
    )
}

Error.propTypes = {
    error: PropTypes.string
}

export default Error

