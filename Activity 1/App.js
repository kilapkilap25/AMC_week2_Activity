import React from 'react';
import {View, Text, Image, ScrollView, TextInput} from 'react-native';

const App = () => {
  return (
    <ScrollView>
      <Text style={{textAlign: 'center'}}>Mark John M. Kilapkilap</Text>
      <View>
        <Text style={{textAlign: 'center'}}>IT-302</Text>
        <Image
          source={{
            uri: 'https://i.cartoonnetwork.com/prismo/props/chars/b10classic_RemixCharacterHead_1015x1068.png',
          }}
          style={{width: 200, height: 200, alignSelf: 'center'}}
        />
      </View>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
    </ScrollView>
  );
};

export default App;