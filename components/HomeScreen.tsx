import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, StyleSheet, FlatList } from "react-native";
import NoteItem, { Note } from "./NoteItem";

const HomeScreen: React.FC = () => {
  const notes: Note[] = [
    {
      id: 1,
      title: "Học Expo",
      content: "Tìm hiểu cách sử dụng Expo Go và React Native.",
      createdAt: "2025-10-29",
    },
    {
      id: 2,
      title: "Dự án Note App",
      content: "Hoàn thành câu 2: tạo item hiển thị công việc cần làm.",
      createdAt: "2025-10-29",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Note App</Text>
      </View>

      <View style={styles.content}>
        <FlatList
          data={notes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <NoteItem note={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F8FA",
  },
  header: {
    paddingVertical: 20,
    alignItems: "center",
    backgroundColor: "#3A86FF",
  },
  title: {
    fontSize: 22,
    color: "#fff",
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 16,
  },
});
