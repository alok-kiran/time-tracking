import React from 'react';
import TimerForm from './TimerForm';
import Timer from './Timer';
import { StyleSheet } from 'react-native'

export default EditableTimer = ({ id,
  title,
  project,
  elapsed,
  isRunning,
  editFormOpen,
}) => {
  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />
  }
  return (<Timer
    id={id}
    title={title}
    project={project}
    elapsed={elapsed}
    isRunning={isRunning}
  />
  );
}

const styles = StyleSheet.create({

})