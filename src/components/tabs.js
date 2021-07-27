import React from 'react'
import NavTab from './navtab'

function Tabs() {
    return (
        <div className="card">
                                    {/* Nav tabs */}
                                    <NavTab/>
                                    {/* Tab panes */}
                                    <div className="tab-content tabcontent-border">
                                        <div className="tab-pane active" id="home" role="tabpanel">
                                            <div className="p-20">
                                                <p>And is full of waffle to It has multiple paragraphs and is full of waffle to
                                                    pad out the comment. Usually, you just wish these sorts of comments would
                                                    come to an end.multiple paragraphs and is full of waffle to pad out the
                                                    comment..</p>
                                                <img src="../../assets/images/background/img4.jpg"  className="img-fluid" />
                                            </div>
                                        </div>
                                        <div className="tab-pane  p-20" id="profile" role="tabpanel">
                                            <div className="p-20">
                                                <img src="../../assets/images/background/img4.jpg"  className="img-fluid" />
                                                <p className="mt-2">And is full of waffle to It has multiple paragraphs and is
                                                    full of waffle to pad out the comment. Usually, you just wish these sorts of
                                                    comments would come to an end.multiple paragraphs and is full of waffle to
                                                    pad out the comment..</p>
                                            </div>
                                        </div>
                                        <div className="tab-pane p-20" id="messages" role="tabpanel">
                                            <div className="p-20">
                                                <p>And is full of waffle to It has multiple paragraphs and is full of waffle to
                                                    pad out the comment. Usually, you just wish these sorts of comments would
                                                    come to an end.multiple paragraphs and is full of waffle to pad out the
                                                    comment..</p>
                                                <img src="../../assets/images/background/img4.jpg"  className="img-fluid" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
    )
}

export default Tabs
