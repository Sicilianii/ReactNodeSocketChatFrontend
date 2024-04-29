import React, {FC, useRef, useState} from 'react';

import './_MyProfileChangeFullName.scss'
import useFocusInput from "../../lib/hooks/useFocusInput";

interface IMyProfileChangePlace {
    children?: React.ReactNode,
    fontSizePlace?: string,
    widthPlace?: string,
    changeFuncPlace: (name: string) => void
}

interface InitialName {
    value: string,
    statusChanges: boolean,
    newValue: string
}

const MyProfileChangePlace:FC<IMyProfileChangePlace> = (
    {
        children,
        fontSizePlace = '18px',
        widthPlace = '150px',
        changeFuncPlace
    }) => {

    const [name, setName] = useState<InitialName>({
        statusChanges: false,
        value: String(children).valueOf(),
        newValue: ''
    });

    const ref = useRef<HTMLInputElement>(null);
    useFocusInput(ref.current, name.statusChanges);


    const changeNameHandler = (e?: React.ChangeEvent<HTMLFormElement>) => {
        if (e) e.preventDefault();
        if (name.newValue) changeFuncPlace(name.newValue);
    }


    return (
        <form className={'my-profile-name'} onSubmit={ (event :React.ChangeEvent<HTMLFormElement>) => changeNameHandler(event) }>
            <input
                className={'my-profile-name__inpt'}
                type="text" value={name.newValue || name.value}
                onChange={ (event:React.ChangeEvent<HTMLInputElement>)=>  setName((state: InitialName) => {return {...state, newValue: event.target.value}})  }
                disabled={!name.statusChanges} ref={ref}
                style={{
                    fontSize: fontSizePlace,
                    width: widthPlace,
                }}
                onBlur={ () => changeNameHandler()}
            />
            <button className={'my-profile-name__btn'} type={'button'} onClick={
                () => setName((state: InitialName) => {return {...state, statusChanges: !state.statusChanges}})
            } disabled={name.statusChanges}
            >
                <svg className={'my-profile-name__btn-svg'}
                     viewBox="0 0 512 512">
                    <path
                        d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"></path>
                </svg>
            </button>
        </form>
    );
}

export default MyProfileChangePlace;