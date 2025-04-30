import { Link, useNavigation } from "expo-router";
import { useEffect } from "react";

export default function AddTour() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerTitle: 'Add Tour' });
  }, [navigation]);

  return (
    <Link
      style={{
        textAlign: 'center',
        paddingVertical: 8,
        backgroundColor: "#222",
        color: 'white',
        width: 120,
      }}
      href="/tours"
    >
      Ver Tours
    </Link>
  );
}
