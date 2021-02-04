
import { Link, Route } from 'react-router-dom';

import HomeComponent from './components/A01HomeComponent';
import ProductComponent from './components/A02ProductComponent';
import ParamComponent from './components/A03ParamComponent';
import ArgsComponent from './components/A04ArgsComponent';

function App() {
  return (
    <div className="card-body">

      <div>
        <Link to="/">INDEX</Link> | &nbsp;
        <Link to="/home">HOME</Link> | &nbsp;
        <Link to="/about">ABOUT</Link> | &nbsp;
        <Link to="/product">PRODUCT</Link> | <Link to="/prod">PROD</Link> | &nbsp;
        <Link to="/param/3/data/NolBu">PARAM</Link> | &nbsp;
        <Link to="/args/10?name=NolBu&age=30&add=Seoul#ABC">PARAM</Link> | &nbsp;
      </div>
      

      <hr />
      
      {/*
        Router를 이용하기 위해서는 index.js에 라우터 사용 세팅이 먼저 되어야 
        angular { path: '', component:..} 
        web root base로 지정(/)
        이 Route를 지정한 곳에 해당 컴퍼넌트가 표시된다. (표시 영역이 별도로 없음)
      */}
      <Route path="/"         component={HomeComponent}     exact={true} />
      <Route path="/home"     component={HomeComponent} />
      <Route path="/about"    render = {() => (
                                          <div>
                                            <h3>About Component</h3>
                                            <div>This is About Component</div>
                                          </div>
                                        )} />
      <Route path={["/product", "/prod"]}     component={ProductComponent} />
      <Route path="/param/:id/data/:name"     component={ParamComponent} />
      <Route path="/args/:id"               component={ArgsComponent} />

    </div>
  );
}

export default App;
