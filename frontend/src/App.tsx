import { Navigate, Route, Routes } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProjectBoardPage from "./pages/ProjectBoardPage";
import NotFoundPage from "./pages/NotFoundPage";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/projects/:projectId" element={<ProjectBoardPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}