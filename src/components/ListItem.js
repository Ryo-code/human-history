import React, { Component } from "react";
import { Text } from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions"; // "* as action" = 

class ListItem extends Component {
  render(){
    const { title } = styles;
    console.log(this.props);

    return (
      <CardSection>
        <Text style={title}>
          {this.props.times.title}
        </Text>
      </CardSection>
    )
  }
}

const styles ={
  title: {
    fontSize: 18,
    paddingLeft: 15,
  }
}

export default connect(null, actions)(ListItem);
//If you don't want to 'map state to props' then you should use "null"