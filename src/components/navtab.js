import React from 'react'

function NavTab() {
    return (
        <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item"> <a className="nav-link active" data-bs-toggle="tab" href="#home" role="tab"><span className="hidden-sm-up" /> <span className="hidden-xs-down">Tab1</span></a> </li>
                                        <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#profile" role="tab"><span className="hidden-sm-up" /> <span className="hidden-xs-down">Tab2</span></a> </li>
                                        <li className="nav-item"> <a className="nav-link" data-bs-toggle="tab" href="#messages" role="tab"><span className="hidden-sm-up" /> <span className="hidden-xs-down">Tab3</span></a> </li>
                                    </ul>
    )
}

export default NavTab
