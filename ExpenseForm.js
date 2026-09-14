import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import RNPickerSelect from "react-native-picker-select";
import styles from "./styles";

// Categories available for selection
const CATEGORIES = ["Food", "Transportation", "Education", "Entertainment", "Other"];

export default function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState(null);
  const [error, setError] = useState("");

  const handleAddExpense = () => {
    // Validate description
    if (!description.trim()) {
      setError("Please enter a description.");
      return;
    }

    // Validate amount is a valid positive number
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount) || numericAmount <= 0) {
      setError("Please enter a valid positive amount.");
      return;
    }

    // Validate category is selected
    if (!category) {
      setError("Please select a category.");
      return;
    }

    // Build the new expense object
    const newExpense = {
      id: Date.now().toString(),
      description: description.trim(),
      amount: numericAmount,
      category,
    };

    onAddExpense(newExpense);

    // Reset the form
    setDescription("");
    setAmount("");
    setCategory(null);
    setError("");
  };

  return (
    <View style={styles.section}>
      <Text style={styles.header}>Add New Expense</Text>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <Text style={styles.label}>Expense Description</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter expense description"
        value={description}
        onChangeText={setDescription}
      />

      <Text style={styles.label}>Amount</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />

      <Text style={styles.label}>Category</Text>
      <View style={styles.pickerContainer}>
        <RNPickerSelect
          onValueChange={(value) => setCategory(value)}
          value={category}
          placeholder={{ label: "Select a category...", value: null }}
          items={CATEGORIES.map((cat) => ({ label: cat, value: cat }))}
          style={{
            inputIOS: styles.picker,
            inputAndroid: styles.picker,
          }}
        />
      </View>

      <TouchableOpacity style={styles.addButton} onPress={handleAddExpense}>
        <Text style={styles.addButtonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
}
