import React from 'react'

function Messages() {
    return (
        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle waves-effect waves-dark" href="#" id={2} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="font-24 mdi mdi-comment-processing" />
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end mailbox animated bounceInDown" aria-labelledby={2}>
                            <ul className="list-style-none">
                                <li>
                                    <div >
                                        {/* Message */}
                                        <a href={void (0)} className="link border-top">
                                            <div className="d-flex no-block align-items-center p-10">
                                                <span className="btn btn-success btn-circle"><i className="ti-calendar" /></span>
                                                <div className="ms-2">
                                                    <h5 className="mb-0">Event today</h5>
                                                    <span className="mail-desc">Just a reminder that event</span>
                                                </div>
                                            </div>
                                        </a>
                                        {/* Message */}
                                        <a href={void (0)} className="link border-top">
                                            <div className="d-flex no-block align-items-center p-10">
                                                <span className="btn btn-info btn-circle"><i className="ti-settings" /></span>
                                                <div className="ms-2">
                                                    <h5 className="mb-0">Settings</h5>
                                                    <span className="mail-desc">You can customize this template</span>
                                                </div>
                                            </div>
                                        </a>
                                        {/* Message */}
                                        <a href={void (0)} className="link border-top">
                                            <div className="d-flex no-block align-items-center p-10">
                                                <span className="btn btn-primary btn-circle"><i className="ti-user" /></span>
                                                <div className="ms-2">
                                                    <h5 className="mb-0">Pavan kumar</h5>
                                                    <span className="mail-desc">Just see the my admin!</span>
                                                </div>
                                            </div>
                                        </a>
                                        {/* Message */}
                                        <a href={void (0)} className="link border-top">
                                            <div className="d-flex no-block align-items-center p-10">
                                                <span className="btn btn-danger btn-circle"><i className="fa fa-link" /></span>
                                                <div className="ms-2">
                                                    <h5 className="mb-0">Luanch Admin</h5>
                                                    <span className="mail-desc">Just see the my new admin!</span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </ul>
                    </li>
    )
}

export default Messages
