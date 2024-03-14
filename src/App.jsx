import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import VideoDetailsPage from "./pages/VideoDetailsPage";

const App =()=>{
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/videos/:videoID" element={<VideoDetailsPage></VideoDetailsPage>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </>
  )
}
export default App;