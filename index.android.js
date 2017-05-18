/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import LoopAnimation from 'react-native-LoopAnimation';
import SideMenu3D from './view/sideMenu';

//text un item can have icon
//goto
export default class flipMenu extends Component {
  constructor(props){
    super(props);
    this.state={
      visible:false
    }
  }
  toggleVisible(){
    this.setState({visible:!this.state.visible});
  }
  render(){
    return(
      <SideMenu3D
        Visible={this.state.visible}
        Duration={1000}
        OnPress={this.toggleVisible.bind(this)}
        BackgroundView={
                        <View style={{flex:1,backgroundColor:'skyblue'}}>
                          <LoopAnimation source={{uri:'https://s-media-cache-ak0.pinimg.com/236x/c4/1c/80/c41c80078bcaadd8fd38c9dab4cdbff9.jpg',width: 600,height: 400}} duration={10000} />
                        </View>
                      }
        Items={[
          {
            text: <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width: 50, height: 50,borderRadius:25}}
                    source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
                  </View>,
            renderScene:<View style={{flex:1,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.toggleVisible()}>
                            <View>
                              <Text>RenderScene 1</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
          },{
            text: <Text style={{color:'white',paddingTop:10}}>
                    <Icon name="twitter" size={30} color="#900" /> item 2
                  </Text>,
            renderScene:<View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.toggleVisible()}>
                            <View>
                              <Text>RenderScene 2</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
          },{
            text: <Text style={{color:'red',paddingTop:10}}>
                    <Icon name="hand-o-down" size={30} color="#900" /> item 3
                  </Text>,
            renderScene:<View style={{flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.toggleVisible()}>
                            <View>
                              <Text>RenderScene 3</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
          },{
            text: <Text style={{color:'green',paddingTop:10}}>
                    <Icon name="fighter-jet" size={30} color="#900" /> item 4
                  </Text>,
            renderScene:<View style={{flex:1,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.toggleVisible()}>
                            <View>
                              <Text>RenderScene 4</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
          },{
            text: <Text style={{color:'white',paddingTop:10}}>
                    <Icon name="github-alt" size={30} color="#900" /> item 5
                  </Text>,
            renderScene:<View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.toggleVisible()}>
                            <View>
                              <Text>RenderScene 5</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
          },{
            text: <Text style={{color:'red',paddingTop:10}}>
                    <Icon name="beer" size={30} color="#900" /> item 6
                  </Text>,
            renderScene:<View style={{flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.toggleVisible()}>
                            <View>
                              <Text>RenderScene 6</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
          },{
            text: <Text style={{color:'green',paddingTop:10}}>
                    <Icon name="rocket" size={30} color="#900" /> item 1
                  </Text>,
            renderScene:<View style={{flex:1,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.toggleVisible()}>
                            <View>
                              <Text>RenderScene 1</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
          },{
            text: <Text style={{color:'white',paddingTop:10}}>
                    <Icon name="twitter" size={30} color="#900" /> item 2
                  </Text>,
            renderScene:<View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.toggleVisible()}>
                            <View>
                              <Text>RenderScene 2</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
          },{
            text: <Text style={{color:'red',paddingTop:10}}>
                    <Icon name="hand-o-down" size={30} color="#900" /> item 3
                  </Text>,
            renderScene:<View style={{flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.toggleVisible()}>
                            <View>
                              <Text>RenderScene 3</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
          },{
            text: <Text style={{color:'green',paddingTop:10}}>
                    <Icon name="fighter-jet" size={30} color="#900" /> item 4
                  </Text>,
            renderScene:<View style={{flex:1,backgroundColor:'green',justifyContent:'center',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.toggleVisible()}>
                            <View>
                              <Text>RenderScene 4</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
          },{
            text: <Text style={{color:'white',paddingTop:10}}>
                    <Icon name="github-alt" size={30} color="#900" /> item 5
                  </Text>,
            renderScene:<View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.toggleVisible()}>
                            <View>
                              <Text>RenderScene 5</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
          },{
            text: <Text style={{color:'red',paddingTop:10}}>
                    <Icon name="beer" size={30} color="#900" /> item 6
                  </Text>,
            renderScene:<View style={{flex:1,backgroundColor:'red',justifyContent:'center',alignItems:'center'}}>
                          <TouchableOpacity onPress={()=>this.toggleVisible()}>
                            <View>
                              <Text>RenderScene 6</Text>
                            </View>
                          </TouchableOpacity>
                        </View>
          }
        ]}
      />
    )
  }
}


AppRegistry.registerComponent('flipMenu', () => flipMenu);
