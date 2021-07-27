import React from 'react'

function Comment() {
    return (
        <div className="comment-widgets scrollable">
                                        {/* Comment Row */}
                                        <div className="d-flex flex-row comment-row mt-0">
                                            <div className="p-2"><img src="../../assets/images/users/1.jpg" alt="user" width={50} className="rounded-circle" /></div>
                                            <div className="comment-text w-100">
                                                <h6 className="font-medium">James Anderson</h6>
                                                <span className="mb-3 d-block">Lorem Ipsum is simply dummy text of the printing
                                                    and type setting industry. </span>
                                                <div className="comment-footer">
                                                    <span className="text-muted float-end">April 14, 2021</span>
                                                    <button type="button" className="btn btn-cyan btn-sm text-white">Edit</button>
                                                    <button type="button" className="btn btn-success btn-sm text-white">Publish</button>
                                                    <button type="button" className="btn btn-danger btn-sm text-white">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Comment Row */}
                                        <div className="d-flex flex-row comment-row">
                                            <div className="p-2"><img src="../../assets/images/users/4.jpg" alt="user" width={50} className="rounded-circle" /></div>
                                            <div className="comment-text active w-100">
                                                <h6 className="font-medium">Michael Jorden</h6>
                                                <span className="mb-3 d-block">Lorem Ipsum is simply dummy text of the printing
                                                    and type setting industry. </span>
                                                <div className="comment-footer">
                                                    <span className="text-muted float-end">May 10, 2021</span>
                                                    <button type="button" className="btn btn-cyan btn-sm text-white">Edit</button>
                                                    <button type="button" className="btn btn-success btn-sm text-white">Publish</button>
                                                    <button type="button" className="btn btn-danger btn-sm text-white">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Comment Row */}
                                        <div className="d-flex flex-row comment-row">
                                            <div className="p-2"><img src="../../assets/images/users/5.jpg" alt="user" width={50} className="rounded-circle" /></div>
                                            <div className="comment-text w-100">
                                                <h6 className="font-medium">Johnathan Doeting</h6>
                                                <span className="mb-3 d-block">Lorem Ipsum is simply dummy text of the printing
                                                    and type setting industry. </span>
                                                <div className="comment-footer">
                                                    <span className="text-muted float-end">August 1, 2021</span>
                                                    <button type="button" className="btn btn-cyan btn-sm text-white">Edit</button>
                                                    <button type="button" className="btn btn-success btn-sm text-white">Publish</button>
                                                    <button type="button" className="btn btn-danger btn-sm text-white">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    )
}

export default Comment
