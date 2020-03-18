import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

function onStateUpdate() {
  return new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
}

const initialState = {
  text: '',
};

const AddItem = ({addItem}) => {
  //const [text, setText] = useState('');
  const [{text}, setText] = useState(initialState);
  const textInput = useRef(null);
  const onChange = textValue => {
    setText(textValue);
  };

  const clearState = () => {
    setText({...initialState});
  };

  const handleSubmit = text => {
    addItem(text);
    onStateUpdate().then(clearState);
  };

  return (
    <View>
      <TextInput
        ref={textInput}
        placeholder="Add Item..."
        style={styles.input}
        onChangeText={onChange}
      />
      <TouchableOpacity
        style={styles.btn}
        /* onPress={() => addItem(text)} */ onPress={handleSubmit(text)}>
        <Text style={styles.btnText}>
          <Icon name="plus" size={20} /> Add Item
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    margin: 5,
  },
  btn: {
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
