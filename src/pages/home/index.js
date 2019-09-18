import React, { PureComponent } from 'react';
import {connect} from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Download from './components/Download';
import Writer from './components/Writer';
import {HomeWrapper,HomeLeft,HomeRight,BackTop} from './style';
import {actionCreators} from './store';

class Home extends PureComponent {

  handleScrollTop() {
    window.scrollTo(0,0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <List/>
        </HomeLeft>
        <HomeRight>
          <Recommend/>
          <Download/>
          <Writer/>
        </HomeRight>
        {this.props.showScroll ? <BackTop onClick={this.handleScrollTop}>Top</BackTop> : null}
      </HomeWrapper>
    );
  }

  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow);    
  }
  
  bindEvents(){
    window.addEventListener('scroll', this.props.changeScrollTopShow);
  }
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    }else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
})

export default connect(mapState, mapDispatch)(Home);