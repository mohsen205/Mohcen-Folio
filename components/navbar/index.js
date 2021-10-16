import React, { useEffect, useState } from 'react'
import Link from "next/link"
import { RiBarChartHorizontalLine } from "react-icons/ri"
import { IoMdClose } from "react-icons/io"
import nav from "../../styles/navbar.module.css"
const Navbar = () => {
    const [onTop, setOnTop] = useState(true)
    const [isOpen, setIsOpen] = useState(false)
    useEffect(() => {
        document.addEventListener("scroll", function () {
            if (window.scrollY >= 250) {
                setOnTop(false)
            } else if (window.scrollY <= 250) {
                setOnTop(true)
            }
        })
    })
    return (
        <>
            {/* <div className={nav.overlay}
                onClick={() => setIsOpen(false)}
                style={{ zIndex: `${isOpen ? "19" : "-20"}` }}>
            </div> */}
            <div className={onTop ? `${nav.header}` : `${nav.header} position-fixed w-100 bg-white shadow-lg`}>
                <div className="container">
                    <div className="d-flex justify-content-between">
                        <div className={nav.brandName}>
                            <Link href="/">
                                <a className={`fw-bold ${nav.linkBrand}`}>Mohcen<span className="text-purple">!</span></a>
                            </Link>
                        </div>
                        <div className={nav.linkList} style={{ width: `${isOpen ? "250px" : ""}` }}>
                            <div className={`${nav.closeBtn} d-flex justify-content-end `} >
                                <button className="fs-3" onClick={() => setIsOpen(false)}>
                                    <IoMdClose />
                                </button>
                            </div>
                            <ul className="list-unstyled">
                                <li className="list-link">
                                    <Link href="/">
                                        <a className={nav.linkItem}> Home </a>
                                    </Link>
                                </li>
                                <li className="list-link">
                                    <Link href="/">
                                        <a className={nav.linkItem}> Projects </a>
                                    </Link>
                                </li>
                                <li className="list-link">
                                    <button type="button" className={nav.linkItem} data-bs-toggle="modal" data-bs-target="#about">
                                        About Me
                                    </button>
                                </li>
                                <li className="list-link">
                                    <button type="button" className={nav.linkItem} data-bs-toggle="modal" data-bs-target="#contact">
                                        Contact
                                    </button>
                                </li>

                            </ul>
                        </div>
                        <div className={nav.openBtn}>
                            <button type="button" className={nav.openBtn} onClick={() => setIsOpen(true)}>
                                <RiBarChartHorizontalLine />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
/*

*/