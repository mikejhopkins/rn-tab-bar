'use strict'

import React from 'react';
import {
View,
Text,
TouchableOpacity,
Image
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
