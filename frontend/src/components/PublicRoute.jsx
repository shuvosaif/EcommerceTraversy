import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const PublicRoute = () => {
  const { userInfo } = useSelector((state) => state.auth)
  console.log({ PrivateRoute: userInfo })
  return !userInfo?._id ? <Outlet /> : <Navigate to='/shipping' replace />
}

export default PublicRoute
