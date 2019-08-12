import React from 'react';
import { StyleSheet, Text, View, Image, StatusBar, ImageBackground } from 'react-native';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler';
import Menu, { MenuItem } from 'react-native-material-menu';

export default class App extends React.Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}

// screen
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#121212'
      }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <ScrollView
          style={{ flex:1, backgroundColor:'#121212' }}
          contentContainerStyle={{ paddingTop:0, }} >
          <View style={{ alignItems:'center', marginTop:10, marginBottom:20 }}>
            {
              VideosData.map((_data, i) => {
                return (
                  <View key={i} style={{ flex:1 }}>
                    <YouTubeVideo
                      videoInfo={_data.videoInfo}
                      channelInfo={_data.channelInfo} />
                  </View>
                );
              })
            }
          </View>
        </ScrollView>
      </View>
    );
  }
}

class TrendingScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={{ color: '#fff' }}>Trending</Text>
      </View>
    );
  }
}

class SubscriptionsScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={{ color: '#fff' }}>Subscriptions</Text>
      </View>
    );
  }
}

class InboxScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={{ color: '#fff' }}>Inbox</Text>
      </View>
    );
  }
}

class LibraryScreen extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: '#121212',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Text style={{ color: '#fff' }}>Library</Text>
      </View>
    );
  }
}

// bottom tab navigation
const BottomTabNavigator = createBottomTabNavigator({
  HomeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name={'home'} size={20} style={{ color: tintColor }} />
      )
    }
  },
  TrendingScreen: {
    screen: TrendingScreen,
    navigationOptions: {
      tabBarLabel: 'Trending',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name={'whatshot'} size={20} style={{ color: tintColor }} />
      )
    }
  },
  SubscriptionsScreen: {
    screen: SubscriptionsScreen,
    navigationOptions: {
      tabBarLabel: 'Subscriptions',
      tabBarIcon: ({ tintColor, focused }) => (
        <View style={{ width:24, height:24, margin:5 }}>
          <Icon name={'subscriptions'} size={20} style={{ color: tintColor }} />
          {focused ? null : <View
            style={{
              position: 'absolute',
              right: 0,
              top: 0,
              backgroundColor: 'red',
              borderRadius: 6,
              width: 8,
              height: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>  
          </View>}
        </View>        
      ),
    }
  },
  InboxScreen: {
    screen: InboxScreen,
    navigationOptions: {
      tabBarLabel: 'Inbox',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name={'mail'} size={20} style={{ color: tintColor }} />
      )
    }
  },
  LibraryScreen: {
    screen: LibraryScreen,
    navigationOptions: {
      tabBarLabel: 'Library',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon name={'folder'} size={20} style={{ color: tintColor }} />
      )
    }
  }
}, {
  tabBarOptions: {
    activeTintColor: 'white',
    inactiveTintColor: 'grey',
    style: {
      backgroundColor: '#121212',
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: 'black',
      shadowOpacity: 0.5,
      elevation: 5,
      paddingVertical: 5
    },
  }
});

// stack navigator
const AppNavigator = createAppContainer(createStackNavigator({
    BottomTabNavigator: BottomTabNavigator
  },{
    defaultNavigationOptions:{
      headerStyle:{
        backgroundColor: "#121212",
        borderBottomWidth: 0
      },
      headerLeft: <Image
        source={{ uri: 'https://raw.githubusercontent.com/Chandankkrr/react-native-youtube-ui/master/assets/images/yt_logo_rgb_dark.png'}}
        style={{ height:22, width:98, marginLeft:10 }}
      />,
      headerRight: (
        <View style={{ flexDirection: 'row', marginRight: 10 }}>
          <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <Icon name='cast' size={25} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <Icon name='videocam' size={25} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <Icon name='search' size={25} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingHorizontal: 15 }}>
            <Icon name='account-circle' size={25} color={'#fff'} />
          </TouchableOpacity>
        </View>
      )
    }
  }
));

// Components
class VideoThumbnail extends React.Component {
  render() {
    return (
      <View style={{ flex:1, flexDirection: 'row' }}>
        <View style={{ flex:1, width: null, height: 200 }}>
          <ImageBackground
            style={{ flex:1, width: null, height: 200 }}
            source={{ uri: this.props.thumbnailUrl }}
          />
          <VideoLength
            style={{ position: "absolute", right:20, top:-35, backgroundColor:"black", color:"white",
              borderRadius:3, paddingHorizontal:7, textAlign:"right", overflow:"hidden"}}
            videoLength={this.props.videoLength} />
        </View>
      </View>
    );
  }
}

class VideoLength extends React.Component {
  render() {
    return (
      <View>
        <Text style={this.props.style}>{this.props.videoLength}</Text>
      </View>
    )
  }
}

class VideoInfo extends React.Component {
  render() {
    return (
      <View style={{ paddingHorizontal:15, paddingTop:15, paddingBottom:15, flexDirection:"row", marginTop:5 }}>
        <View style={{ marginHorizontal:10 }}>
          <Image
            style={{ width:40, height:40, borderRadius:20, margin:0 }}
            source={{ uri: this.props.channelAvartarImage }} />
        </View>
        <View style={{ paddingHorizontal:15, paddingBottom:15 }}>
          <Text style={{ fontWeight:'600', fontSize:16, color:'#fff', flex:1, flexWrap:'wrap' }}>
            {this.props.videoTitle}
          </Text>
          <Text style={{ fontSize:12, marginTop:6, color:'#4d4d4d' }}>
            {
              this.props.channelName
            } · {
              this.props.videoInfo.description.views
            } · {
              this.props.videoInfo.description.uploadDate
            }
          </Text>
        </View>
        <View>
          <VideoOptions />
        </View>
      </View>
    )
  }
}

class YouTubeVideo extends React.Component {
  render() {
    return (
      <View>
        <VideoThumbnail
          thumbnailUrl={this.props.videoInfo.videoThumbnailUrl}
          videoLength={this.props.videoInfo.videoLength}
        />
        <VideoInfo
          videoTitle={this.props.videoInfo.title}
          videoInfo={this.props.videoInfo}
          channelName={this.props.channelInfo.channelName}
          channelAvartarImage={this.props.channelInfo.channelAvartarImage}
        />
      </View>
    )
  }
}

// data
const VideosData = [
  {
    videoInfo: {
      title: "Building YouTube app (dark mode)",
      description: {
        views: "1.1K views",
        uploadDate: "1 week ago"
      },
      videoLength: "4:58",
      videoThumbnailUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    channelInfo: {
      channelName: "React Native",
      channelAvartarImage: 'https://images.unsplash.com/photo-1526312426976-f4d754fa9bd6'
    }
  },
  {
    videoInfo: {
      title: "Sony Xperia Android smartphone",
      description: {
        views: "121K views",
        uploadDate: "1 year ago"
      },
      videoLength: "3:18",
      videoThumbnailUrl: "https://images.unsplash.com/photo-1521939094609-93aba1af40d7"},
    channelInfo: {
      channelName: "Xperia Android",
      channelAvatarImage: 'https://images.unsplash.com/photo-1521249730512-fddd11477549'
    }
  },
  {
    videoInfo: {
      title: "Samsung gear smartwatch review",
      description: {
        views: "3.2M views",
        uploadDate: "6 months ago"
      },
      videoLength: "9:25",
      videoThumbnailUrl: "https://images.unsplash.com/photo-1523475496153-3d6cc0f0bf19"},
    channelInfo: {
      channelName: "Galaxy Gear",
      channelAvatarImage: 'https://images.unsplash.com/photo-1544385561-5817c4194492'
    }
  },
];

const MenuItems = [
  "See fewer videos like this",
  "Block this channel",
  "Save to watch later",
  "Save to playlist",
  "Share",
  "Report"
];

class VideoOptions extends React.Component {
  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };

  hideMenu = () => {
    this._menu.hide();
  };

  showMenu = () => {
    this._menu.show();
  };

  render() {
    return (
      <View>
        <Menu 
          ref={this.setMenuRef}
          button={
            <Icon name='more-vert' size={25} color={'#3e3e3e'} onPress={this.showMenu} />
        }>
          {
            MenuItems.map((data, i) => {
              return (
                <MenuItem
                  onPress={this.hideMenu}
                  style={{backgroundColor:"#121212"}}
                  textStyle={{color:"#fff"}}
                  underlayColor={"#121212"}
                  key={i}
                >{data}</MenuItem>
              );
            })
          }
        </Menu>
      </View>
    );
  }
}

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
