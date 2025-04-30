import { InspectionEvent } from "../interfaces/inspection-event";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export function InspectionEventCard(inspectionEvent: InspectionEvent) {
  return (
    <ThemedView>
      <ThemedText type="subtitle" >{inspectionEvent.name}</ThemedText>
      <ThemedText>{inspectionEvent.totalTours}</ThemedText>
      <ThemedText>{inspectionEvent.progressPercent}</ThemedText>
      <ThemedText>
        {inspectionEvent.startDate} - {inspectionEvent.endDate}
      </ThemedText>
    </ThemedView>
  );
}
