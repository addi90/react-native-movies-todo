'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
} from 'react-native';
import { Checkbox } from 'react-native-material-design';

const REQUEST_ENDPOINT = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz&page_limit=50';

export default class TaskList extends Component {
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
