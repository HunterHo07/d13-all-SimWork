# SimulEx Development Documentation

## Tech Stack

SimulEx is built using the following technologies:

### Frontend
- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **3D Rendering**: Three.js with React Three Fiber
- **Animation Libraries**:
  - GSAP for timeline-based animations
  - Framer Motion for component animations
  - Lottie for vector animations
  - Three.js for 3D animations

### State Management
- React Context API for global state
- LocalStorage for persistent data

### Deployment
- GitHub Pages for static hosting

## Project Structure

```
simulex/
├── public/               # Static assets
│   ├── images/           # Image assets
│   ├── models/           # 3D models
│   ├── animations/       # Lottie animations
│   └── .nojekyll         # GitHub Pages config
├── src/
│   ├── app/              # Next.js app router
│   │   ├── page.tsx      # Home page
│   │   ├── demo/         # Demo page
│   │   ├── pitch-deck/   # Pitch deck page
│   │   ├── why-us/       # Why us page
│   │   └── landing/      # Landing page
│   ├── components/       # Reusable components
│   │   ├── ui/           # UI components
│   │   ├── three/        # Three.js components
│   │   ├── animations/   # Animation components
│   │   └── workstations/ # Role-specific workstations
│   ├── contexts/         # React contexts
│   ├── hooks/            # Custom hooks
│   ├── lib/              # Utility functions
│   ├── types/            # TypeScript types
│   └── data/             # Dummy data
└── config files          # Various config files
```

## Phased Rollout Development Plan

### Phase 1 (Current MVP)

The current MVP focuses on delivering a web-based 2.5D simulation game with the following features:

1. **Interactive Office Environment**
   - 2.5D map with navigable areas
   - Different workstations for various roles
   - Visual indicators for available tasks

2. **Role-Specific Workstations**
   - Developer Bay with terminal simulation
   - Design Lab with creative brief tasks
   - Project Management Hub with decision-making scenarios
   - Data Entry Station with accuracy challenges
   - AI Engineering Zone with prompt engineering tasks

3. **Quest System**
   - Procedurally generated tasks
   - Difficulty adaptation based on user performance
   - Progress tracking and scoring

4. **User Management**
   - LocalStorage-based authentication
   - User profile and progress persistence
   - Role selection and customization

### Phase 2 (Future Development)

1. **Desktop/Mobile Applications**
   - Electron-based desktop app
   - React Native mobile application
   - Offline functionality

2. **Expanded Role Scenarios**
   - Additional industry-specific roles
   - More complex, multi-step scenarios
   - Collaborative tasks

3. **Enhanced Analytics Dashboard**
   - Detailed performance metrics
   - Skill gap analysis
   - Personalized improvement recommendations

4. **Team Collaboration Features**
   - Multi-user scenarios
   - Role-based team exercises
   - Real-time collaboration

### Phase 3 (Long-term Vision)

1. **VR/AR Integration**
   - VR-based immersive training
   - AR overlays for real-world task assistance
   - Mixed reality collaborative environments

2. **Multiplayer Enterprise Modules**
   - Company-wide simulation environments
   - Cross-department scenarios
   - Enterprise-level analytics

3. **Advanced AI Coaching**
   - Personalized AI mentors
   - Natural language feedback
   - Adaptive learning paths

4. **Industry-Specific Simulations**
   - Healthcare
   - Finance
   - Manufacturing
   - Retail

## How to Use SimulEx

### For Users

1. **Getting Started**
   - Navigate to the SimulEx website
   - Create an account or use the demo login
   - Select your role or area of interest

2. **Navigating the Environment**
   - Use arrow keys or WASD to move around the office
   - Click on workstations to interact with them
   - Access your profile and progress from the top menu

3. **Completing Tasks**
   - Read task descriptions carefully
   - Use the provided tools to complete the tasks
   - Submit your work for evaluation
   - Review feedback and improve

4. **Tracking Progress**
   - View your performance metrics in the dashboard
   - Track completed tasks and achievements
   - Identify areas for improvement

### For Developers

1. **Local Development**
   ```bash
   # Clone the repository
   git clone https://github.com/yourusername/i5.git
   
   # Install dependencies
   npm install
   
   # Start the development server
   npm run dev
   ```

2. **Building for Production**
   ```bash
   # Build the project
   npm run build
   
   # Deploy to GitHub Pages
   npm run deploy
   ```

3. **Adding New Features**
   - Follow the existing component structure
   - Use the provided hooks and contexts
   - Add new data to the appropriate files in src/data
   - Test thoroughly before submitting PRs
