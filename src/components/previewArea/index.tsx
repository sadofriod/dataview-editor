import React from 'react';
import { State, Props } from './interface';
import ApplicationViewer from '../gui/center/applicationViewer';
import ParameterTable from '../gui/rightside/parameterTable';
export default class PreviewArea extends React.Component<Props, State>{
    constructor(props: any) {
        super(props);
    }
    render() {
        return (
            <div style={{
                display: 'flex',
                height: '100vh',
                width: '78vw',
                boxSizing: 'border-box'
            }}>
                <ApplicationViewer />
                <ParameterTable />
            </div>
        )
    }
}