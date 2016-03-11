/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';
import { Checkbox } from 'react-native-material-design';

const todoList = [
  { isDone: false, text: 'React native tutorial 1', value: "1", },
  { isDone: false, text: 'React native tutorial 2', value: "2", },
  { isDone: false, text: 'React native tutorial 3', value: "3", },
  { isDone: false, text: 'React native tutorial 4', value: "4", },
  { isDone: false, text: 'React native tutorial 5', value: "5", },
  { isDone: false, text: 'React native tutorial 6', value: "6", },
  { isDone: false, text: 'React native tutorial 7', value: "7", },
  { isDone: false, text: 'React native tutorial 8', value: "8", },
  { isDone: false, text: 'React native tutorial 9', value: "9", },
  { isDone: false, text: 'React native tutorial 10', value: "10", },
  { isDone: false, text: 'React native tutorial 11', value: "11", },
  { isDone: false, text: 'React native tutorial 12', value: "12", },
  { isDone: false, text: 'React native tutorial 13', value: "13", },
  { isDone: false, text: 'React native tutorial 14', value: "14", },
  { isDone: false, text: 'React native tutorial 15', value: "15", },
];

const REQUEST_ENDPOINT = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz&page_limit=50';

class calendar extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData () {
    fetch(REQUEST_ENDPOINT)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          dataSource: this.state.dataSource.cloneWithRows(response.movies.map(this.transformMovie)),
          loaded: true
        })
      });
  }

  transformMovie (movie) {
    const { title, id } = movie;
    return {
      isDone: false,
      text: title,
      value: id,
    }
  }

  render() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderView}
          style={styles.listView}
        />
    );
  }

  renderLoadingView () {
    return (
      <View style={styles.container}>
        <Text>
          Loading TODOs...
        </Text>
      </View>
    );
  }

  _markDone = () => {
    this.setState({ isDone: true })
  };

  renderView = (task) => {
    const { isDone, text, value } = task;
    return (
      <View style={styles.container}>
        <Checkbox
          value={ value }
          checked={ isDone }
          label={ text }/>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('calendar', () => calendar);
