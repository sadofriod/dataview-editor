import * as action from '../actions/actionType';
import KeyForMap from '../../utils/useKeyForMap';
import uuid from 'uuid';
import { fromJS,Map } from 'immutable';

interface actionPayloadType extends action.ComponentsProperty, action.ChangeComponentBoundType, action.ComponentsOption, action.ComponentsStyle { };

interface actionsType {
    type: string;
    payload: actionPayloadType
};

export interface defaultStateType {
    canvasType: "Traditional" | "CrossDivision"
    canvasTitle: "Traditional" | "CrossDivision",
    canvasName: "传统" | "十字",
    canvasId: string,
    canvasHeigh: string | number,
    canvasWidth: string | number,
    canvasPart: string;
    components:Array<action.Components>;
    
}

const defaultState: defaultStateType = {
    canvasType: "Traditional",
    canvasTitle: "Traditional",
    canvasName: "传统",
    canvasId: "",
    canvasHeigh: "",
    canvasWidth: "",
    canvasPart: "bottom",
    components: [{
        componentId: uuid(),
        componentTitle: "",
        componentName: "",
        isSelected: true,
        property: {
            style: {},
            option: {}
        }
    }]
};

export const componentStateManager = (state:Map<string,any> = fromJS(defaultState), actions: actionsType) => {
    switch (actions.type) {
        case action.INIT_STATE:
            return state;
        case action.CHANGE_COMPONENT_BOUND:
            // state.canvasPart = actions.payload.canvasPart;
            state = state.set("canvasPart",actions.payload);
            return state;
        case action.UPDATE_COMPONENT_OPTION:
            // const componentsSet = KeyForMap(state.components);
            console.log(state);
            
            const components = state.getIn(["components"]);
            const currentIndex = components.findIndex((item: any) => item.get("isSelected"));
            // const currentComponent = components.findIndex((item: any) => item.get("isSelected"));
            state = state.setIn(["components",currentIndex,"property","option"],actions.payload);
            return state
        default:
            return state
    }
}