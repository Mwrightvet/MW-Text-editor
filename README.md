# Progressive Web Applications (PWA) Challenge: Text Editor

## Table of Contents

- [Overview](#overview)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Demo](#demo)
- [Conclusion](#conclusion)

## Overview

Welcome to the Text Editor project, a Progressive Web Applications (PWAs) with data persistence capabilities. This project implements modern web technologies, including IndexedDB for data storage, service workers for offline functionality, and webpack for bundling assets.

## User Story

As a developer, you want to create and access notes or code snippets with or without an internet connection, ensuring reliability and accessibility for later use.

## Acceptance Criteria

- Upon opening the application in the editor, a client-server folder structure should be visible.
- Running `npm run start` from the root directory should start up the backend and serve the client.
- The text editor application, when executed from the terminal, should have JavaScript files bundled using webpack.
- Webpack plugins should generate HTML, service worker, and manifest files.
- Next-gen JavaScript should be used, ensuring the text editor functions error-free in the browser.
- IndexedDB should immediately create a database storage upon opening the text editor.
- Content entered in the text editor should be saved automatically with IndexedDB when the DOM window is unfocused.
- Upon reopening the text editor, content should be retrieved from IndexedDB.
- Clicking the Install button should enable downloading the web application icon to the desktop.
- The web application should have a registered service worker using workbox.
- Static assets should be pre-cached upon loading, along with subsequent pages and assets.
- Proper build scripts for a webpack application should be available upon deployment to Render.

## Demo

Refer to the provided animation and images demonstrating the application's functionality, including the installation process, manifest file, registered service worker, and IndexedDB storage.
![image](https://github.com/Mwrightvet/MW-Text-editor/assets/50971489/413bddbc-b9aa-4989-a8a4-9547b0b41926)


## Conclusion

The Text Editor project represents a culmination of your skills in web development, showcasing your ability to create robust PWAs with offline functionality and data persistence. Through adherence to best practices and implementation of modern web technologies, this application demonstrates your readiness to tackle real-world challenges in the field of web development.
