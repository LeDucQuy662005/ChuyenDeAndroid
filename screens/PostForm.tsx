import React, { useState } from "react";
import Checkbox from "expo-checkbox";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

const PostForm = ({ navigation }: { navigation: any }) => {
  const [title, setTitle] = useState("");
  const [isFree, setIsFree] = useState(false);
  const [price, setPrice] = useState("");
  const [images, setImages] = useState<string[]>([]);

  const handleUploadImage = () => {
    // TODO: tích hợp thư viện image picker ở đây
    alert("Chức năng upload hình ảnh đang phát triển 🚀");
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="close" size={24} color="white" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Đăng tin</Text>
        <View style={{ width: 24 }} /> 
      </View>

      <ScrollView style={{ flex: 1 }}>
        {/* Danh mục */}
        <TouchableOpacity style={styles.dropdown}>
          <Text style={styles.dropdownText}>
            Danh mục <Text style={{ color: "orange" }}>★</Text>
          </Text>
          <FontAwesome6 name="chevron-down" size={20} color="black" />
        </TouchableOpacity>

        {/* Thông tin chi tiết */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Thông tin chi tiết</Text>
          <Text style={styles.sectionSub}>
            Xem thêm về thông tin Quy Định đăng tin App
          </Text>
        </View>

        {/* Upload hình ảnh */}
        <TouchableOpacity style={styles.uploadBox} onPress={handleUploadImage}>
          <MaterialCommunityIcons name="camera" size={24} color="black" />
          <Text style={{ marginLeft: 8, color: "#666" }}>
            Đăng từ 01 đến 04 hình
          </Text>
        </TouchableOpacity>
        <View style={styles.imageRow}>
          {images.map((uri, idx) => (
            <Image key={idx} source={{ uri }} style={styles.imagePreview} />
          ))}
        </View>

        {/* Tiêu đề */}
        <TextInput
          style={styles.input}
          placeholder="Tiêu đề đăng"
          value={title}
          onChangeText={setTitle}
        />

        {/* Checkbox miễn phí */}
       <TouchableOpacity 
  style={{ flexDirection: "row", alignItems: "center" }} 
  onPress={() => setIsFree(!isFree)}
>
  <MaterialCommunityIcons
    name={isFree ? "checkbox-marked" : "checkbox-blank-outline"}
    size={24}
    color={isFree ? "#9D7BFF" : "gray"}
  />
  <Text style={{ marginLeft: 8 }}>Tôi muốn tặng miễn phí</Text>
</TouchableOpacity>

        {/* Giá bán */}
        {!isFree && (
          <TextInput
            style={styles.input}
            placeholder="Giá bán"
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
          />
        )}

        {/* Buttons */}
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.previewButton}>
            <Text style={{ color: "orange" }}>Xem tin trước</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.postButton}>
            <Text style={{ color: "#fff" }}>Đăng tin</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default PostForm;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    backgroundColor: "#8c7ae6",
  },
  headerTitle: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    margin: 10,
    padding: 10,
    alignItems: "center"
  },

  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 12,
    margin: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  dropdownText: { fontSize: 14 },

  section: { padding: 12, backgroundColor: "#eee" },
  sectionTitle: { fontWeight: "bold", marginBottom: 4 },
  sectionSub: { fontSize: 12, color: "#666" },

  uploadBox: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "orange",
    padding: 12,
    margin: 10,
    borderRadius: 5,
  },
  imageRow: { flexDirection: "row", marginLeft: 10 },
  imagePreview: { width: 60, height: 60, marginRight: 8, borderRadius: 5 },

  input: {
    borderWidth: 1,
    borderColor: "orange",
    margin: 10,
    borderRadius: 5,
    padding: 10,
  },

  checkboxRow: { flexDirection: "row", alignItems: "center", margin: 10 },

  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  previewButton: {
    borderWidth: 1,
    borderColor: "orange",
    padding: 12,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },
  postButton: {
    backgroundColor: "orange",
    padding: 12,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },
});
