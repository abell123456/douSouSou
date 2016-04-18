var React = require('react-native');
var Navigation = require('./iOS_views/common/navigation');
var Book = require('./iOS_views/book/book_list');
var Music = require('./iOS_views/music/music');
var Movie = require('./iOS_views/movie/movie');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  ScrollView,
  StatusBarIOS
} = React;

// StatusBarIOS.setHidden(true);
var douSouSou = React.createClass({
    
  getInitialState: function(){
    return {
      selectedTab: '图书'
    };
  },
  render: function() {
    return (
      <TabBarIOS tintColor="white"
                 barTintColor="darkslateblue">
        <TabBarIOS.Item
          title="图书"
          selected={this.state.selectedTab === '图书'}
          onPress={() => {
            this.setState({
              selectedTab: '图书'
            });
          }}>
          <Navigation component={Book}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="电影"
          selected={this.state.selectedTab === '电影'}
          onPress={() => {
            this.setState({
              selectedTab: '电影'
            });
          }}>
          <Navigation component={Movie}/>
        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="音乐"
          selected={this.state.selectedTab === '音乐'}
          onPress={() => {
            this.setState({
              selectedTab: '音乐'
            });
          }}>
          <Navigation component={Music}/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

AppRegistry.registerComponent('douSouSou', () => douSouSou);

