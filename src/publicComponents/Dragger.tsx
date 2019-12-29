import React from 'react';
import { connect } from 'react-redux';
import Draggable, { DraggableEvent } from 'react-draggable';
import { defaultStateType } from '../store/reducers/componentStateManager';
import { updateComponentOption } from '../store/actions/operation';
import { stateType, UpdateComponentOptionReturn, Components, mapTypesToUnecessary } from '../store/actions/actionType';
import { any } from 'prop-types';

interface Props {
  children: React.ReactNode;
  selectComponent:Components
  updateComponentOption?(payload: {
    x: number;
    y: number;
  }): UpdateComponentOptionReturn;
}

class Dragger extends React.Component<mapTypesToUnecessary<Props>, any> {

  handlerDrag = (e: DraggableEvent, data: any) => {
    const {  updateComponentOption } = this.props;
    if (updateComponentOption) {
      updateComponentOption({
        x: data.x,
        y: data.y
      });
    }
  }
  handlerDragStop = (e: any) => {
    e.stopPropagation()
  }
  render() {
    const { children ,selectComponent} = this.props;
    return (
      <Draggable
        bounds="parent"
        defaultPosition={{ x: 0, y: 0 }}
        onDrag={this.handlerDrag}
        onStop={this.handlerDragStop}
      >
        <div style={selectComponent?.property.style} onClick={(e: any) => { e.stopPropagation() }}>{children}</div>
      </Draggable>
    )
  }
}

const mapStateToProps: any = (state: stateType, ownProps: any) => {
  let components: any = state.componentStateManager.components;
  let selectComponent:Components | undefined ;
  try {
    selectComponent= components.find((item: any) => item.isSelected);
  } catch (error) {
    console.log(error);
  }
  return {
    selectComponent: selectComponent
  }
}
const mapDispatchToProps = {
  updateComponentOption
}
export default connect<any, any, mapTypesToUnecessary<Props>>(mapStateToProps, mapDispatchToProps)(Dragger);


