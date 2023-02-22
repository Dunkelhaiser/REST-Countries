import Header from "./components/Header/Header";
import "./css/styles.css";
import Country from "./pages/country";
import Main from "./pages/main";

function App() {
    return (
        <>
            <Header />
            <main>
                {/* <Main /> */}
                <Country />
            </main>
        </>
    );
}

export default App;
