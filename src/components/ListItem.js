import React, { Component } from "react";
import {
  Text, TouchableWithoutFeedback, View, LayoutAnimation, 
  Image, Platform, UIManager,
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions"; // "* as action" = everything from there

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true)
    }
  }

  renderDescription(){
    const { times, expanded } = this.props;
    const { contentWrapper, imageStyle, descriptionStyle } = styles;

    if (expanded){
      return (
        <View style={contentWrapper}>
          <Image
            style={imageStyle}
            source={{ uri: times.image }}
          />
          <Text style={{textAlign: 'center'}}>({times.timePeriod})</Text>
          <Text style={descriptionStyle}>{times.description}</Text>
        </View>
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
    fontWeight: '500',
  },
  contentWrapper: {
    flexDirection: 'column',
    
  },
  imageStyle: {
    height: 250, 
  },
  descriptionStyle: {
    flex: 1,
    marginBottom: 50,
    padding: 15,
    textAlign: 'justify',
  }
}

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedTimeId === ownProps.times.id; //returns true or false
  return { expanded }; //shortened version of "expanded: expanded"
}

export default connect(mapStateToProps, actions)(ListItem);