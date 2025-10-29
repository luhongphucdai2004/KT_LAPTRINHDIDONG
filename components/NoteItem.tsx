import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export interface Note {
  id: number;
  title: string;
  content: string;
  createdAt: string;
}

interface NoteItemProps {
  note: Note;
  onPress?: () => void;
  onLongPress?: () => void;
}

const NoteItem: React.FC<NoteItemProps> = ({ note, onPress, onLongPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.item}
    >
      <View>
        <Text style={styles.title}>{note.title}</Text>
        <Text style={styles.content} numberOfLines={2}>
          {note.content}
        </Text>
        <Text style={styles.date}>{note.createdAt}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NoteItem;

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#222",
  },
  content: {
    fontSize: 14,
    color: "#555",
    marginTop: 4,
  },
  date: {
    fontSize: 12,
    color: "#999",
    marginTop: 8,
    textAlign: "right",
  },
});
