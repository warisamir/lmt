import './App.css'
import { networkatom,Jobatom, Messaging,Notification, totalNotificationSeletor } from './recoil'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { useMemo  } from 'react'
function App() {
  return<RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  
}
function MainApp(){
  const  networkNotificationCnt=useRecoilValue(networkatom)
const  jobNotificationCnt=useRecoilValue(Jobatom)
const MessagingCnt=useRecoilValue(Messaging)
const NotificationCnt=useRecoilValue(Notification)
const totalNotificationCnt=useRecoilValue(totalNotificationSeletor)
// const totalNotificationCnt=useMemo(()=>{
//   return networkNotificationCnt+jobNotificationCnt+MessagingCnt+NotificationCnt
// },[networkNotificationCnt+jobNotificationCnt+MessagingCnt+NotificationCnt]); 
// let finalValue= networkNotificationCnt;
// const setMessagingAtomCnt=useSetRecoilState(Messaging)
if (finalValue>100){
  finalValue="9+0";
}else
{
  finalValue=networkNotificationCnt;
}
  return (
    <> 
   <button>Home</button>
   <button>My  Network ({finalValue  })</button>
   <button>Jobs ({jobNotificationCnt})</button>
   <button>Mesaging ({MessagingCnt})</button>
   <button>Notifications ({  NotificationCnt}) </button>
   {/* <button onClick={()=>{
    setMessagingAtomCnt(c=>c+1)
   }}>Me</button> */}
   <button>ME ({totalNotificationCnt})</button>
    </>
  )
}


export default App
