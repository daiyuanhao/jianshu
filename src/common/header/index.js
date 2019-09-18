import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import  { actionCreators } from './store';
import  { actionCreators as loginActionCreators } from '../../pages/login/store';
import { 
  HeaderWrapper, 
  Logo, 
  Nav,
  NavItem,
  SearchWrapper,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  Addition,
  Button,
} from './style';


class Header extends Component {

  getLIstArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const newList = list.toJS();
    const pageList = [];
    if(newList.length){
      for(let i= (page-1) * 10 ;i<page*10;i++){
        pageList.push(
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }
    if (focused || mouseIn) {
      return (
        <SearchInfo 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={()=>{handleChangePage(page, totalPage)}}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
              {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }
    else return null;
  }

  render(){
    const { focused, handleInputFocus, handleInputBlur, list, login, logout} = this.props;
    return (
      <HeaderWrapper>
        <Link to='/'>
          <Logo />
        </Link>
        <Nav>
          <NavItem className='left active'><span className="iconfont iconzhinanzhen"></span>首页</NavItem>
          <NavItem className='left'><span className="iconfont icondownload"></span>下载App</NavItem>
          {
            login ? <NavItem onClick={logout} className='right'>退出</NavItem> : 
            <Link to="/login"><NavItem className='right'>登录</NavItem></Link>
          }
          <NavItem className='right'>
            <i className="iconfont iconAa"></i>
          </NavItem>
          <SearchWrapper>
            <NavSearch 
              className={focused ? 'focused' : ''} 
              onFocus={() => handleInputFocus(list)}
              onBlur={handleInputBlur}
            />
            <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe6e4;</i>
            { this.getLIstArea() }
          </SearchWrapper>
        </Nav>
        <Addition>
          <Link to='/write'>
            <Button className='writting'>
              <span className="iconfont iconicon-checkin"></span>写文章
            </Button>
          </Link>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispatch = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage){
      if(page < totalPage){
        dispatch(actionCreators.changePage(page + 1));
      }
      else {
        dispatch(actionCreators.changePage(1));        
      }
    },
    logout(){
      dispatch(loginActionCreators.logout());
    }
  }
}

export default connect(mapState,mapDispatch)(Header);