# Personal Expense Tracker

A simple mobile and web expense tracker built with React Native and Expo. It lets users record daily expenses, organize them by category, view the running total, and remove entries when needed.

## Features

- Add an expense with a description, amount, and category
- Validate required fields and positive amounts
- Display the total amount of all expenses
- View expenses in a clear list
- Delete individual expenses
- Choose from Food, Transportation, Education, Entertainment, and Other
- Supports Android, iOS, and web through Expo

## Preview

The app includes:

- A blue header with the application title
- A total expenses summary card
- An expense entry form
- A categorized expense list with delete actions

## Technologies

- React Native
- Expo
- JavaScript
- `react-native-picker-select`

## Project Structure

- `App.js` - application entry point
- `ExpenseTracker.js` - application state and total calculation
- `ExpenseForm.js` - expense input and validation
- `ExpenseList.js` - expense list and delete actions
- `styles.js` - shared application styles

## License

This project is for educational and personal use.
