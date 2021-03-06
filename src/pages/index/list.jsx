import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import PropTypes from 'prop-types'

import TodoCard from '../../components/todo-card';

export default class TodoCardList extends Taro.Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  handleClick(item, status) {
    if(this.props.onClickItem){
      this.props.onClickItem(item, status);
    }
  }

  render() {
    const dataList = this.props.dataList
    const listItem = dataList.map((item) => {
      return <TodoCard
        key={String(item.id)}
        item={item}
        title={item.title}
        desc={item.desc}
        status={item.status}
        onClick={this.handleClick}
      ></TodoCard>
    })
    return (
      <View>
        {listItem}
      </View>
    )
  }

}

TodoCardList.defaultProps = {
  dataList: []
}

TodoCardList.propTypes = {
  dataList: PropTypes.array,
  onClickItem: PropTypes.func,
}