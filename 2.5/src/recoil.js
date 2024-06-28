import {atom, selector} from "recoil"
export const networkatom=atom({
    key:"networkKey",
    default:1 2
})
export const Jobatom=atom({
    key:"JobKey",
    default:2
})
export const Messaging=atom({
    key:"MessagingKey",
    default:13
})
export const Notification=atom({
    key:"NotificationKey",
    default:2
})

export const totalNotificationSeletor=selector({
    key:"totalNotificationSeletorKey",
    value:(props)=>{
        const networkatomCnt=props.get(networkatom)
        const JobatomCnt=props.get(Jobatom)
        const MessagingCnt=props.get(Messaging)
        const NotificationCnt=props.get(Notification)
        return networkatomCnt+JobatomCnt+MessagingCnt+NotificationCnt
        }
})