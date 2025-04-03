
import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { toggleState } from '../toolkit/store';
import useStore from '../hooks/useStore';

const ToggleButton = () => {
    // const dispatch = useDispatch();
    // const isOn = useSelector((state) => state.toggle.isOn);

    const { isOn, toggleState } = useStore();

    return (
        <div>
            <h1>{isOn ? 'Включено' : 'Выключено'}</h1>
            <button onClick={toggleState}>Переключить</button>
        </div>
    );
};

export default ToggleButton;
