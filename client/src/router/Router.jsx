import {BrowserRouter, Route, Routes} from "react-router-dom";
import {MallaUniversal, Landing, Configuration} from "@pages";
import {NextUIProvider} from "@nextui-org/react";

export const Router = () => {
    return (
        <BrowserRouter>
            <NextUIProvider>
                <Routes>
                    <Route path={'/'} element={<Landing/>}/>
                    <Route path={'/:specialty'} element={<MallaUniversal/>}/>
                    {/*<Route path={'/config'} element={<Configuration/>}/>*/}
                </Routes>
            </NextUIProvider>
        </BrowserRouter>
    )
}