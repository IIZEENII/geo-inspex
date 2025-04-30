import { Link } from "expo-router";

export default function Settings() {
  return (
    <Link
      style={{
        textAlign: 'center',
        paddingVertical: 8,
        backgroundColor: "#222",
        color: 'white',
        width: 120,
      }}
      href="/(tabs)/tours"
    >
      Ver Tours
    </Link>
  );
}
