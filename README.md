# Mood Data Entry and Visualization Screen

This app demonstrates a simple mood and feeling documentation process, with visualization. It was developed using an [Expo](https://docs.expo.dev/) managed workflow, and custom components. More specifically, it uses the [expo-cli](https://docs.expo.dev/workflow/expo-cli/), and the Expo Go app on your mobile device. This app was initialized as per the instructions on the [Expo website](https://docs.expo.dev/get-started/create-a-new-app/).

<!-- ![Alt Text](https://github.com/orphefs/mood-recording-app/blob/main/assets/app_workflow.gif) -->
<img src="https://github.com/orphefs/mood-recording-app/blob/main/assets/app_workflow.gif" width="200" />

## Prerequisites

- [Android Studio and Android SDK](https://developer.android.com/studio)
- [Expo](https://expo.dev/)

## Folder structure

This app follows a very simple structure:

- `assets`: Asset folder to store all images, vectors, etc.
- `components`: Folder to store any common component that is used through the app
- `screens`: Folder to store screens used through the app
- `config`: Folder to store various global configuration files
- `App.js`: Main component that starts the whole app.
- `index.js`: Entry point of the application as per React-Native standards.

## Installation

To install, run `yarn install` from the root folder.

## Usage

To run, run `expo start` or `yarn start` from the root folder.

## Additional Notes

- New feelings can be added in a modular way, by modifying the object in `feelings.js` accordingly.
- State management tools like Redux were deemed unnecessary in this case, as the objective was to also minimize state variables as much as possible to improve readability and maintainability.
- Form validation was not used, as there was no requirement for communication with a backend service.
