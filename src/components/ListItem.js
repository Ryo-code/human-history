import React, { Component } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions"; // "* as action" = everything from there

class ListItem extends Component {
  renderDescription(){
    const { times, selectedTimeId } = this.props;
    if (times.id === selectedTimeId){
      return (
        <Text>
          {times.description}
        </Text>
      )
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

const mapStateToProps = state => {
  return { selectedTimeId: state.selectedTimeId };
}

export default connect(mapStateToProps, actions)(ListItem);