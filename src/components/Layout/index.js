import Sidebar from '../SideBar';
import {Outlet} from 'react-router-dom'
import './index.scss'
import videoBG from '../../assests/images/bg.mp4';

const Layout = () => {
    return <div className='App'>
    <Sidebar />
    <div className="page">
        <span className='tags top-tags'>&lt;body&gt;</span>
        <Outlet/>
        <span className='tags top-tags'>
        &lt;/body&gt;
        <br/>
        <span className='bottom-tag-html'>&lt;/html&gt;</span>
        </span>
    </div>
    <div className="overlay">
                <video src={videoBG} autoPlay loop muted></video>
            </div>
    </div>
}

export default Layout;