import React, {useState} from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Select } from 'antd';


export const SelectComponent = () => {
    const [name, setName] = useState('lucy');

    const { Option, OptGroup } = Select;

    function handleChange(value) {
        setName(value);
    }


    return (
        <div id={'select'}>
            <Select defaultValue="lucy" style={{ width: 200 }} onChange={handleChange}>
                <OptGroup label="Manager">
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                </OptGroup>
                <OptGroup label="Engineer">
                    <Option value="Yiminghe">yiminghe</Option>
                </OptGroup>
            </Select>
            <p>{name}</p>
        </div>
    )
}
