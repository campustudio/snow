import React, { Component } from 'react';
import { connect } from 'react-redux';
import H5NavBar from '@h5components/H5NavBar';
import '../screen.less';
import apis from '@apis';
import SpinSkeletonContainer from '@h5components/SpinSkeletonContainer'
import Invitees from './Invitees';

export default class InvitedUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inviteesGot: null,
    };
  }

  componentDidMount() {
    this.getUsers();
  }

  getUsers = async () => {
    const inviteesGot = await apis.getInvitees({
      token: localStorage.getItem('token'),
    });
    console.log('inviteesGot: ', inviteesGot);
    // const tempArr = [];
    // for (let i = 0; i < 100; i++) {
    //   tempArr.push(inviteesGot[0]);
    // }
    this.setState({
      inviteesGot
    });
  }

  render() {
    const { inviteesGot } = this.state;
    console.log('inviteesGot: ', inviteesGot);

    return (
      <div>
        <H5NavBar text="受邀用户" />
        <div className="content-container">
          <SpinSkeletonContainer dataSrc={inviteesGot} rows={3}>
            <Invitees invitees={inviteesGot} />
          </SpinSkeletonContainer>
        </div>
      </div>
    );
  }
}
