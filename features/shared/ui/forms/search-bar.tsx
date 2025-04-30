// ExtensibleSearchBar.js
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, ViewStyle, TextStyle } from 'react-native';

interface ExtensibleSearchBarProps {
  placeholder?: string;
  value?: string; // Allow controlled component usage
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  containerStyle?: ViewStyle;
  inputContainerStyle?: ViewStyle; // Style for the inner container around TextInput
  inputStyle?: TextStyle; // Style for the TextInput itself
  leftAccessory?: React.ReactNode; // Content to render on the left (Extensibility!)
  rightAccessory?: React.ReactNode; // Content to render on the right (Extensibility!)
  [key: string]: any; // Allow passing other TextInput props
}

export function SearchBar({
  placeholder = 'Search...',
  value: controlledValue,
  onChangeText,
  onSubmitEditing,
  containerStyle,
  inputContainerStyle,
  inputStyle,
  leftAccessory,
  rightAccessory,
  ...otherTextInputProps // Catch any other props like keyboardType, autoCapitalize, etc.
}: ExtensibleSearchBarProps) {
  // Manage internal state only if not used as a controlled component
  const [internalValue, setInternalValue] = useState('');
  const isControlled = controlledValue !== undefined;
  const displayValue = isControlled ? controlledValue : internalValue;

  const handleTextChange = (text: string) => {
    if (!isControlled) {
      setInternalValue(text);
    }
    onChangeText(text); // Always call the provided onChangeText prop
  };

  return (
    <View style={[styles.container, containerStyle]}>
      {/* Left Accessory Slot - Open for Extension */}
      {leftAccessory}

      <View style={[styles.inputContainer, inputContainerStyle]}>
        <TextInput
          style={[styles.input, inputStyle]}
          placeholder={placeholder}
          value={displayValue}
          onChangeText={handleTextChange}
          onSubmitEditing={onSubmitEditing}
          {...otherTextInputProps} // Pass through any other TextInput props
        />
      </View>

      {/* Right Accessory Slot - Open for Extension */}
      {rightAccessory}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  inputContainer: {
    flex: 1, // Allow TextInput to take available space
    justifyContent: 'center',
  },
  input: {
    paddingVertical: 8, // Adjust padding as needed
    fontSize: 16,
  },
});