import React, { Component, PropTypes } from 'react';
import UserCard from './UserCard';

class UserList extends Component {
	render() {
		let currentYear=new Date().getFullYear();

		let userCards = this.props.usercards.map((usercard) => {			
			return <UserCard 
					key={usercard.user_hashkey}
					userHashkey={usercard.user_hashkey}
					gender={usercard.user_gender}
					age={currentYear - usercard.user_birth}
					createDateTime={usercard.create_datetime}
					currentUser={this.props.currentUser}
					theOthersAdmin={this.props.theOthersAdmin}
					eventCallBacks={this.props.eventCallBacks}
							{...usercard} />
		});

		return (
			<div className="userlist">
				<h1>{this.props.title}{' '}{this.props.usercards.length}{' '}
				<input type='button' className='syncadmin' value="동기화" onClick={this.props.adminCallBacks.loadAdminList.bind(this)}/></h1>
				{userCards}
			</div>
		);
	}
};
UserList.propTypes = {
	title: PropTypes.string.isRequired,
	currentUser: PropTypes.object,
	theOthersAdmin: PropTypes.arrayOf(PropTypes.string),
	usercards: PropTypes.arrayOf(PropTypes.object),
	eventCallBacks: PropTypes.object,
	adminCallBacks: PropTypes.object
};

export default UserList;