import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Button, } from '@tarojs/components'
import './index.scss'

//////////////////////////////////////////////
// 图片
import ICON1 from '../../assets/icon1.png'
//////////////////////////////////////////////

export default class <%= name %> extends Component {

  config = {
    navigationBarTitleText: '<%= name %>'
  }

  constructor (props) {
    super(props)
    this.state = {
      date: new Date(),
    }
  }

  //////////////////////////////////////////////
  // life hook
  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}
  //////////////////////////////////////////////

  go = () => {
    console.log(20190715081527, '<%= name %>')
  }

  render () {
    return (
      <View className='<%= name %>'>
        <Text onClick={ this.go }>Hello <%= name %>!</Text>
      </View>
    )
  }
}