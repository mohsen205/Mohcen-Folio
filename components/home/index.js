import home from "../../styles/home.module.css"
import Image from "next/image"
import Modal from "../modal"
import { BsChatFill } from "react-icons/bs"
import Contact from "../contact"
const index = () => {
    return (
        <div className="py-5">
            <div className="container">
                <Image src="/mohcen.webp"
                    height="120" width="120"
                    placeholder="blur"
                    className="rounded-circle"
                    alt="Mohcen Dev"
                    blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAFA4PEg8NFBIQEhcVFBgeMiEeHBwePSwuJDJJQExLR0BGRVBac2JQVW1WRUZkiGVtd3uBgoFOYI2XjH2Wc36BfP/bAEMBFRcXHhoeOyEhO3xTRlN8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fP/AABEIAFIAUgMBIgACEQEDEQH/xAAYAAADAQEAAAAAAAAAAAAAAAAAAgMBBP/EABsQAQEBAQEBAQEAAAAAAAAAAAABAgMRIRIx/8QAFwEAAwEAAAAAAAAAAAAAAAAAAQIDAP/EABkRAQEBAQEBAAAAAAAAAAAAAAABEQIhQf/aAAwDAQACEQMRAD8AVlaxMC1lNS0TxgAEWw0JDSgFM1kaUlAAYGsN4zwspi0tPS00p4SsbS2jpm+tlJ6aUtpapGlhoGkrQAGgp4zxTxlicpk6SqaS0rDxPRLTaqdpjN9PlOKZStLVMqSFzFJC6Ss8B/A2gt+SWL2J6hYZDSG6vtzdKtyMS3U/RvRJfqmGVyviI4dPOI9BVMRWZZiLSJgT8hT8hgVsS3F7EthGcvRx9a7Orh7L8i5t36XN+s6X6zF+rZ4Lr5OvnHJydvJDpl8RaQmIrmJVh4DeAGNUdgNCuXq4ewC/DOLp/Rj+gL/DOvk7eQCHTOrC2QEaxgAzP//Z" />
                <div className="row">
                    <div className="col-md-8">
                        <div className={home.h1}>
                            Complete Solution for SaaS Business.
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="align-items-center d-flex h-100 justify-content-center">
                            <button type="button" className={`rounded-pill shadow text-uppercase ${home.btn}`} data-bs-toggle="modal" data-bs-target="#contact">
                                <BsChatFill className={`me-2 ${home.icons}`} /> Let&apos;s Talk Now
                            </button>
                        </div>
                        <Modal id="contact" idLabel="contactLabel">
                            <Contact />
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index
