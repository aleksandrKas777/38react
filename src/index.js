import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import {SelectComponent} from "./components/select/select";
import {SliderComponent} from "./components/slider/Slider";
import {RadioComponent} from "./components/radio/Radio";
import {PositionCarouselDemo} from "./components/carousel/Carousel";
import {CalendarComponent} from "./components/calendar/Calendar";
import {SwitchComponent} from "./components/switch/Switch";
import {StandaloneComponent} from "./components/standalone/Standalone";



ReactDOM.render(
    <div>
        <div>
            <div>
                <h2>Slider</h2>
                <SliderComponent/>
            </div>
            <div>
                <h2>Select</h2>
                <SelectComponent/>
            </div>
            <div>
                <h2>Radio</h2>
                <RadioComponent/>
            </div>
            <div>
                <h2>Carouse</h2>
                <PositionCarouselDemo/>
            </div>
            <div>
                <h2>Calendar</h2>
                <CalendarComponent/>
            </div>
            <div>
                <h2>Switch</h2>
                <SwitchComponent/>
            </div>
            <div>
                <h2>Standalone</h2>
                <StandaloneComponent/>
            </div>

        </div>
    </div>,
    document.getElementById('root'),
);

