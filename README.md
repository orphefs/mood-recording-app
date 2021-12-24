# Mood Data Entry and Visualization Screen

This app demonstrates a simple mood and feeling documentation process, with visualization. It was developed using an [Expo](https://docs.expo.dev/) managed workflow, and custom components. More specifically, it uses the [expo-cli](https://docs.expo.dev/workflow/expo-cli/), and the Expo Go app on your mobile device. This app was initialized as per the instructions on the [Expo website](https://docs.expo.dev/get-started/create-a-new-app/).

## Prerequisites

- [Android Studio and Android SDK](https://developer.android.com/studio)
- [Expo](https://expo.dev/)

## Folder structure

This app follows a very simple structure:

- `src`: This folder is the main container of all the code inside the application.
  - `assets`: Asset folder to store all images, vectors, etc.
  - `components`: Folder to store any common component that is used through the app
  - `screens`: Folder to store screens used through the app
- `config`: Folder to store various global configuration files
  - `App.js`: Main component that starts your whole app.
  - `index.js`: Entry point of your application as per React-Native standards.

## Installation

To install, run `yarn install` from the root folder.

## Usage

To run, run `expo start` or `yarn start` from the root folder.

## Additional Notes

New feelings can be added in a modular way, by modifying the object in `feelings.js` accordingly.
