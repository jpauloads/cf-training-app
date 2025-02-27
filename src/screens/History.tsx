import { HistoryCard } from "@components/HistoryCard";
import { ScreenHeader } from "@components/ScreenHeader";
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { useState } from "react";
import { SectionList } from "react-native";

export function History() {
  const [exercices, setExercices] = useState([
    {
      title: "25/02/2025",
      data: ["Push Up", "Squat"],
    },
    {
      title: "26/02/2025",
      data: ["Deadlift"],
    },
    {
      title: "26/02/2025",
      data: ["Power Clean", "Double Under"],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de treinos" />

      <SectionList
        sections={exercices}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color="$gray200" fontSize="$md" mt="$10" mb="$3">
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 20, paddingBottom: 100 }}
        contentContainerStyle={
            exercices.length === 0 && { flex: 1, justifyContent: "center" }
        }
        ListEmptyComponent={() => <Text color="$gray100" fontSize="$lg" textAlign="center">Nenhum exercício registrado ainda</Text>}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
