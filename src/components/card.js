import React from 'react'

function Card() {
    return (
        <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Chat Option</h4>
                                        <div className="chat-box scrollable" style={{ height: 475 }}>
                                            {/*chat Row */}
                                            <ul className="chat-list">
                                                {/*chat Row */}
                                                <li className="chat-item">
                                                    <div className="chat-img"><img src="../../assets/images/users/1.jpg" alt="user" />
                                                    </div>
                                                    <div className="chat-content">
                                                        <h6 className="font-medium">James Anderson</h6>
                                                        <div className="box bg-light-info">Lorem Ipsum is simply dummy text of the
                                                            printing &amp; type setting industry.</div>
                                                    </div>
                                                    <div className="chat-time">10:56 am</div>
                                                </li>
                                                {/*chat Row */}
                                                <li className="chat-item">
                                                    <div className="chat-img"><img src="../../assets/images/users/2.jpg" alt="user" />
                                                    </div>
                                                    <div className="chat-content">
                                                        <h6 className="font-medium">Bianca Doe</h6>
                                                        <div className="box bg-light-info">It’s Great opportunity to work.</div>
                                                    </div>
                                                    <div className="chat-time">10:57 am</div>
                                                </li>
                                                {/*chat Row */}
                                                <li className="odd chat-item">
                                                    <div className="chat-content">
                                                        <div className="box bg-light-inverse">I would love to join the team.</div>
                                                        <br />
                                                    </div>
                                                </li>
                                                {/*chat Row */}
                                                <li className="odd chat-item">
                                                    <div className="chat-content">
                                                        <div className="box bg-light-inverse">Whats budget of the new project.</div>
                                                        <br />
                                                    </div>
                                                    <div className="chat-time">10:59 am</div>
                                                </li>
                                                {/*chat Row */}
                                                <li className="chat-item">
                                                    <div className="chat-img"><img src="../../assets/images/users/3.jpg" alt="user" />
                                                    </div>
                                                    <div className="chat-content">
                                                        <h6 className="font-medium">Angelina Rhodes</h6>
                                                        <div className="box bg-light-info">Well we have good budget for the project
                                                        </div>
                                                    </div>
                                                    <div className="chat-time">11:00 am</div>
                                                </li>
                                                {/*chat Row */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="card-body border-top">
                                        <div className="row">
                                            <div className="col-9">
                                                <div className="input-field mt-0 mb-0">
                                                    <textarea id="textarea1" placeholder="Type and enter" className="form-control border-0" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="col-3">
                                                <a className="btn-circle btn-lg btn-cyan float-end text-white" href={void (0)}><i className="fas fa-paper-plane" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
    )
}

export default Card
