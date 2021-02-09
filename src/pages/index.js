import './index.css'
import Header from '../components/header'
import Apps from '../components/apps'
import Info from '../components/info'

function Main() {
    return (
        <>
            <Header />
            <div className="container">
                <Info />
                <Apps />
            </div>
        </>
    );
}

export default Main;
