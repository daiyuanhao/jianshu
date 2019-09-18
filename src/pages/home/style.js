import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow:hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
`

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`

export const ListItem = styled.div`
  overflow:hidden;
  padding: 15px 2px 20px ;
  border-bottom: 1px solid #dcdcdc;
  margin-bottom: 15px;
  .pic{
    display:block;
    float: right;
    width:150px;
    height:100px;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 450px;
  float: left;
  .title{
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc{
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`

export const RecommendItem = styled.div`
  width: 280px;
  height:50px;
  background:url(${(props)=>props.imgUrl});
  background-size:contain;
  margin-bottom: 10px;
`

export const DownloadWrapper = styled.div`
  overflow:hidden;
  display: flex;
  padding: 10px 22px;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  margin-bottom:30px;
  .pic{
    float:left;
    width:60px;
    height:60px;
    opacity: .85;
  }
  .info{
    margin:auto auto auto 7px;
    .title{
      font-size: 15px;
      color: #333;
    }
    .description{
      margin-top: 4px;
      font-size: 13px;
      color: #999;
    }
  }
`

export const WriterWrapper = styled.div`
  width: 278px;
`

export const WriterTitle = styled.div`
  margin-bottom: 5px;  
  font-size: 14px;
  color: #969696;
  .page-change{
    float: right;
  }
`

export const WriterItem = styled.div`
  overflow:hidden;
  margin-top:15px;
  .writer-pic{
    float:left;
    width:48px;
    height:48px;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-right:10px;
  }
  .name{
    display:block;
    padding-top:5px;
    font-size:14px;
    line-height: 18px;
    .follow{
      float:right;
      font-size: 13px;
      color: #42c02e;
    }
  }
  p{
    margin: 2px 0 10px 0;
    font-size: 12px;
    color: #969696;
    line-height: 16px;
  }
`

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background:#a5a5a5;
  text-align:center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`

export const BackTop = styled.div`
  position: fixed;
  right:40px;
  bottom:50px;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
`