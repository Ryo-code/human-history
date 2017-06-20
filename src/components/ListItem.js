import React, { Component } from "react";
import {
  Text, TouchableWithoutFeedback, View, LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions"; // "* as action" = everything from there

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription(){
    const { times, expanded } = this.props;

    if (expanded){
      return (
        <CardSection>
          <Text style={{flex: 1}}> {times.description} </Text>
        </CardSection>
      );
    }
  }

  render(){
    const { titleStyle } = styles;
    const { id, title } = this.props.times;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectEra(id)}
      >
        <View>
          <CardSection>
            <Text style={titleStyle}>
              {title}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles ={
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15,
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedTimeId === ownProps.times.id; //returns true or false
  return { expanded }; //shortened version of "expanded: expanded"
}

export default connect(mapStateToProps, actions)(ListItem);