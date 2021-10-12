import React, { useState,useEffect } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import {Input,Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
import categoryService from "../services/categoryService";

const CategoryModal = ({modalVisible,onClose,categoryType,categoryName,categoryId,reloadHandler}) => {
    const [name, setName] = useState(categoryName);
    
    useEffect(() => {
       setName(categoryName)
    }, [categoryName])

const onSubmit = async () => {
    const payload = {
        category_type: categoryType,
        name: name
    }
    console.log(payload)
    try {
      if(categoryId){
        const res = await categoryService.updateCategory(categoryId,payload);
        if(res.data.success){
          onClose()
          reloadHandler()
        }
      }else{
        const res = await categoryService.addCategory(payload);
       if(res.data.success){
           onClose();
           reloadHandler()
       }
      }
       
    } catch (error) {
        console.log(error)
    }
}
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
              <View style={styles.closeIcon}>
              <Icon name='times' color='black' size={20} onPress={onClose}/>
              </View>
            
            <Input
                value={name}
                placeholder='Name'
                onChangeText={value => setName(value)}
                />
            <Button
              icon={<Icon name='plus' color='#ffffff' />}
              title='ADD'
              onPress={onSubmit}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:250
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  closeIcon:{
      alignSelf: 'flex-end',
      marginHorizontal: 10
  }
});

export default CategoryModal;
