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
import { AXText } from '../../components';
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
            style={{width: width / 2.5, height: width / 2.5}}
            resizeMode="contain"
          />
          <AXText
            text=" خوش اومدی"
            style={{
              fontSize: 16,
              marginTop: 20,
              fontFamily: g.type.fontFamily,
            }}>
          </AXText>
          <AXText text=" شما به صورت مهمان وارد شده اید" style={{fontSize: 18, fontFamily: g.type.fontFamily}}></AXText>
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
    width: width / 3,
    height: width / 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width,
    borderWidth: 10,
    borderColor: '#73E550',
  },
  menuButton: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width,
    borderWidth: 3,
    borderColor: g.colors.white,
    marginTop: -30,
  },
});
