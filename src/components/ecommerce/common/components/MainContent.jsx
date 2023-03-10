import Footer from "./Footer";
import Header from "./Header";
import LeftSideBar from "./LeftSideBar";

export default function MainContent({children}) {
    return (
        <div className="page-wrapper">
            <LeftSideBar/>
            <div className="page-container">
                <Header/>
                <div class="main-content">
                    <div class="section-content section-content-p30">
                        <div class="container-fluid">
                            <div class="row">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}