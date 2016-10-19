### rn-tab-bar

![Example One](./tabbar.gif "Tab Bar")


React-Native tab bar, optional text with icons as well.

Can use local icons or Font Awesome icons

`npm install rn-tab-bar --save`
`npm install react-native-vector-icons --save`
`react-native link`


##### Props
```js

containerHeight={ required Integer }
iconHeight={ required Integer }
selectedColor={ required String }
unselectedColor={ required String }
text={ optional String }
textStyle={ optional Object of styles } // color of text is taken care of
containerStyle={  optional styles for the container }
tabs={ required Array of Objects }

//    ** this is the tab structure **
{
  localIcon: bool  // true for locol icon in you file tree, false to use FontAwesome,
  isSelected: bool,
  onPress: function,
  iconSource: either a String for a FontAwesome icon, or require ('file.extension') for a localIcon
}

```

#### Example

```js

import React, { Component } from 'react';
import {
  View,
} from 'react-native'

import TabBar from 'rn-tab-bar';

export default class Example extends Component {
  constructor(){
    this.selectTab = this.selectTab.bind(this);
    super();
    this.state = {
      selectedTabs: {one:true,two:false,three:false,four:false},
    };
  };

  selectTab(tab){
    let tabs = this.state.selectedTabs;
    for (var i in tabs) {
      ( i === tab ) ? tabs[i] = true:tabs[i] = false
    };
    this.setState({selectedTabs:tabs});
  };

  render(){
    return(

      <View style={{flex:1}}>
        <View style={{flex:1}} />
        <TabBar
          containerHeight={50}
          containerStyle={{
            borderTopWidth: 1,
          }}
          iconHeight={30}
          selectedColor={'blue'}
          unselectedColor={'gray'}
          tabs={[
            {
              localIcon:false,
              iconSource: 'bicycle',
              isSelected: this.state.selectedTabs.one,
              onPress: () => this.selectTab('one')
            },
            {
              localIcon: false,
              iconSource: 'cogs',
              isSelected: this.state.selectedTabs.two,
              onPress: () => this.selectTab('two')
            },
            {
              localIcon:false,
              iconSource: 'users',
              isSelected: this.state.selectedTabs.three,
              onPress: () => this.selectTab('three')
            },
            {
              localIcon: false,
              iconSource: 'bars',
              isSelected: this.state.selectedTabs.four,
              onPress: () => this.selectTab('four')
            },
          ]}
        />      
      </View>
    )
  };



};



```
