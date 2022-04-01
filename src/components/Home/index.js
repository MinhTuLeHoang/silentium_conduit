import Banner from "./Banner";
import MainView from "./MainView";
import Tags from "./Tags";


function Home(){
    return (
        <div className="home-page">
            <Banner/>
            <div className="container page">
                <div className="row">
                    <MainView/>
                    <Tags />
                </div>
            </div>
        </div>
    );
}

export default Home;