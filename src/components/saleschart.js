import React from 'react'

function SalesChart() {
    return (
        <div className="row">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="d-md-flex align-items-center">
                                            <div>
                                                <h4 className="card-title">Site Analysis</h4>
                                                <h5 className="card-subtitle">Overview of Latest Month</h5>
                                            </div>
                                        </div>
                                        <div className="row">
                                            {/* column */}
                                            <div className="col-lg-9">
                                                <div className="flot-chart">
                                                    <div className="flot-chart-content" id="flot-line-chart" />
                                                </div>
                                            </div>
                                            <div className="col-lg-3">
                                                <div className="row">
                                                    <div className="col-6">
                                                        <div className="bg-dark p-10 text-white text-center">
                                                            <i className="fa fa-user mb-1 font-16" />
                                                            <h5 className="mb-0 mt-1">2540</h5>
                                                            <small className="font-light">Total Users</small>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="bg-dark p-10 text-white text-center">
                                                            <i className="fa fa-plus mb-1 font-16" />
                                                            <h5 className="mb-0 mt-1">120</h5>
                                                            <small className="font-light">New Users</small>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mt-3">
                                                        <div className="bg-dark p-10 text-white text-center">
                                                            <i className="fa fa-cart-plus mb-1 font-16" />
                                                            <h5 className="mb-0 mt-1">656</h5>
                                                            <small className="font-light">Total Shop</small>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mt-3">
                                                        <div className="bg-dark p-10 text-white text-center">
                                                            <i className="fa fa-tag mb-1 font-16" />
                                                            <h5 className="mb-0 mt-1">9540</h5>
                                                            <small className="font-light">Total Orders</small>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mt-3">
                                                        <div className="bg-dark p-10 text-white text-center">
                                                            <i className="fa fa-table mb-1 font-16" />
                                                            <h5 className="mb-0 mt-1">100</h5>
                                                            <small className="font-light">Pending Orders</small>
                                                        </div>
                                                    </div>
                                                    <div className="col-6 mt-3">
                                                        <div className="bg-dark p-10 text-white text-center">
                                                            <i className="fa fa-globe mb-1 font-16" />
                                                            <h5 className="mb-0 mt-1">8540</h5>
                                                            <small className="font-light">Online Orders</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* column */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    )
}

export default SalesChart
