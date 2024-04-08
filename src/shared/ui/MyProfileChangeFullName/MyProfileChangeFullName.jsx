import React, {useEffect, useRef, useState} from 'react';

function MyProfileChangePlace({
  children,
  changeFuncPlace,
  fontSizePlace = '18px',
  widthPlace = '150px',
}) {

    const [name, setName] = useState({
        statusChanges: false,
        value: children,
        newValue: ''
    });
    const ref = useRef(null);
    const changeNameHandler = (e) => {
        e.preventDefault();
        changeFocus(false);
        if (name.newValue) changeFuncPlace(name.newValue);
    }
    const changeFocus = (e) => {
        setName( pervstate => {
            return {...pervstate, statusChanges: e}
        });
    }

    const changeName = (value) => {
        setName( pervstate => {
            return {...pervstate, newValue: value}
        });
    }

    useEffect(() => {
        if (name.statusChanges === true) { ref.current.focus() } else { ref.current.blur() }
    }, [name.statusChanges]);

    return (
        <form className={'my-profile-name'} onSubmit={ (event) => changeNameHandler(event) }>
            <input
                className={'my-profile-name__inpt'}
                type="text" value={name.newValue || name.value}
                onChange={ (event)=> { changeName(event.target.value) }}
                disabled={!name.statusChanges} ref={ref}
                style={{
                    fontSize: fontSizePlace,
                    width: widthPlace,
                }}
                onBlur={ (event) => changeNameHandler(event)}
            />
            <button className={'my-profile-name__btn'} type={'button'} onClick={ ()=> changeFocus(true) } disabled={name.statusChanges}
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