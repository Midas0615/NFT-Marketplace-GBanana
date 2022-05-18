import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Component/header';
import Page01 from './Pages/page01';
import Gs from './Theme/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from './Theme/theme';
import Footer from './Component/footer';
import SignUp from './Pages/auth/sign_up/sign_up'
const selectedTheme = theme(true);

function App() {
  return (
    <Router>
      {/* basename={'bscswap_newdark_v1'}   */}
      <ThemeProvider theme={selectedTheme}>
        <section className="MainBox clearfix">
          <Gs.GlobalStyle />
          <Header />
          <Gs.MainBox>
            <Switch>
              <Route path="/" exact>

                <Page01 />
              </Route>
              <Route path="/sign-up" exact>
                <SignUp />
              </Route>

            </Switch>
          </Gs.MainBox>
          <Footer />
        </section>
      </ThemeProvider>
    </Router>
  );
}

export default App;
