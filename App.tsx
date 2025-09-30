import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ManagePostsScreen from "./screens/ManagePostsScreen";
import ChooseCategoryScreen from "./screens/ChooseCategoryScreen";
import ChooseSubCategoryScreen from "./screens/ChooseSubCategoryScreen";
import PostForm from "./screens/PostForm";

export type RootStackParamList = {
  ManagePosts: undefined;
  ChooseCategory: undefined;
  ChooseSubCategory: { category: string };
  PostForm: { category: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ManagePosts" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="ManagePosts" component={ManagePostsScreen} />
        <Stack.Screen name="ChooseCategory" component={ChooseCategoryScreen} />
        <Stack.Screen name="ChooseSubCategory" component={ChooseSubCategoryScreen} />
        <Stack.Screen name="PostForm" component={PostForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
