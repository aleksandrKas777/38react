import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Switch } from 'antd';


export const SwitchComponent = () => {
    function onChange(checked) {
        console.log(`switch to ${checked}`);
}
    return(
        <Switch defaultChecked onChange={onChange} />
    )

}
