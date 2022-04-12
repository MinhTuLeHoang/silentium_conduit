import Banner from "./Banner";
import MainView from "./MainView";
import Tags from "./Tags";


const Home = (props) => {
    return (
        <div className="home-page">
            <Banner isHome={true}/>
            <div className="container page">
                <div className="row">
                    <MainView currentUser={props.currentUser}/>
                    <Tags />
                </div>
            </div>
        </div>
    );
}

export default Home;