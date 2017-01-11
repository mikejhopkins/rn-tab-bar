'use strict'

import React from 'react';
import {
View,
Text,
TouchableOpacity,
Image,
StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

//  ****   THIS IS THE OBJECT STRUCTURE FOR THE TABS ARRAY  ****
// {
//   localIcon: bool,
//   onPress: function.required,
//   iconProps: React.PropTypes.object,
//   textProps: React.PropTypes.object,
//   tabStyle: React.PropTypes.object,
//   text: React.PropTypes.string,
//   badge: null or string,
//   badgeTextStyle: TextProps
// }

export default class TabBar extends React.Component {

  static propTypes = {
    tabs: React.PropTypes.array.isRequired,
    containerStyle: React.PropTypes.any.isRequired,
  }

renderIcon(opt){
  return(
    <Icon {...opt.iconProps} />
  )
};

renderImage(opt){
  return(
      <Image {...opt.iconProps} />
  )
};

renderText(opt){
  if (opt.text) {
    return(
      <Text {...opt.textProps} >
        {opt.text}
      </Text>
    )
  }
};

renderBadge(opt){
  if (opt.badge) {
    return(
      <View style={{
        backgroundColor:'#FF3B30',
        padding:3,
        borderRadius:10,
        position:'absolute',
        top: 4,
        right:4
      }}>
        <Text {...opt.badgeTextProps}>{opt.badge}</Text>
      </View>
    )
  }
}

render(){
  let tabs = this.props.tabs.map((opt,i) => {
    return(
      <TouchableOpacity
        key={i}
        onPress={opt.onPress}
        style={[{
          flex:1,
          flexDirection: 'column',
          justifyContent:'center',
          alignItems:'center',
        },opt.tabStyle]}>
        {
          (opt.localIcon) ? this.renderImage(opt):this.renderIcon(opt)
        }
        { this.renderText(opt)}
        { this.renderBadge(opt) }
      </TouchableOpacity>
    )
  });
  return(
    <View style={[{
      flexDirection:'row',
    },this.props.containerStyle]}>
      { tabs }
    </View>
  )
};

};
