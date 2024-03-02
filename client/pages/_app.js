import 'bootstrap/dist/css/bootstrap.css';
import buildClient from '../api/build-client';
import Header from '../components/header';

const AppComponent = ({ Component, pageProps, currentUser }) => {
    return (
        <div>
            <Header currentUser={currentUser}/>
            <div className='cotainer'>
                <Component currentUser={currentUser} {...pageProps} />
            </div>
        </div>
    );
}