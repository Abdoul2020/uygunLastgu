import React from "react"

import { NavLink } from "react-router-dom"
import FeatureLink from "./Links/Features/FeaturesLink"

const Linker = () => (
    <nav>
        <ul className="flex text-white font-helvetica tracking-wide text-base xs:text-xs sm:text-sm md:text-sm justify-between xs:px-6">
            <FeatureLink />
            <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4 "><NavLink to="" activeclassname="cursor-pointer text-orange-400" className="hoverRenk"> Kampayalar</NavLink></li>
            <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4 "><NavLink to="" activeclassname="cursor-pointer text-orange-400" className="hoverRenk"> Hakkımızda </NavLink></li>
            <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4 "><NavLink to="" activeclassname="cursor-pointer text-orange-400" className="hoverRenk">Blog</NavLink></li>
            
        </ul>
    </nav>
)
export default Linker