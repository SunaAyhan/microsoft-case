# microsoft-case

## Project

Project Link: [Website](https://guestbook.sunaayhan.com/pages/messages)

Download APK:

<img src="https://github.com/sunaayhan/microsoft-case/blob/master/images_readme/qr.png?raw=true"  height="300">

## Screenshots

### Mobile

<img src="https://github.com/sunaayhan/microsoft-case/blob/master/images_readme/ss/page1m.jpeg?raw=true" height="500">
<img src="https://github.com/sunaayhan/microsoft-case/blob/master/images_readme/ss/page11m.jpeg?raw=true" height="500">
<img src="https://github.com/sunaayhan/microsoft-case/blob/master/images_readme/ss/page2m.jpeg?raw=true" height="500">

### Web

<img src="https://github.com/sunaayhan/microsoft-case/blob/master/images_readme/ss/page1edited.jpg?raw=true" height="500">
<img src="https://github.com/sunaayhan/microsoft-case/blob/master/images_readme/ss/page2edited.jpg?raw=true" height="500">
<img src="https://github.com/sunaayhan/microsoft-case/blob/master/images_readme/ss/loginedited.jpg?raw=true" height="500">

## Documentation

[Documentation Gitbook](https://sunas-organization.gitbook.io/louvre-guestbook)

## Introduction

Guestbook is a modern web/mobile application built with Ionic Capacitor and
React, designed to enhance visitor management by allowing users to leave reviews
and messages easily. It features a robust API implemented with Fastify for
backend services, ensuring quick and secure data handling.

## Features

- **Guest Reviews:** Allows visitors to post their reviews and thoughts.
- **Admin Panel:** Enables administrators to manage guest reviews and other
  application settings. Accessible at `/admin-panel`.
- **Responsive Design:** Fully responsive design that works seamlessly across
  different devices and platforms.
- **Security:** Enhanced security features to protect user data and prevent
  unauthorized access.

## Installation

To get Guestbook up and running on your local environment, follow these steps:

### Prerequisites

- Node.js (v20.x or later)
- npm (v6.x or later)
- mongoDB

### Setup

#### Frontend

1. Clone the repository:

   ```bash
   git clone https://github.com/SunaAyhan/microsoft-case.git
   cd microsoft-case
   ```

2. Install dependencies for the main app:

   ```bash
   npm install
   ```
3. Start web server:

   ```bash
   npm run dev
   ```
4. Build:

   ```bash
   npm run build
   ```
5. Build for Android:
   ```bash
   npx cap copy android
   npx cap build android
   npx cap run android
   ```

#### Backend

1. Navigate to the API directory and install its dependencies:

   ```bash
   cd API
   npm install
   ```

2. Start the backend API:

   ```bash
   node index.js
   ```

## Structure

Here's a brief overview of the project structure:

- **API/**: Contains the Fastify API with its configurations and dependencies.
- **android/**: Android platform-specific files, including Java source and
  resource files.
- **src/**: Contains React components, styles, and the main entry point for the
  Ionic app.
- **public/**: Static assets like images and the app manifest.
- **capacitor.config.ts**: Configuration file for Capacitor.
- **ionic.config.json**: Configuration file for Ionic.

## Contributing

Contributions are what make the open-source community such an amazing place to
learn, inspire, and create. Any contributions you make are **greatly
appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Suna Ayhan - sunaayhan16@gmail.com
