import "./styles.css";
import Header from "./components/Header"
// import MainContent from "./components/MainContent"
import TodoItem from "./components/TodoItem"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <MainContent /> */}
      <TodoItem />
      <Footer />
    </div>
  );
}
