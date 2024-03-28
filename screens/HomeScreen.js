import {View, Text, Button} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button
        title={'Pantalla 1'}
        onPress={() => navigation.navigate('Pantalla1')}
        // containerStyle={styles.button}
        raised={true}
      />
      <Button
        title={'Pantalla 2'}
        onPress={() => navigation.navigate('Pantalla2')}
        // containerStyle={styles.button}
        raised={true}
      />
      <Button
        title={'Pantalla 3'}
        onPress={() => navigation.navigate('Pantalla3')}
        // containerStyle={styles.button}
        raised={true}
      />
    </View>
  );
};

export default HomeScreen;
