import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";
import styles from "./styles";

export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);

  // Add a new expense to the list
  const handleAddExpense = (newExpense) => {
    setExpenses((prevExpenses) => [...prevExpenses, newExpense]);
  };

  // Remove an expense by id
  const handleDeleteExpense = (id) => {
    setExpenses((prevExpenses) => prevExpenses.filter((expense) => expense.id !== id));
  };

  // Calculate the total of all recorded expenses
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Personal Expense Tracker</Text>
      <Text style={styles.subtitle}>Track and manage your daily expenses</Text>

      <View style={styles.totalSection}>
        <Text style={styles.totalLabel}>Total Expenses</Text>
        <Text style={styles.totalAmount}>{totalExpenses.toFixed(2)}</Text>
      </View>

      <ExpenseForm onAddExpense={handleAddExpense} />

      <ExpenseList expenses={expenses} onDeleteExpense={handleDeleteExpense} />
    </ScrollView>
  );
}
