import React from 'react';

import { View, Picker, TextInput, Text } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './styles';

// Input komponenta sa validacijom, znakom postotka i odabirom razina
const CustomTextInput = ({ placeholder, onChangeText, value, level, percentage, error, onBlur, selectedValue, onValueChange, first }) => (
  <>
    <View style={[styles.container, first ? { marginTop: 5 } : { marginTop: 0 }]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        style={styles.input}
        onBlur={onBlur}
        keyboardType="phone-pad"
      />
      {percentage ? (
        <View style={{ paddingRight: 15 }}>
          <Icon
            name="percent"
            type="font-awesome"
            color="#2569fa"
            size={20}
          />
        </View>
      ) : null}
      { level ? (
        <>
          <View style={styles.border} />
          <Picker
            selectedValue={selectedValue}
            onValueChange={onValueChange}
            style={styles.width}
          >
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B" value="B" />
          </Picker>
        </>
      ) : null}
    </View>
    {error ? (
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Text style={{ color: 'white', paddingRight: 5 }}>{error}</Text>
        <Text style={{ color: 'red', fontSize: 20 }}>*</Text>
      </View>
    ) : null}
  </>
);

export default CustomTextInput;
