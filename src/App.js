import Sidebar from "./components/sidebar";
import Header from "./components/header";
import SalesChart from "./components/saleschart";
import Column from "./components/column";
import Card from "./components/card";
import Tabs from "./components/tabs";
import Accoridan from "./components/accoridan";
import SalesCard from "./components/salescard";
function App() {
    return (
        <div>
            <div className="preloader">
                <div className="lds-ripple">
                    <div className="lds-pos" />
                    <div className="lds-pos" />
                </div>
            </div>
            {/* ============================================================== */}
            {/* Main wrapper - style you can find in pages.scss */}
            {/* ============================================================== */}
            <div id="main-wrapper" data-layout="vertical" data-navbarbg="skin5" data-sidebartype="full" data-sidebar-position="absolute" data-header-position="absolute" data-boxed-layout="full">
                {/* ============================================================== */}
                {/* Topbar header - style you can find in pages.scss */}
                {/* ============================================================== */}
                <Header />
                {/* ============================================================== */}
                {/* End Topbar header */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Left Sidebar - style you can find in sidebar.scss  */}
                {/* ============================================================== */}
                <Sidebar />
                {/* ============================================================== */}
                {/* End Left Sidebar - style you can find in sidebar.scss  */}
                {/* ============================================================== */}
                {/* ============================================================== */}
                {/* Page wrapper  */}
                {/* ============================================================== */}
                <div className="page-wrapper">
                    {/* ============================================================== */}
                    {/* Bread crumb and right sidebar toggle */}
                    {/* ============================================================== */}
                    <div className="page-breadcrumb">
                        <div className="row">
                            <div className="col-12 d-flex no-block align-items-center">
                                <h4 className="page-title">Dashboard</h4>
                                <div className="ms-auto text-end">
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb">
                                            <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                            <li className="breadcrumb-item active" aria-current="page">Library</li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* ============================================================== */}
                    {/* End Bread crumb and right sidebar toggle */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* Container fluid  */}
                    {/* ============================================================== */}
                    <div className="container-fluid">
                        {/* ============================================================== */}
                        {/* Sales Cards  */}
                        {/* ============================================================== */}
                        <SalesCard/>
                        {/* ============================================================== */}
                        {/* Sales chart */}
                        {/* ============================================================== */}
                        <SalesChart/>
                        {/* ============================================================== */}
                        {/* Sales chart */}
                        {/* ============================================================== */}
                        {/* ============================================================== */}
                        {/* Recent comment and chats */}
                        {/* ============================================================== */}
                        <div className="row">
                            {/* column */}
                            <Column/>
                            {/* column */}
                            <div className="col-lg-6">
                                {/* Card */}
                                <Card/>
                                {/* card */}
                                <div className="card">
                                    <div className="card-body">
                                        <h4 className="card-title">Our partner (Box with Fix height)</h4>
                                    </div>
                                    <div className="comment-widgets scrollable" style={{ maxHeight: 130 }}>
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
                                </div>
                                {/* accoridan part */}
                                <Accoridan/>
                                {/* toggle part */}
                                <div id="accordian-4">
                                    <div className="card mt-4">
                                        <a className="card-header link" data-toggle="collapse" data-parent="#accordian-4" href="#Toggle-1" aria-expanded="true" aria-controls="Toggle-1">
                                            <i className="seticon fa fa-arrow-right" aria-hidden="true" />
                                            <span>Toggle, Open by default</span>
                                        </a>
                                        <div id="Toggle-1" className="collapse show multi-collapse">
                                            <div className="card-body widget-content">
                                                This box is opened by default, paragraphs and is full of waffle to pad out the
                                                comment. Usually, you just wish these sorts of comments would come to an end.
                                            </div>
                                        </div>
                                        <a className="card-header link border-top" data-toggle="collapse" data-parent="#accordian-4" href="#Toggle-2" aria-expanded="false" aria-controls="Toggle-2">
                                            <i className="seticon fa fa-times" aria-hidden="true" />
                                            <span>Toggle, Closed by default</span>
                                        </a>
                                        <div id="Toggle-2" className="multi-collapse collapse" style={{}}>
                                            <div className="card-body widget-content">
                                                This box is now open
                                            </div>
                                        </div>
                                        <a className="card-header collapsed link border-top" data-toggle="collapse" data-parent="#accordian-4" href="#Toggle-3" aria-expanded="false" aria-controls="Toggle-3">
                                            <i className="seticon fa fa-times" aria-hidden="true" />
                                            <span>Toggle, Closed by default</span>
                                        </a>
                                        <div id="Toggle-3" className="collapse multi-collapse">
                                            <div className="card-body widget-content">
                                                This box is now open
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Tabs */}
                                <Tabs/>
                            </div>
                        </div>
                        {/* ============================================================== */}
                        {/* Recent comment and chats */}
                        {/* ============================================================== */}
                    </div>
                    {/* ============================================================== */}
                    {/* End Container fluid  */}
                    {/* ============================================================== */}
                    {/* ============================================================== */}
                    {/* footer */}
                    {/* ============================================================== */}
                    <footer className="footer text-center">
                        All Rights Reserved by Matrix-admin. Designed and Developed by <a href="https://www.wrappixel.com">WrapPixel</a>.
                    </footer>
                    {/* ============================================================== */}
                    {/* End footer */}
                    {/* ============================================================== */}
                </div>
                {/* ============================================================== */}
                {/* End Page wrapper  */}
                {/* ============================================================== */}
            </div>
        </div>

    )
}

export default App;
