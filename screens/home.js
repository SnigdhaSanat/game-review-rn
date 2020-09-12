import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Modal,
  StyleSheet,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState("false");
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, breath of fresh air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta catch Them All(again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: "Not so 'final' fantasy",
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <Modal visible={modalOpen} animationType="slide">
        <View style={styles.modalContent}>
          <MaterialIcons
            name="close"
            size={24}
            style={{ ...styles.modalToggle, ...styles.modalClose }}
            onPress={() => {
              setModalOpen(false);
            }}
          />
          <Text>Hello from the modal :)</Text>
        </View>
      </Modal>

      <MaterialIcons
        name="add"
        size={24}
        style={styles.modalToggle}
        onPress={() => {
          setModalOpen(true);
        }}
      />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    paddingTop: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  modalClose: {
    marginBottom: 0,
    marginTop: 20,
  },
  modalContent: { flex: 1 },
});