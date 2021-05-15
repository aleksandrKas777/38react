import React, {useState} from 'react';
import 'antd/dist/antd.css';
import {Slider, InputNumber, Row, Col} from 'antd';

export const SliderComponent = () => {
    const [inputValue, setInputValue] = useState(1);

    const onChange = value => setInputValue(value);
    return (
        <Row>
            <Col span={12}>
                <Slider
                    min={1}
                    max={20}
                    onChange={onChange}
                    value={typeof inputValue === 'number' ? inputValue : 0}
                />
            </Col>
            <Col span={4}>
                <InputNumber
                    min={1}
                    max={20}
                    style={{margin: '0 16px'}}
                    value={inputValue}
                    onChange={onChange}
                />
            </Col>
        </Row>
    );

}


