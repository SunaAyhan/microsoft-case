import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.class.css'; */

/* Theme variables */
import './theme/variables.css';
import TextArea from './components/TextArea';
import GuestReviews from './pages/GuestReviews';
import SendMessage from './pages/SendMessage';
import LoginPage from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import { useEffect } from 'react';

setupIonicReact();


const App: React.FC = () => {
  useEffect(() => {
    document.body.classList.toggle('dark', false);
  }, []);
  return (
    <IonApp>
      <IonReactRouter>
        <Route path="/admin-panel" exact={true}>
          <AdminPanel />
        </Route>
        <Route path="/login" exact={true}>
          <LoginPage />
        </Route>
        <Route path="/" exact={true} >
          <Redirect to="/pages/messages" />
        </Route>
        <Route path="/pages">
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id="main">
              <Route path="/pages">
                <Redirect to="/pages/messages" />
              </Route>
              <Route path="/pages/messages">
                <GuestReviews />
              </Route>
              <Route path="/pages/newMessage">
                <SendMessage />
              </Route>
            </IonRouterOutlet>
          </IonSplitPane>
        </Route>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
