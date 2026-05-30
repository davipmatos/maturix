import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { AppLayout } from "./components/layout/AppLayout";
import { DashboardPage } from "./pages/DashboardPage";
import { AssessmentsPage } from "./pages/AssessmentsPage";
import { AssessmentDetailPage } from "./pages/AssessmentDetailPage";
import { FrameworkExplorerPage } from "./pages/FrameworkExplorerPage";
import { RecommendationsPage } from "./pages/RecommendationsPage";
import { ReportsPage } from "./pages/ReportsPage";
import { SettingsPage } from "./pages/SettingsPage";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/app" element={<AppLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="assessments" element={<AssessmentsPage />} />
        <Route path="assessments/:id" element={<AssessmentDetailPage />} />
        <Route path="framework" element={<FrameworkExplorerPage />} />
        <Route path="recommendations" element={<RecommendationsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}
