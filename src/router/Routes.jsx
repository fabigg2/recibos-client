
import { Routes, Route } from "react-router-dom"
import { CreateReceipt } from "../pages/CreateReceipt"
import { ViewReceipt } from "../pages/Dashboard"
import { EditReceipt } from "../pages/EditReceipt"
import { Home } from "../pages/Home"
import { Login } from "../pages/Login"
import { SignUp } from "../pages/SignUp"
import { path } from "./path"
import { PrivateRoutes } from "./PrivateRoutes"
import { PublicRoutes } from "./PublicRoutes"

export const Router = () => {
  return (
    <Routes>
      <Route
        path={path.home}
        element={
          <PublicRoutes>
            <Home />
          </PublicRoutes>}
      />

      <Route
        path={path.logIn}
        element={
          <PublicRoutes>
            <Login />
          </PublicRoutes>}
      />

      <Route
        path={path.signUp}
        element={
          <PublicRoutes>
            <SignUp />
          </PublicRoutes>}
      />

      <Route
        path={path.dashboard}
        element={
          <PrivateRoutes>
            <ViewReceipt />
          </PrivateRoutes>}
      />

      <Route
        path={path.createRec}
        element={
          <PrivateRoutes>
            <CreateReceipt />
          </PrivateRoutes>}
      />

      <Route
        path={path.updateRec}
        element={
          <PrivateRoutes>
            <EditReceipt />
          </PrivateRoutes>}
      />
      
    </Routes>
  )
}
