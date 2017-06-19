import React, { Component } from "react";
import { ListView } from 'react-native';
import { connect } from "react-redux";
import ListItem from "./ListItem";

class TimesList extends Component {
  componentWillMount() { //called whenever this is about to render
    const ds = new ListView.DataSource({ //ds = data source
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.times);
  }

  renderRow(time){
    return <ListItem times={time}/>;
  }

  render (){
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    )
  }
}

const mapStateToProps = state => {
  return { times: state.times };
};

export default connect(mapStateToProps)(TimesList);