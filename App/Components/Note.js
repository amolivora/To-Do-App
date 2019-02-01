import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Image,Dimensions
} from "react-native";
import { Icon } from "react-native-elements";
import {widthPercentageToDP, heightPercentageToDP} from 'react-native-responsive-screen';
const win= Dimensions.get('window');
export default class Note extends Component {
  render() {
    if (this.props.val.url1 == "") {
      return (
       
        <View key={this.props.keyval} style={styles.note}>
         <View>
          <TouchableOpacity onPress={this.props.editMethod}>
          <Text style={styles.noteText}>{this.props.val.date}</Text>
          <Text style={styles.noteText2}>{this.props.val.utitleval}</Text>
          <Text style={styles.noteText1} multiline={true} numberOfLines={3}>{this.props.val.note}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.deleteMethod}
            style={styles.noteDeletee}
          >
            <Icon name="delete" color="#676261" />
          </TouchableOpacity>
        </View>
          <View style={{flexDirection: "row"}}>
          {/* <TouchableOpacity
            onPress={this.props.editMethod}
            style={styles.noteDeletee1}
          >
            <Icon name="edit" />
          </TouchableOpacity> */} 
          
          </View>
        </View>
      );
    } else {
      return (
        <View key={this.props.keyval} style={styles.note}>
        <View>
          <TouchableOpacity onPress={this.props.editMethod}>
          <Text style={styles.noteText} >{this.props.val.date}</Text>
          <Text style={styles.noteText2}>{this.props.val.utitleval}</Text>
          <Text style={styles.noteText1}  multiline={true} numberOfLines={3}>{this.props.val.note}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this.props.deleteMethod}
             style={styles.noteDelete}
          >
            <Icon name="delete" color="#676261"/>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:"center"}}>
            <Image
              source={{ uri: this.props.val.url1 }}
              style={{
                width: widthPercentageToDP('44%'),
                height: win.height/4.8,
                paddingLeft:20,
                paddingBottom:10,
                paddingTop:10,
                 justifyContent: "center",
                 alignItems: "center"
              }}
            />
         </View>
        </View>
      );
    }
  }
}
const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding:0,
    paddingBottom:10,
    //borderBottomWidth: 2,
    //borderBottomColor: "#ededed"
  },

  noteText1: {
    paddingTop:10,
    paddingLeft:15,
    paddingRight: 10,
    paddingBottom:10,
    //fontWeight:"bold",
    fontSize:14,
    fontFamily:"serif"
    //borderLeftWidth: 5,
    //borderLeftColor: "black"
  },

  noteText: {
    paddingLeft:10,
    paddingLeft:10,
    paddingRight: 30,
    fontFamily:"serif"
    //borderLeftWidth: 5,
    //borderLeftColor: "black"
  },
  noteText2: {
    paddingLeft:10,
    paddingLeft:10,
    paddingRight: 30,
    fontFamily:"serif",
    fontSize:16,
    fontWeight:"bold",
    //borderLeftWidth: 5,
    //borderLeftColor: "black"
  },
  noteDeletee: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    padding:3,
    top:1,
    //bottom: 10,
    right :10
  },
  noteDeletee1: {
    position: "relative",
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "transparent",
    padding:5,
    top: 5,
    //bottom: 10,
    left:5
  },
 
  noteDeletee2: {
    position: "relative",
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "transparent",
    padding:5,
    top:5,
    //bottom: 10,
    left:5
  },

  noteDelete: {
    position: "absolute",
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "transparent",
    padding: 3,
    top:1,
    //bottom: 10,
    right:10
  },
  noteDelete1: {
    position: "relative",
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "transparent",
    padding: 5,
    top: 5,
   // bottom: 10,
    left:5
  },
  noteDelete2: {
    position: "relative",
    //justifyContent: "center",
    //alignItems: "center",
    backgroundColor: "transparent",
    padding: 5,
    top: 5,
    //bottom: 10,
    left: 5
  },
  noteDeleteText: {
    color: "white"
  }
});