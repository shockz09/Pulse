import { MainDashboard } from "@/components/components-main-dashboard"
//import { OktoProvider, BuildType } from 'okto-sdk-react';
import OktoWrapper from './OktoWrapper'
import LoginPage from '../components/login'
export default function Page() {
  return (
    <OktoWrapper>
      <MainDashboard /> 
      {/* //<LoginPage /> */}
    </OktoWrapper>
  )
}