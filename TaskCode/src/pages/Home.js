import "../App.css";
import ReactDOM from "react-dom";
import BlogList from '../components/Blog/bloglist'
import BlogDetail from '../components/Blog/blogdetail'

function Home() {
  return <div className="App">
    <BlogList/>
  </div>;
}

export default Home;
