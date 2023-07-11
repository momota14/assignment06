import Header from "./components/header";
import Content from "./components/content";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col justify-between">
      <Header header={"React App"} />
      <Content />
      <Footer />
    </div>
  );
}
