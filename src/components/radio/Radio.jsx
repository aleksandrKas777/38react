import React, {useState} from 'react';
import 'antd/dist/antd.css';
import { Radio } from 'antd';
import './index.css';

export const RadioComponent = () => {
    const [value, setValue] = useState(1);

    const onChange = e => {
        setValue(e.target.value);
    };

    return (
        <div id={'radio'}>
            <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
            </Radio.Group>
            <p>{value}</p>
        </div>
    );
};

