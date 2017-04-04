import React, { Component, PropTypes } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import AdminInfo from './AdminInfo';
import UserList from './UserList';
import EventList from './EventList';
import RecommendeeList from './RecommendeeList';
import RecommenderList from './RecommenderList';

class MappingBoard extends Component {

  render(){
    return (
      <div className="app">
        <AdminInfo id='admin'
              adminId={this.props.adminId}
              adminName={this.props.adminName}
              onLogout={this.props.onLogout}
              />
        <UserList id='users'
              title="Users"
              usercards={ this.props.usercards.filter((card) => card.status === "ready")}
              currentUser={ this.props.currentUser }
              theOthersAdmin={this.props.theOthersAdmin}
              eventCallBacks={ this.props.eventCallBacks }
              adminCallBacks={ this.props.adminCallBacks }
              />
        <EventList id='events'
              title="Events"
              eventcards={ this.props.eventcards.filter((card) => card.reco_state === 1) }
              notrecommendevents={ this.props.notrecommendevents }
              currentUser={ this.props.currentUser }
              currentEvent={ this.props.currentEvent }
              eventCallBacks={ this.props.eventCallBacks }
              recommendCallBacks={ this.props.recommendCallBacks }
              currentCommitRecommendCount = {this.props.currentCommitRecommendCount}
              />
        <RecommendeeList id='recommendee'
              title="Recommendee"
              recommendcards={this.props.recommendcards.filter((card) => card.status === "recommendee")}
              currentEvent={this.props.currentEvent}
              currentCategory={this.props.currentCategory}
              recommendCallBacks={this.props.recommendCallBacks}
              dndCallBacks={this.props.dndCallBacks}
              />
        <RecommenderList id='recommender'
              title='Recommender'
              recommendcards={this.props.recommendcards.filter((card) => card.status === "recommender")}
              currentUser={this.props.currentUser}
              currentEvent={this.props.currentEvent}
              currentCategory={this.props.currentCategory}
              currentMainRegions={this.props.currentMainRegions}
              currentDetailRegions={this.props.currentDetailRegions}
              currentGenders={this.props.currentGenders}
              regionSet={this.props.regionSet}
              categoryCallBacks={this.props.categoryCallBacks}
              dndCallBacks={this.props.dndCallBacks}
              />
      </div>
    );
  }
};

MappingBoard.propTypes = {
  usercards: PropTypes.arrayOf(PropTypes.object),
  eventcards: PropTypes.arrayOf(PropTypes.object),
  recommendcards: PropTypes.arrayOf(PropTypes.object),
  notrecommendevents: PropTypes.arrayOf(PropTypes.string),  // Declare list about disrecommending event
  currentUser: PropTypes.object,
  currentEvent: PropTypes.object,
  currentCategory: PropTypes.string,
  currentMainRegions: PropTypes.arrayOf(PropTypes.string),
  currentDetailRegions: PropTypes.arrayOf(PropTypes.string),
  currentGenders: PropTypes.arrayOf(PropTypes.string),
  regionSet: PropTypes.arrayOf(PropTypes.object),
  eventCallBacks: PropTypes.object,
  categoryCallBacks: PropTypes.object,
  recommendCallBacks: PropTypes.object,
  adminCallBacks: PropTypes.object,
  dndCallBacks: PropTypes.object,
  adminId: PropTypes.string,
  adminName: PropTypes.string,
  onLogout: PropTypes.function,
  theOthersAdmin: PropTypes.arrayOf(PropTypes.string),
  currentCommitRecommendCount: PropTypes.number
};

export default DragDropContext(HTML5Backend)(MappingBoard);