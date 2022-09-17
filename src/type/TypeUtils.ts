import { AxiosInstance } from "axios"
import { HTMLInputTypeAttribute } from "react"

export type GlobalContent = {
    userRole?: string,
    client?: AxiosInstance,
    allUser?: userType[] | null,
    getUsers?: (value: string) => void,
    idEventChoose?: number,
    changeIdEventChoose: (value: number) =>void,
}

export type modalPropType = {
    children: React.ReactNode,
    isActive: boolean,
    title: string,
    handleModal: ()=>void
}

export type placeType = {
    id: string,
    place_name: string
}

export type buttonPropType = {
    onClickButton: ()=>void,
    title: string,
    types: string,
    bgColor: string
}

export type eventParticipant = {
    event: event,
    participant: userType,
    status: string
}

export type inputPropType = {
    type: HTMLInputTypeAttribute,
    label: string,
    isImportant: boolean,
    collect: (value: string) => void,
    placeholder: string,
    message: string
}

export type card1PropType = {
    title: string,
    description: string,
    place: string,
    date: string,
    hour: string,
    image: string
}

export type selectPropType = {
    label: string,
    available: string[],
    defaultValue: string,
    collect: (value: string) => void
}

export type eventPropType = {
    type: string,
    element: event[]
}

export type userType = {
    id: string,
    ref: string,
    first_name: string,
    last_name: string,
    sex: string,
    birth_date: string,
    address: string,
    phone: string,
    email: string,
    entrance_datetime: string,
    status: string,
}

export type searchPropType = {
    placeholder: string,
    collect: (value: string)=>void,
    onClose: ()=>void
    onSearch: ()=>void,
    options: string[]
}

export type event = {
    idEvent: string,
    title: string,
    description: string,
    place: string, 
    start_event_datetime: string,
    end_event_datetime: string,
    supervisor: string,
    status: string,
    image: string
}

export type NonUndefined<Type> = {
    [Key in keyof Type]-?: NonUndefined<NonNullable<Type[Key]>>;
  };