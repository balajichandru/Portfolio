import './App.css';
import Profile from './Page/Profile';
import ProjectDetails from './Page/ProjectDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* Set the basename to match your GitHub Pages URL */}
      <BrowserRouter basename="/portfolio">
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/project-details" element={<ProjectDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
