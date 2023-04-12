import React from 'react';
import { StyleSheet, Dimensions, View, Button, SafeAreaView } from 'react-native';
import * as openAnything from 'react-native-openanything';



function App() {
    return(
        <SafeAreaView>
            <View>
            <Button title = "Open Pdf"
              onPress = {()=> openAnything.Pdf("https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf")}
            >

            </Button>
        </View>
        </SafeAreaView>
    )
}

export default App;

