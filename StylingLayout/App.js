import React from "react";
import {View, Text} from 'react-native';

const viewStyles = {


};

const HelloWorldComponent = () => {
  return (
    <View style = {{
      backgroundColor: 'pink',
      flex: 0.5,
      flexDirection: 'row',
      justifyContent: 'flex-end', //flexDirection ile paralel hizada
      alignItems: 'center' //flexDirection'a dik hizada
    }}>
      {/* {yorum} */}
      <Text>Hello World</Text>
    </View>
  );
};
//tekil exportlar
//bir sürü tekil export olabilir
export const age = 25;
export const func = () =>{
//asdassa
;}

//default export
//sadece bir tane default export olur
export default HelloWorldComponent;