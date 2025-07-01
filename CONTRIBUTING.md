# Contributing to RideLink

Thank you for your interest in contributing to RideLink! This document provides guidelines and information for contributors.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/your-username/ridelink-launcher.git
   cd ridelink-launcher
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Set up environment variables**:
   - Copy `.env.example` to `.env`
   - Add your Google Maps API key
5. **Start the development server**:
   ```bash
   npm run dev
   ```

## Development Guidelines

### Code Style

- Use TypeScript for all new code
- Follow the existing code style and patterns
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### File Organization

- Place reusable components in `/components`
- Use the `/hooks` directory for custom hooks
- Keep contexts in `/contexts`
- Follow the existing folder structure

### Testing

- Test your changes on multiple platforms (iOS, Android, Web)
- Ensure the app works without a Google Maps API key (graceful degradation)
- Test with different languages (English, Portuguese, Spanish)
- Verify location services work properly

### Commit Messages

Use clear, descriptive commit messages:

```
feat: add support for new ride app
fix: resolve location permission issue on Android
docs: update API setup instructions
style: improve button hover states
```

## Types of Contributions

### 🐛 Bug Reports

When reporting bugs, please include:

- Steps to reproduce the issue
- Expected vs actual behavior
- Platform and device information
- Screenshots or videos if applicable
- Error messages or console logs

### 💡 Feature Requests

For new features, please:

- Check if the feature already exists or is planned
- Describe the use case and benefits
- Consider the impact on existing functionality
- Provide mockups or examples if helpful

### 🔧 Code Contributions

#### Adding New Ride Apps

To add support for a new ride-sharing app:

1. Update `hooks/useAppManager.ts` with the new app configuration
2. Add deep-link logic in `hooks/useRideApps.ts`
3. Test the integration thoroughly
4. Update documentation

#### Internationalization

To add a new language:

1. Add translations to `contexts/LanguageContext.tsx`
2. Update the language selector options
3. Test all screens with the new language
4. Ensure proper text layout and formatting

#### UI/UX Improvements

- Follow the existing design system
- Ensure accessibility compliance
- Test on different screen sizes
- Maintain consistency across platforms

## Pull Request Process

1. **Create a feature branch** from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the guidelines above

3. **Test thoroughly** on multiple platforms

4. **Update documentation** if needed

5. **Submit a pull request** with:
   - Clear title and description
   - Screenshots/videos of changes
   - Testing notes
   - Any breaking changes

6. **Respond to feedback** and make requested changes

## Code Review

All contributions go through code review. Reviewers will check for:

- Code quality and style
- Functionality and testing
- Documentation updates
- Performance implications
- Security considerations

## Community Guidelines

- Be respectful and inclusive
- Help others learn and grow
- Provide constructive feedback
- Follow the project's code of conduct

## Getting Help

If you need help:

- Check the existing documentation
- Look through GitHub Issues
- Ask questions in pull request discussions
- Reach out to maintainers

## Recognition

Contributors will be recognized in:

- GitHub contributors list
- Release notes for significant contributions
- Project documentation

Thank you for helping make RideLink better! 🚗✨