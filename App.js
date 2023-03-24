import React from 'react';
import { StyleSheet, Dimensions, View, Button } from 'react-native';
import * as openAnything from 'react-native-openanything';



function App() {
    return(
        <View>
            <Button title = "Open Pdf"
              onPress = {()=> openAnything.Pdf("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf")}
            >

            </Button>
        </View>
    )
}

export default App;

