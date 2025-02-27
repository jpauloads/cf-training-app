import { ExerciseCard } from "@components/ExerciseCard";
import { Group } from "@components/Group";
import { HomeHeader } from "@components/HomeHeader";
import { HStack, Text, VStack } from "@gluestack-ui/themed";
import { Heading } from "@gluestack-ui/themed";

import { useState } from "react";
import { FlatList } from "react-native";

export function Home() {
  const [exercises, setExercises] = useState(["Push Up", "Pull Up", "Squat", "Deadlift", "Burpee"]);
  const [groups, setGroups] = useState([
    "todos",
    "vo2",
    "heavy",
    "metcon",
    "strong",
    "gym",
    "amrap",
    "emom",
  ]);
  const [groupSelected, setGroupSelected] = useState("todos");

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLocaleLowerCase() === item.toLocaleLowerCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 32, maxHeight: 40, minHeight: 40 }}
      />

      <VStack px={"$8"}>
        <HStack justifyContent="space-between" alignItems="center" mb="$5">
          <Heading color="$gray200" fontSize="$md">Exercícios</Heading>

          <Text color="$gray200" fontSize="$sm" fontFamily="$body">{exercises.length}</Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <ExerciseCard />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>

    </VStack>
  );
}
