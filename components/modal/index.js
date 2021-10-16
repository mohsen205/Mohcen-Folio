import Link from "next/link"
import { IoMdClose } from "react-icons/io"
const Modal = ({ id, idLabel, children }) => {
    return (
        <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby={idLabel} aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="nav py-3">
                        <div className="container">
                            <div className="d-flex justify-content-between">
                                <div className="">
                                    <Link href="/">
                                        <a className="fw-bold">Mohcen<span className="text-purple">!</span></a>
                                    </Link>
                                </div>
                                <div className="">
                                    <button type="button" className="fs-4 pr-9" data-bs-dismiss="modal" aria-label="Close">
                                        <IoMdClose />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal-body">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
