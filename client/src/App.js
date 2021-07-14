import React, { lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Header from "./components/Header";
import { checkUserSession } from "./redux/user/user.actions";
import { GlobalStyle } from "./global.styles";

import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import Spinner from "./components/Spinner";
import ErrorBoundary from "./components/error-boundary";

const HomePage = lazy(() => import("./pages/Homepage/homepage.component"));
const ShopPage = lazy(() => import("./pages/shop/shop.component"));
const SignInAndSignUp = lazy(() => import("./pages/SignIn-SignUp"));
const CheckoutPage = lazy(() => import("./pages/Checkout"));

class App extends React.Component {
  componentDidMount() {
    const { checkUserSession } = this.props;
    checkUserSession();
  }

  render() {
    return (
      <div>
        <GlobalStyle />
        <Header />
        <Switch>
          <ErrorBoundary>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={HomePage} />
              <Route path="/shop" component={ShopPage} />
              <Route exact path="/checkout" component={CheckoutPage} />
              <Route
                exact
                path="/signin"
                render={() =>
                  this.props.currentUser ? (
                    <Redirect to="/" />
                  ) : (
                    <SignInAndSignUp />
                  )
                }
              />
            </Suspense>
          </ErrorBoundary>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
