import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  ScrollView
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import EditableTimer from './components/EditableTimer';
import ToggleableTimerForm from './components/ToggleableTimerForm';

class App extends React.Component {
  navigationOptions = {
    title: "Timer"
  }
  render(){
    return (
      <SafeAreaView>
          <ScrollView style={styles.timerList}>
            <ToggleableTimerForm/> 
            <EditableTimer
              id="1"
              title="Mow the lawn"
              project="House Chores"
              elapsed="8986300"
              isRunning
            />
            <EditableTimer
              id="2"
              title="Bake squash"
              project="Kitchen Chores"
              elapsed="3890985"
              editFormOpen
            />
          </ScrollView>
          </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  appContainer: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 35,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#D6D7DA',
  }, title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  timerList: {
    paddingBottom: 15,
  },
});

export default App;
