# rn-tab-bar

![Example One](./tabbar.gif "Tab Bar")


React-Native tab bar, optional text with icons as well.

Can use local icons or Font Awesome icons

`npm install rn-tab-bar --save`
`npm install react-native-vector-icons --save`
`react-native link`


### Props
| Prop | Type | Description | Required |
| --- | --- | --- |
| containerHeight | number | height of the tab bat container | **YES** |
| iconHeight | number | height of the icons within the tab bar | **YES**
| selectedColor | string | the color of the icon when it is selected | **YES** |
| unselectedColor | string | the color of the icon when it is not selected | **YES** |
| tabs | array of objects  | the tabs to render SEE TAB STRUCTURE | **YES**
| containerStyle | object | styles applied to the tab bar container | no |

##### Tab Structure
| Key | Value | Description | Required |
| --- | --- | --- |
| localIcon | boolean | render a local icon in lieu of FontAwesome icon | **YES** |
| iconSource | string (FontAwesome Icon name) or require('../Folder/file.ext') | name of the FontAwesome Icon or the location of the local icon to render | **YES** |
| isSelected | boolean | should this tab be colored as selected | **YES**|
| onPress | function | called when the tab is pressed, use this to update you component to respond to tab changes | **YES** |
| text | string | optionally display text under the icon | no |
| textStyle | object | optionally style the text | no |


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
