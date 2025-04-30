import { type ScrollViewProps } from 'react-native';

import { useThemeColor } from '@/hooks/useThemeColor';
import { ScrollView } from 'react-native-gesture-handler';

export type ThemedViewProps = ScrollViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedScrollView({ style, lightColor, darkColor, ...otherProps }: ThemedViewProps) {
  const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  return <ScrollView style={[{ backgroundColor }, style]} {...otherProps} />;
}
