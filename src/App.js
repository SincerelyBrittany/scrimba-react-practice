import "./styles.css";
import Header from "./components/Header";
// import MainContent from "./components/MainContent"
import TodoContainer from "./containers/TodoContainer";
import Footer from "./components/Footer";



export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainContent /> */}
      <div className="todo-list">
        <TodoContainer />
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
}
