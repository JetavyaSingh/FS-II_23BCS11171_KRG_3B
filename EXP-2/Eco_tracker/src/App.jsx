import { BrowserRouter , Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/login";
import DashboardAnalytics from "./pages/DashboardAnalytics";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardSummery from "./pages/DashboardSummery";
import ProtectedRoute from "./routes/ProtectedRoute";


function App(){
  return(
    <BrowserRouter>
    <Header/>
      
      <Routes>
        <Route path = "/login" element = {<Login />}></Route>
        <Route path = "/" element = {
          <ProtectedRoute>  
            <DashboardLayout></DashboardLayout>
          </ProtectedRoute>
        }></Route>
  <Route index element = {<DashboardSummery/>}/>
  <Route path = "summary" element = {<DashboardSummery/>}/>
  <Route path = "analytics" element ={<DashboardAnalytics/>}/>
      </Routes>
      </BrowserRouter>

  )
}

export default App;