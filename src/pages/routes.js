import { useRoutes } from 'react-router-dom';
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./dashboard/Dashboard";
import Cursado from "./system/Cursos"

const Routes = () => {
return useRoutes([
{
path: '/',
element: <DashboardLayout />,
children: [
{ path: '', element: <Dashboard /> },
{ path: 'cursos', element: <Cursado /> },


]
},
])
}
export default Routes;  