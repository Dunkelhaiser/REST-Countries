import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import Loader from "./components/Loader/Loader";
import "./css/styles.css";
import Main from "./pages/main";

const NotFound = lazy(() => import("./pages/notFound"));
const CountryPage = lazy(() => import("./pages/country"));

function App() {
    return (
        <>
            <Header />
            <main>
                <Suspense
                    fallback={
                        <main>
                            <Layout className="country">
                                <Loader />
                            </Layout>
                        </main>
                    }
                >
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/:id" element={<CountryPage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </main>
        </>
    );
}

export default App;
