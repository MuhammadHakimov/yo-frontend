import { Routes, Route } from "react-router-dom";

import Tasks from "./pages/Tasks";
import Home from "./pages/Home";
import Tests from "./pages/Tests";
import Login from "./pages/authorization/Login";
import Register from "./pages/authorization/Register";
import Profile from "./pages/Profile";
import Posibles from "./pages/Posibles";
import Layout from "./Layouts/Layout";
import Lessons from "./pages/Lessons";
import FuturePlans from "./pages/Futures";
import FigmaDesigns from "./pages/FigmaDesigns";
import AdminProtectedRoute from "./components/admin/AdminProtectedRoute";
import AboutPlatform from "./pages/AboutPlatform";
import VerifyEmail from "./pages/authorization/VerifyEmail";
import ProtectedRoute from "./components/ProtectedRoute";
import MessageToAdmin from "./pages/MessageToAdmin";
import AdminLayout from "./pages/admin/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminUsers from "./pages/admin/AdminUsers";
import AdminUserDetails from "./pages/admin/AdminUserDetails";
import AdminLessons from "./pages/admin/lessons/AdminLessons";
import AddLessons from "./pages/admin/lessons/AddLessons";
import LesDetails from "./pages/admin/lessons/LesDetails";
import AdminTests from "./pages/admin/tests/AdminTests";
import AdminTasks from "./pages/admin/tasks/AdminTasks";
import TestDetail from "./pages/admin/tests/TestDetail";
import AddTest from "./pages/admin/tests/AddTest";
import Mistakes from "./pages/Mistakes";
import ChatBot from "./pages/ChatBot";
import AdminMessages from "./pages/admin/AdminMessages";
import AddTask from "./pages/admin/tasks/AddTask";
import TaskDetails from "./pages/admin/tasks/TaskDeails";
import Channels from "./pages/Channels";
import ReactHooks from "./pages/reactHooks/ReactHooks";
import HookDetails from "./pages/reactHooks/HookDetails";
import MistakesTest from "./pages/MistakesTest";
import LevelTest from "./components/LevelTest";

import History from "./pages/FrontHistory/History";
import HistoryDetails from "./pages/FrontHistory/HistoryDetails";
import People from "./pages/FrontHistory/People";
import PeopleDetails from "./pages/FrontHistory/PeopleDetails";
import Tajikistan from "./pages/FrontHistory/Tajikistan";
import HistoryLayout from "./Layouts/HistoryLayout";
import Facts from "./pages/FrontHistory/Facts";
import FactDetails from "./pages/FrontHistory/FactDetails";
import Architectures from "./pages/FrontHistory/Architectures";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/tests" element={<Tests />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/figma" element={<FigmaDesigns />} />
          <Route path="/channels" element={<Channels />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/users/:id" element={<AdminUserDetails />} />
          <Route path="/admin-message" element={<MessageToAdmin />} />
          <Route path="/react-hooks" element={<ReactHooks />} />
          <Route path="/react-hooks/hook/:id" element={<HookDetails />} />
          <Route path="/mistakes" element={<Mistakes />} />
          <Route path="/mistakes/tests" element={<MistakesTest />} />
          <Route path="/profile/level-test" element={<LevelTest />} />
        </Route>
        <Route path="/future" element={<FuturePlans />} />
        <Route path="/posibles" element={<Posibles />} />
        <Route path="/about" element={<AboutPlatform />} />
      </Route>
      <Route element={<HistoryLayout />}>
        <Route path="/history" element={<History />} />
        <Route path="/history/:id" element={<HistoryDetails />} />
        <Route path="/history/people" element={<People />} />
        <Route path="/history/people/:id" element={<PeopleDetails />} />
        <Route path="/history/tajikistan" element={<Tajikistan />} />
        <Route path="/facts" element={<Facts />} />
        <Route path="/facts/:id" element={<FactDetails />} />
        <Route path="/architecture" element={<Architectures />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/verify-email" element={<VerifyEmail />} />

      <Route element={<AdminProtectedRoute />}>
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="/admin/messages" element={<AdminMessages />} />
          <Route path="users" element={<AdminUsers />} />
          <Route path="users/:id" element={<AdminUserDetails />} />
          <Route path="lessons" element={<AdminLessons />} />
          <Route path="les-details/:id" element={<LesDetails />} />
          <Route path="add-lesson" element={<AddLessons />} />
          <Route path="lesson-edit/:id" element={<AddLessons />} />
          <Route path="tests" element={<AdminTests />} />
          <Route path="test-details/:id" element={<TestDetail />} />
          <Route path="/admin/add-tests" element={<AddTest />} />
          <Route path="/admin/add-tests/:id" element={<AddTest />} />
          <Route path="tasks" element={<AdminTasks />} />
          <Route path="add-task" element={<AddTask />} />
          <Route path="edit-task/:id" element={<AddTask />} />
          <Route path="task-details/:id" element={<TaskDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
