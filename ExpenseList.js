import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";

export default function ExpenseList({ expenses, onDeleteExpense }) {
  return (
    <View style={styles.section}>
      <Text style={styles.header}>Expense List</Text>

      {/* Column headers */}
      <View style={styles.listHeader}>
        <View style={styles.descriptionColumn}>
          <Text style={styles.listHeaderText}>Description</Text>
        </View>
        <View style={styles.amountColumn}>
          <Text style={styles.listHeaderText}>Amount</Text>
        </View>
        <View style={styles.actionColumn}>
          <Text style={styles.listHeaderText}>Action</Text>
        </View>
      </View>

      {expenses.length === 0 ? (
        <Text style={styles.emptyText}>No expenses added yet.</Text>
      ) : (
        <ScrollView style={styles.list}>
          {expenses.map((expense) => (
            <View key={expense.id} style={styles.listItem}>
              <View style={styles.descriptionColumn}>
                <Text style={styles.expenseDescription}>{expense.description}</Text>
                <Text style={styles.expenseCategory}>{expense.category}</Text>
              </View>

              <View style={styles.amountColumn}>
                <Text style={styles.expenseAmount}>{expense.amount.toFixed(2)}</Text>
              </View>

              <View style={styles.actionColumn}>
                <TouchableOpacity
                  style={styles.deletebtn}
                  onPress={() => onDeleteExpense(expense.id)}
                >
                  <Text style={styles.deletebtntext}>Delete</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}
