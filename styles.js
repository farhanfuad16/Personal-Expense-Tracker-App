import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  // Main application container
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f0f0f0",
  },

  // Main application title
  title: {
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    color: "#333",
    margin: 10,
    paddingTop: 30,
  },

  // Subtitle
  subtitle: {
    fontSize: 15,
    textAlign: "center",
    color: "#666",
    marginBottom: 15,
  },

  // General section/card style
  section: {
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ced4da",

    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 5,
  },

  // Section headings
  header: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
    color: "#333",
  },

  // Input labels
  label: {
    fontSize: 16,
    marginBottom: 8,
    color: "#333",
  },

  // Text input fields
  input: {
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginBottom: 12,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#fff",
  },

  // Picker container
  pickerContainer: {
    borderColor: "#ced4da",
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 12,
    overflow: "hidden",
  },

  // Picker style
  picker: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    color: "black",
    paddingRight: 30,
  },

  // Total expense card
  totalSection: {
    marginBottom: 16,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ced4da",

    shadowColor: "grey",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,

    alignItems: "center",
  },

  // Total expense label
  totalLabel: {
    fontSize: 18,
    color: "#333",
    marginBottom: 8,
  },

  // Total expense amount
  totalAmount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1d9bf0",
  },

  // Add button
  addButton: {
    padding: 12,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#1d9bf0",
    borderRadius: 4,

    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  // Add button text
  addButtonText: {
    color: "#1d9bf0",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
  },

  // Error message
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 8,
  },

  // Expense list
  list: {
    maxHeight: 250,
  },

  // List header row
  listHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    paddingBottom: 10,
  },

  // List header text
  listHeaderText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },

  // Each expense row
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    borderBottomWidth: 1,
    borderColor: "#ccc",
    marginBottom: 8,
    paddingBottom: 8,
  },

  // Expense description column
  descriptionColumn: {
    flex: 2,
    paddingRight: 5,
  },

  // Expense amount column
  amountColumn: {
    flex: 1,
    alignItems: "center",
  },

  // Action column
  actionColumn: {
    flex: 1,
    alignItems: "flex-end",
  },

  // Expense description text
  expenseDescription: {
    fontSize: 14,
    color: "#333",
  },

  // Expense category text
  expenseCategory: {
    fontSize: 12,
    color: "#777",
    marginTop: 3,
  },

  // Expense amount text
  expenseAmount: {
    fontSize: 14,
    color: "#333",
  },

  // Delete button
  deletebtn: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "red",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },

  // Delete button text
  deletebtntext: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
  },

  // Empty list message
  emptyText: {
    textAlign: "center",
    fontSize: 15,
    color: "#777",
    paddingVertical: 15,
  },

});

export default styles;
