import React, { Component } from 'react';
import styled from 'styled-components';
import FacebookLogin from 'react-facebook-login';
import { connect } from 'react-redux';

import { authenticateFacebookUser } from '../../../actions/user';
import toastr from '../../../helpers/toastr';
import { color, fontWeight } from '../../_settings/_variables';

const Wrapper = styled.span`
  width: 100%;

  .btn-fb {
    padding: .75em 3.5em;
    border-radius: 2em;
    border: none;
    font-size: 1em;
    font-weight: ${fontWeight.BASE};
    background-color: ${color.STEEL_BLUE};
    color: ${color.WHITE};
    width: 100%;
    outline: none;
    border: .7px solid ${color.STEEL_BLUE};

    :hover {
      background-color: ${color.WHITE};
      color: ${color.STEEL_BLUE};
      border: .7px solid ${color.STEEL_BLUE};
      cursor: pointer;
    }
  }

  span {
    width: 100%;
  }
`;

class FaceBookLogin extends Component {
  handleResponse = async ({ accessToken }) => {
    try {
      const { authenticateFacebookUser } = this.props;
      await authenticateFacebookUser(accessToken);
    } catch (err) {
      toastr.error('An error occurred, please try again later.');
    }
  };
  render() {
    const { FACEBOOK_APP_ID } = process.env;
    return (
      <Wrapper>
        <FacebookLogin
        appId={FACEBOOK_APP_ID}
        autoLoad
        fields="name,email,picture"
        scope="public_profile,email"
        cssClass="btn-fb"
        callback={this.handleResponse}
      />
      </Wrapper>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  authenticateFacebookUser: accessToken => dispatch(authenticateFacebookUser(accessToken)),
});

export default connect(null, mapDispatchToProps)(FaceBookLogin);
