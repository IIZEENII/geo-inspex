import { Image, StyleSheet, Platform, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { InspectionEventCard } from "@/features/inspection-events/ui/inspection-event-card";
import { ThemedScrollView } from "@/components/themed-scroll-view";

export default function EventsScreen() {
  return (
    <ThemedScrollView
      style={{
        paddingHorizontal: 12,
        paddingTop: 12,
        display: "flex",
        gap: 12,
      }}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Eventos 1</ThemedText>
        <HelloWave />
      </ThemedView>

      {Array(10)
        .fill("")
        .map((_, index) => (
          <InspectionEventCard
            key={index}
            name="test"
            totalTours={12}
            progressPercent="53%"
            startDate="12/12/2025"
            endDate="24/12/2025"
          />
        ))}
    </ThemedScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
