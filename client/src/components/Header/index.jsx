import React from "react";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/icons/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../CartIcon";
import CartDropdown from "../CartDropdown";
import {
  HeaderContainer,
  LogoContainer,
  OptionDiv,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

import { selectCurrentUser } from "../../redux/user/user.selector";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { signOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, isCartHidden, signOutStart }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {!isCartHidden ? <CartDropdown /> : null}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isCartHidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => {
  return {
    signOutStart: () => {
      dispatch(signOutStart());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
