import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import { Calendar } from 'antd';

export const CalendarComponent = () => {
    function onPanelChange(value, mode) {
        console.log(value, mode);
    }

    return (
            <div className="site-calendar-demo-card">
                <Calendar fullscreen={false} onPanelChange={onPanelChange} />
            </div>
        )

}

