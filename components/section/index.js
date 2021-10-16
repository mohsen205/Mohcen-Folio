import React, { useState } from "react"
import section from "../../styles/section.module.css"
import Projects from "./projects"
const Section = ({ data }) => {
    const [resulat, setResulat] = useState(data)
    const category = (cat) => {
        const res = data.filter(d => {
            if (cat === '') {
                return d
            } else {
                return d.category === cat
            }
        }, [])
        setResulat(res)
    }
    return (
        <div className="py-3">
            <div className="container">
                <ul className="nav pt-3 pb-2">
                    <li className="nav-item">
                        <button type="button" onClick={() => category('')} className={`text-uppercase me-3 ${section.btn}`}>
                            ALL WORKS
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" onClick={() => category('ui')} className={`text-uppercase me-3 ${section.btn}`}>
                            UI DESIGN
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" onClick={() => category('app')} className={`text-uppercase me-3 ${section.btn}`}>
                            APP DEVELOPEMENT
                        </button>
                    </li>
                    <li className="nav-item">
                        <button type="button" onClick={() => category('web')} className={`text-uppercase me-3 ${section.btn}`}>
                            WEB DEVELOPEMENT
                        </button>
                    </li>
                </ul>
            </div>
            <div className="pt-5 pb-2">
                <div className="container-fluid">
                    <Projects data={resulat} />
                </div>
            </div>
        </div>
    )
}

export default Section
