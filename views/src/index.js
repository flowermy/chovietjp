
import React from 'react';

import { render } from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl'
import vi from 'react-intl/locale-data/vi'
import ja from 'react-intl/locale-data/ja'
import en from 'react-intl/locale-data/en'
import th from 'react-intl/locale-data/th'
import localeData from './locales/data.json'

import { store } from './store/store'
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HomeContainer } from './components/home/homeContainer';
import { OrderContainer } from './components/order/orderContainer';
import { AboutContainer } from './components/about/aboutContainer';
import { AccountContainer } from './components/account/accountContainer';

//import registerServiceWorker from './registerServiceWorker';
import { unregister } from './registerServiceWorker';

import { getValueLocalstorage } from './common/function_common/functionCommon'

import './styles/main.css';
import './styles/font-awesome.min.css'
import './styles/AdminLTE.min.css'
import './styles/_all-skins.min.css'
import axios from "axios/index";
// import { jsxOpeningElement } from '@babel/types';

axios.create({
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true"
  }
});

addLocaleData([...vi, ...ja, ...en, ...th])

// Define user's language. Different browsers have the user locale defined
// on different fields on the `navigator` object, so we make sure to account
// for these different by checking all of them

// const language =
//   (navigator.languages && navigator.languages[0]) ||
//   navigator.language ||
//   navigator.userLanguage;

const language = getValueLocalstorage('locale') ? getValueLocalstorage('locale') : 'vi'


// Split locales with a region code
const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

// Try full locale, try locale without region code, fallback to 'en'
const messages =
  localeData[languageWithoutRegionCode] ||
  localeData[language] ||
  localeData.vi;

render(
  <IntlProvider locale={language} messages={messages}>
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/" component={HomeContainer} />
          <Route path="/dat-hang" component={OrderContainer} />
          <Route path="/about" component={AboutContainer} />
          <Route path="/login" component={AccountContainer} />

          <Route component={() => (
            <div className="wrapper text-center">
              <img src={require('./styles/img/not_found_page.jpg')} alt="Page Not Found 404" height="100%" width="100%" />
            </div>
          )} />
        </Switch>
      </Router>
    </Provider>
  </IntlProvider>
  ,
  document.getElementById('root')
);

//registerServiceWorker();
unregister();
