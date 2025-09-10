# Overview

AIRET is a museum-grade shoe care and display system that combines preservation technology with luxury presentation. The application is a full-stack React website built with Express.js backend, featuring alternating black and white themed sections to showcase AIRET's products, patents, team, and company news. The site emphasizes premium design aesthetics while maintaining technical sophistication through UV-C sterilization, humidity control, and smart monitoring capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **React with TypeScript**: Modern component-based architecture using functional components and hooks
- **React Router DOM**: Client-side routing for SPA navigation between Home, About, Product, Patents, and News pages
- **Custom CSS Architecture**: Pure CSS implementation without external UI frameworks, featuring:
  - CSS variables system for theme management (white/black alternating sections)
  - Global reset and base styles
  - Modular component styling with theme-aware classes
- **Vite Build System**: Fast development server and optimized production builds
- **Component Design**: Reusable components with prop-based theming (FeatureGrid, ProductCard, NewsCard, etc.)

## Backend Architecture
- **Express.js Server**: RESTful API server with middleware for logging and error handling
- **TypeScript**: Full type safety across server codebase
- **Modular Route Structure**: Extensible routing system with dedicated route handlers
- **Storage Interface**: Abstract storage layer with in-memory implementation, designed for easy database integration
- **Development Tooling**: Hot module replacement and development middleware integration

## Data Storage Solutions
- **Database Configuration**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Schema Definition**: Type-safe database models using Drizzle and Zod validation
- **Migration System**: Database migration management through Drizzle Kit
- **Connection Management**: Environment-based database URL configuration

## Authentication and Authorization
- **Session Management**: PostgreSQL session store configuration with connect-pg-simple
- **User Schema**: Basic user model with username/password authentication structure
- **Security Patterns**: Password handling and user management interfaces prepared for implementation

## Design System
- **Theme System**: Alternating white and black sections with automatic contrast adaptation
- **Typography**: System font stack with responsive sizing using clamp() functions
- **Layout**: Container-based responsive design with CSS Grid and Flexbox
- **Animation**: Intersection Observer-based fade-in animations for content sections
- **Accessibility**: Focus management, semantic HTML, and ARIA attributes

# External Dependencies

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database service (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL dialect
- **Drizzle Zod**: Schema validation integration

## UI and Styling
- **Radix UI**: Comprehensive set of unstyled, accessible UI primitives for complex components
- **Tailwind CSS**: Utility-first CSS framework for rapid styling (configured but not actively used in favor of custom CSS)
- **Class Variance Authority**: Component variant management
- **Embla Carousel**: Touch-friendly carousel component

## State Management and Data Fetching
- **TanStack React Query**: Server state management and caching
- **React Hook Form**: Form state management with validation
- **Hookform Resolvers**: Integration with validation libraries

## Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Static type checking
- **ESBuild**: Fast JavaScript bundler for production
- **PostCSS**: CSS processing with Autoprefixer

## Utilities
- **Date-fns**: Date manipulation and formatting
- **Clsx/cn**: Conditional className utilities
- **Nanoid**: URL-safe unique ID generation
- **Replit Integration**: Development environment plugins and error overlays