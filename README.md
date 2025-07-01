# RideLink - Ride App Launcher

A React Native Expo app that allows users to compare and open ride-sharing apps with their route pre-filled, saving time by avoiding manual entry of pickup and destination addresses.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Expo SDK](https://img.shields.io/badge/Expo%20SDK-53.0.0-blue.svg)](https://expo.dev/)
[![React Native](https://img.shields.io/badge/React%20Native-0.79.1-green.svg)](https://reactnative.dev/)

## 🚀 Features

- 🚗 **Multi-App Support**: Open Uber, Lyft, 99, and other ride apps with pre-filled routes
- 📍 **Smart Location**: Use current location or search for addresses with autocomplete
- 🌍 **Multi-Language**: Support for English, Portuguese, and Spanish
- ⭐ **Favorites**: Save frequently visited places and routes for quick access
- 🎯 **Precise Coordinates**: Uses Google Places API for accurate location data
- 📱 **Cross-Platform**: Works on iOS, Android, and Web
- 🎨 **Beautiful UI**: Modern design with smooth animations and transitions
- 🌙 **Dark Mode**: Automatic theme switching based on system preferences

## 📱 Screenshots

| Home Screen | Favorites | Settings |
|-------------|-----------|----------|
| ![Home](https://via.placeholder.com/200x400/667eea/ffffff?text=Home) | ![Favorites](https://via.placeholder.com/200x400/10b981/ffffff?text=Favorites) | ![Settings](https://via.placeholder.com/200x400/f59e0b/ffffff?text=Settings) |

## 🛠️ Setup

### Prerequisites

- Node.js 18+ 
- Expo CLI
- Google Maps API Key (for address autocomplete)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ridelink-launcher.git
   cd ridelink-launcher
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure Google Maps API Key**:
   - Get an API key from [Google Cloud Console](https://console.cloud.google.com/apis/credentials)
   - Enable the following APIs:
     - Places API
     - Places API (New) 
     - Geocoding API
   - Copy `.env.example` to `.env` and add your API key:
     ```
     EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
     ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

### Google Maps API Setup

The app requires a Google Maps API key for address autocomplete functionality:

1. **Create a Google Cloud Project**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one

2. **Enable Required APIs**:
   - Places API
   - Places API (New)
   - Geocoding API

3. **Create API Key**:
   - Go to "Credentials" in the API & Services section
   - Click "Create Credentials" > "API Key"
   - Copy the generated key

4. **Configure API Key**:
   - Add the key to your `.env` file:
     ```
     EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
     ```

5. **Set API Restrictions** (Recommended):
   - For web deployment, add your domain to HTTP referrers
   - For mobile apps, add your bundle identifier/package name

## 🎯 How It Works

1. **Enter Addresses**: Use the smart autocomplete to enter pickup and destination addresses
2. **Get Current Location**: Tap the location button to auto-fill your current address
3. **Choose Ride App**: Select from available ride-sharing apps
4. **Open with Route**: The app opens with your route pre-filled and precise coordinates

## 🚗 Supported Ride Apps

| App | Status | Deep Link Support | Coordinates |
|-----|--------|------------------|-------------|
| **Uber** | ✅ Active | Full support | ✅ Yes |
| **Lyft** | ✅ Active | Full support | ✅ Yes |
| **99** | ✅ Active | Full support | ✅ Yes |
| **Bolt** | 🔧 Available | Partial | ✅ Yes |
| **Grab** | 🔧 Available | Partial | ✅ Yes |
| **Yandex Go** | 🔧 Available | Partial | ✅ Yes |
| **inDriver** | 🔧 Available | App only | ❌ No |
| **Taxi.Rio** | 🔧 Available | App only | ❌ No |

## 🏗️ Architecture

- **Framework**: React Native with Expo
- **Navigation**: Expo Router with tab-based layout
- **State Management**: React Context for auth, language, and theme
- **Styling**: StyleSheet with responsive design and dark mode
- **APIs**: Google Places Autocomplete & Place Details
- **Storage**: AsyncStorage for favorites and user preferences
- **Animations**: React Native Reanimated for smooth transitions

## 📁 Project Structure

```
app/
├── (auth)/          # Authentication screens
│   ├── login.tsx
│   ├── register.tsx
│   └── forgot-password.tsx
├── (tabs)/          # Main tab navigation
│   ├── index.tsx    # Ride launcher (main screen)
│   ├── favorites.tsx
│   ├── profile.tsx
│   └── settings.tsx
components/          # Reusable components
├── GooglePlacesInput.tsx
├── RideAppButton.tsx
├── GradientBackground.tsx
└── ...
contexts/           # React Context providers
├── AuthContext.tsx
├── LanguageContext.tsx
├── ThemeContext.tsx
└── ...
hooks/              # Custom hooks
├── useRideApps.ts
├── useFavorites.ts
└── ...
```

## 🌐 Environment Variables

Create a `.env` file with:

```env
# Required for address autocomplete
EXPO_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Optional analytics
EXPO_PUBLIC_ANALYTICS_ID=your_analytics_id
```

## 🚀 Deployment

### Web Deployment

The app is configured for web deployment with:

- Static export support via Netlify
- Responsive design for all screen sizes
- Progressive Web App features
- Automatic deployment from GitHub

### Mobile Deployment

- **iOS**: App Store deployment ready
- **Android**: Google Play Store ready
- **Expo Application Services (EAS)** compatible

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Quick Start for Contributors

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes and test thoroughly
4. Commit your changes: `git commit -m 'Add amazing feature'`
5. Push to the branch: `git push origin feature/amazing-feature`
6. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Expo](https://expo.dev/) for the amazing development platform
- [Google Maps Platform](https://developers.google.com/maps) for location services
- [Lucide](https://lucide.dev/) for beautiful icons
- All the ride-sharing apps that make transportation accessible

## 📞 Support

- 🐛 **Bug Reports**: [GitHub Issues](https://github.com/your-username/ridelink-launcher/issues)
- 💡 **Feature Requests**: [GitHub Discussions](https://github.com/your-username/ridelink-launcher/discussions)
- 📧 **Contact**: [your-email@example.com](mailto:your-email@example.com)

## 🗺️ Roadmap

- [ ] Add more ride-sharing apps
- [ ] Implement ride price comparison
- [ ] Add trip history tracking
- [ ] Integrate with calendar apps
- [ ] Add widget support
- [ ] Implement voice commands

---

**Made with ❤️ by the RideLink Team**

*Save time, ride smart! 🚗✨*