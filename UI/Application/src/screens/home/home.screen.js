import React from 'react';
import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import LogoText from '../../assets/images/logotext.png';
import g from '../../../global';
let {width, height} = Dimensions.get('window');

export default class HomeScreen extends React.PureComponent {
  static navigationOptions = {
    header: null,
  };
  componentDidMount() {
    StatusBar.setHidden(false);
    StatusBar.setBackgroundColor("#fff");
    StatusBar.setBarStyle('dark-content');
  }
  onPlayGame = () => {
    this.props.navigation.navigate('Game');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Image
            source={LogoText}
            style={{width: width / 2, height: width / 2}}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: 16,
              marginTop: 20,
              fontFamily: g.type.fontFamily,
            }}>
            خوش اومدی
          </Text>
          <Text style={{fontSize: 24, fontFamily: g.type.fontFamily}}>
            مهمان 204
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity onPress={this.onPlayGame} activeOpacity={0.5}>
            <LinearGradient
              colors={['#3BD616', '#89EB67']}
              style={styles.startButton}>
              <Icon name="play" color={g.colors.white} size={width / 2.5 / 2} />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              this.props.navigation.navigate("Menu")
            }}>
            <LinearGradient
              colors={['#3BD616', '#89EB67']}
              style={styles.menuButton}>
              <Icon name="menu" color={g.colors.white} size={40} />
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 2,
  },
  bottomContainer: {
    alignItems: 'center',
    height: height / 2,
  },
  startButton: {
    width: width / 2.5,
    height: width / 2.5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width,
    borderWidth: 10,
    borderColor: '#73E550',
  },
  menuButton: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width,
    borderWidth: 10,
    borderColor: g.colors.white,
    marginTop: -30,
  },
});
