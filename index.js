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
//   isSelected: bool,
//   onPress: function,
//   text: string,
//   textStyle: {fontSize:12}  // color of text is changed with image
//   iconSource: string for FontAwesome icons,  require('file.extension') for local icon,
// }

export default class TabBar extends React.Component {

  static propTypes = {
    tabs: React.PropTypes.array.isRequired,
    containerHeight: React.PropTypes.number.isRequired,
    iconHeight: React.PropTypes.number.isRequired,
    selectedColor: React.PropTypes.string.isRequired,
    unselectedColor: React.PropTypes.string.isRequired,
    containerStyle: React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.number]),
    textStyle: React.PropTypes.oneOfType([React.PropTypes.object,React.PropTypes.number]),
    text: React.PropTypes.string,
  }

renderIcon(opt){
  return(
    <Icon
      size={this.props.iconHeight}
      name={opt.iconSource}
      color={(opt.isSelected) ? this.props.selectedColor:this.props.unselectedColor}
    />
  )
};

renderImage(opt){
  return(
    <View style={{
      alignItems:'center',
      justifyContent:'center'
    }}>
      <Image
        source={opt.iconSource}
        style={{
          height:this.props.iconHeight,
          tintColor: (opt.isSelected) ? this.props.selectedColor:this.props.unselectedColor,
        }}
        resizeMode={'contain'}
      />
    </View>
  )
};

renderText(opt){
  if (opt.text) {
    return(
      <Text
        style={[{
          color: (opt.isSelected) ? this.props.selectedColor:this.props.unselectedColor,
        },
          opt.textStyle
        ]}>
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
        style={{
          flex:1,
          flexDirection: 'column',
          justifyContent:'center',
          alignItems:'center',
        }}>
        {
          (opt.localIcon) ? this.renderImage(opt):this.renderIcon(opt)
        }
        { this.renderText(opt)}
      </TouchableOpacity>
    )
  });
  return(
    <View style={[{
      height: this.props.containerHeight,
      flexDirection:'row',
    },this.props.containerStyle]}>
      { tabs }
    </View>
  )
};

};
