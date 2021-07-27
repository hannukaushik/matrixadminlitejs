import React from 'react'
import Comment from './comment'
function Column() {
    return (
        <div className="col-lg-6">
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Latest Posts</h4>
                                    </div>
                                    <Comment/>
                                </div>
                                {/* Card */}
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">To Do List</h4>
                                        <div className="todo-widget scrollable" style={{ height: 450 }}>
                                            <ul className="list-task todo-list list-group mb-0" data-role="tasklist">
                                                <li className="list-group-item todo-item" data-role="task">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck" />
                                                        <label className="form-check-label w-100 mb-0 todo-label" htmlFor="customCheck">
                                                            <span className="todo-desc fw-normal">Lorem Ipsum is simply dummy text of the
                                                                printing and typesetting industry.</span> <span className="badge rounded-pill bg-danger float-end">Today</span>
                                                        </label>
                                                    </div>
                                                    <ul className="list-style-none assignedto">
                                                        <li className="assignee"><img className="rounded-circle" width={40} src="../../assets/images/users/1.jpg" alt="user" data-toggle="tooltip" data-placement="top" data-original-title="Steave" /></li>
                                                        <li className="assignee"><img className="rounded-circle" width={40} src="../../assets/images/users/2.jpg" alt="user" data-toggle="tooltip" data-placement="top" data-original-title="Jessica" /></li>
                                                        <li className="assignee"><img className="rounded-circle" width={40} src="../../assets/images/users/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" data-original-title="Priyanka" /></li>
                                                        <li className="assignee"><img className="rounded-circle" width={40} src="../../assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" data-original-title="Selina" /></li>
                                                    </ul>
                                                </li>
                                                <li className="list-group-item todo-item" data-role="task">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                        <label className="form-check-label w-100 mb-0 todo-label" htmlFor="customCheck1">
                                                            <span className="todo-desc fw-normal">Lorem Ipsum is simply dummy text of the
                                                                printing</span><span className="badge rounded-pill bg-primary float-end">1 week
                                                            </span>
                                                        </label>
                                                    </div>
                                                    <div className="item-date"> 26 jun 2021</div>
                                                </li>
                                                <li className="list-group-item todo-item" data-role="task">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                        <label className="form-check-label w-100 mb-0 todo-label" htmlFor="customCheck2">
                                                            <span className="todo-desc fw-normal">Give Purchase report to</span> <span className="badge rounded-pill bg-info float-end">Yesterday</span>
                                                        </label>
                                                    </div>
                                                    <ul className="list-style-none assignedto">
                                                        <li className="assignee"><img className="rounded-circle" width={40} src="../../assets/images/users/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" data-original-title="Priyanka" /></li>
                                                        <li className="assignee"><img className="rounded-circle" width={40} src="../../assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" data-original-title="Selina" /></li>
                                                    </ul>
                                                </li>
                                                <li className="list-group-item todo-item" data-role="task">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck3" />
                                                        <label className="form-check-label w-100 mb-0 todo-label" htmlFor="customCheck3">
                                                            <span className="todo-desc fw-normal">Lorem Ipsum is simply dummy text of the
                                                                printing </span> <span className="badge rounded-pill bg-warning float-end">2
                                                                    weeks</span>
                                                        </label>
                                                    </div>
                                                    <div className="item-date"> 26 jun 2021</div>
                                                </li>
                                                <li className="list-group-item todo-item" data-role="task">
                                                    <div className="form-check">
                                                        <input type="checkbox" className="form-check-input" id="customCheck4" />
                                                        <label className="form-check-label w-100 mb-0 todo-label" htmlFor="customCheck4">
                                                            <span className="todo-desc fw-normal">Give Purchase report to</span> <span className="badge rounded-pill bg-info float-end">Yesterday</span>
                                                        </label>
                                                    </div>
                                                    <ul className="list-style-none assignedto">
                                                        <li className="assignee"><img className="rounded-circle" width={40} src="../../assets/images/users/3.jpg" alt="user" data-toggle="tooltip" data-placement="top" data-original-title="Priyanka" /></li>
                                                        <li className="assignee"><img className="rounded-circle" width={40} src="../../assets/images/users/4.jpg" alt="user" data-toggle="tooltip" data-placement="top" data-original-title="Selina" /></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                {/* card */}
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-0">Progress Box</h4>
                                        <div className="mt-3">
                                            <div className="d-flex no-block align-items-center">
                                                <span>81% Clicks</span>
                                                <div className="ms-auto">
                                                    <span>125</span>
                                                </div>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '81%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex no-block align-items-center mt-4">
                                                <span>72% Uniquie Clicks</span>
                                                <div className="ms-auto">
                                                    <span>120</span>
                                                </div>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: '72%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex no-block align-items-center mt-4">
                                                <span>53% Impressions</span>
                                                <div className="ms-auto">
                                                    <span>785</span>
                                                </div>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped bg-info" role="progressbar" style={{ width: '53%' }} aria-valuenow={50} aria-valuemin={0} aria-valuemax={100}>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <div className="d-flex no-block align-items-center mt-4">
                                                <span>3% Online Users</span>
                                                <div className="ms-auto">
                                                    <span>8</span>
                                                </div>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: '3%' }} aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* card new */}
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title mb-0">News Updates</h4>
                                    </div>
                                    <ul className="list-style-none">
                                        <li className="d-flex no-block card-body">
                                            <i className="fa fa-check-circle w-30px mt-1" />
                                            <div>
                                                <a href="/#" className="mb-0 font-medium p-0">Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit.</a>
                                                <span className="text-muted">dolor sit amet, consectetur adipiscing</span>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="tetx-right">
                                                    <h5 className="text-muted mb-0">20</h5>
                                                    <span className="text-muted font-16">Jan</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex no-block card-body border-top">
                                            <i className="fa fa-gift w-30px mt-1" />
                                            <div>
                                                <a href="/#" className="mb-0 font-medium p-0">Congratulation Maruti, Happy
                                                    Birthday</a>
                                                <span className="text-muted">many many happy returns of the day</span>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="tetx-right">
                                                    <h5 className="text-muted mb-0">11</h5>
                                                    <span className="text-muted font-16">Jan</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex no-block card-body border-top">
                                            <i className="fa fa-plus w-30px mt-1" />
                                            <div>
                                                <a href="/#" className="mb-0 font-medium p-0">Maruti is a Responsive Admin theme</a>
                                                <span className="text-muted">But already everything was solved. It will ...</span>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="tetx-right">
                                                    <h5 className="text-muted mb-0">19</h5>
                                                    <span className="text-muted font-16">Jan</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex no-block card-body border-top">
                                            <i className="fa fa-leaf w-30px mt-1" />
                                            <div>
                                                <a href="/#" className="mb-0 font-medium p-0">Envato approved Maruti Admin
                                                    template</a>
                                                <span className="text-muted">i am very happy to approved by TF</span>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="tetx-right">
                                                    <h5 className="text-muted mb-0">20</h5>
                                                    <span className="text-muted font-16">Jan</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="d-flex no-block card-body border-top">
                                            <i className="fa fa-question-circle w-30px mt-1" />
                                            <div>
                                                <a href="/#" className="mb-0 font-medium p-0"> I am alwayse here if you have any
                                                    question</a>
                                                <span className="text-muted">we glad that you choose our template</span>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="tetx-right">
                                                    <h5 className="text-muted mb-0">15</h5>
                                                    <span className="text-muted font-16">Jan</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
    )
}

export default Column
