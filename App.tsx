import React from 'react'
import { SafeAreaView } from 'react-native';
// import { BoxObjectModel } from './src/screens/BoxObjectModel';
import { ContadorScreen } from './src/screens/ContadorScreen';
// import { DimensionesScreen } from './src/screens/DimensionesScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
// import { FlexScreen } from './src/screens/FlexScreen';
// import { TareaScreen } from './src/screens/TareaScreen';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425B'}}>
      {/* // <HolaMundoScreen/> */}
      <ContadorScreen/>
      {/* <BoxObjectModel/> */}
      {/* <DimensionesScreen/> */}
      {/* <PositionScreen/> */}
      {/* <FlexScreen/> */}
      {/* <TareaScreen/> */}
    </SafeAreaView>
  )
}

export default App;
