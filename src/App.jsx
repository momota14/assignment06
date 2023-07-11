import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <Header header={"React App"} />
      <Content />
      <Footer />
    </div>
  );
}
