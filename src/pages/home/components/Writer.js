import React, { PureComponent } from 'react';
import { WriterWrapper, WriterTitle,WriterItem } from '../style';
import {connect} from 'react-redux';

class Writer extends PureComponent {
  render() {
    const {list} = this.props;
    return (
      <WriterWrapper>
        <WriterTitle className="title">
          推荐作者
          <span className="page-change">换一批</span>
        </WriterTitle>
        {
          list.map((item)=>{
            return(
              <WriterItem key={item.get('id')}>
                <img className="writer-pic" src={item.get('imgUrl')} alt="" />
                <span href="" className="name">{item.get('name')}<span className="follow">关注</span></span>
                <p>{item.get('desc')}</p>
              </WriterItem>
            )
          })
        }
      </WriterWrapper>
    );
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList'])
})

export default connect(mapState)(Writer);