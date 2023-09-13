## Prerequisites

This project has been developed with Expo CLI. In order to test this project you need just to download or clone the repository from BitBucket.

## Run

To run the application, follow these steps:

1. In the terminal navigate inside the quotes folder.
2. Execute: npm install command (The node version used in the project is LTS).
3. Because of the setup of the current backend with docker, for react native mobile applications the endpoint url must be the local IP address, 
   so for every machine is different. For this reason please open the RootNavigator.js file inside navigation folder, under src folder and hardcode
   your local IP address. For an expo app in this early development stage a physical device that you will choose to test the app cannot access the 
   wifi network and thus get the IP address in order to be automatically added. In general this is not happening because the endpoints have a fixed url. 
4. Execute: npx expo start, in order to start the development server of expo.
5. If you want to use Xcode simulator or Android studio simulator, you have to have installed either of these tools. After the correct setup of both simulator platforms following the documentation, to run on ios simulator you have to press either the i button after the npx expo start command to open the default iOS simulator or press shift + i to choose your desired device. To run on Android simulator you press the a button after you have launched the virtual device from Android studio.
6. If you want to use a physical device either an iPhone or Android one, you have to install the Expo Go app. On an iPhone you have to scan the QR code with the phone's camera app and in the popup screen choose Expo Go. On an Android phone you can scan from within the Expo Go app and once again choose the Expo Go option when the pop up arise.

## References

[1] Expo site: https://docs.expo.dev/more/expo-cli/
[2] Create and manage virtual android device: https://developer.android.com/studio/run/managing-avds
[3] Xcode download: https://developer.apple.com/xcode/resources/
Also rosetta 2 is required for xcode simulator: Execute this command on terminal softwareupdate --install-rosetta
