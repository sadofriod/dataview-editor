import {
  CHANGE_COMPONENT_BOUND,
  ChangeComponentBoundType,
  ChangeComponentBoundReturn,
  UPDATE_COMPONENT_OPTION,
  UPDATE_COMPONENT_STYLE,
  UpdateComponentOptionReturn,
  UpdateComponentStyleReturn,
  ComponentsOption,
  ComponentsStyle,
  Components,
  ADD_NEW_COMPONENT,
  AddNewComponentReturn,
  SELECT_COMPONENT,
  UPDATE_COMPONEN,
  UPDATE_COMPONENT_BY_FORN_ITEM
} from './actionType';

export const changeComponentBound = (payload: ChangeComponentBoundType = { canvasPart: 'bottom', canvasType: 'Traditional' }): ChangeComponentBoundReturn => {
  return {
    type: CHANGE_COMPONENT_BOUND,
    payload: payload
  }
}

export const selectComponent = (payload: string) => {
  return {
    type: SELECT_COMPONENT,
    payload: payload
  }
}

export const updateComponentOption = (payload: ComponentsOption): UpdateComponentOptionReturn => {
  return {
    type: UPDATE_COMPONENT_OPTION,
    payload: payload
  }
}
export const updateComponentStyle = (payload: ComponentsStyle): UpdateComponentStyleReturn => {
  return {
    type: UPDATE_COMPONENT_STYLE,
    payload: payload
  }
}
export const updateComponent = (payload: Components): { type: string, payload: Components } => {
  return {
    type: UPDATE_COMPONEN,
    payload: payload
  }
}
export const updateComponentByFormItem = (payload: any) => {
  return {
    type: UPDATE_COMPONENT_BY_FORN_ITEM,
    payload: payload
  }
}
export const addNewComponent = (payload: Components): AddNewComponentReturn => {
  return {
    type: ADD_NEW_COMPONENT,
    payload: payload
  }
}