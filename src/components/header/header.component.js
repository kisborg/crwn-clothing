import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { HeaderContainer, OptionsContainer, OptionLink, OptionDiv, LogoContainer } from './header.styles';
import { signOutStart } from '../../redux/user/user.actions';

function Header({ currentUser, hidden, signOutStart }) {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">
          SHOP
        </OptionLink>
        <OptionLink to="/contact">
          CONTACT
        </OptionLink>
        {
          currentUser ? 
          <OptionDiv onClick={signOutStart}>SIGN OUT</OptionDiv>
          :
          <OptionLink to="/signin">SIGN IN</OptionLink>
        }
        <CartIcon />
      </OptionsContainer>
      { !hidden ? (<Cart />) : null }
    </HeaderContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart()),
});

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);