import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import AppShell from './components/AppShell';
import HomePage from './pages/HomePage';
import ImageUploadPage from './pages/ImageUploadPage';
import ResultPage from './pages/ResultPage';
import AIExplanationPage from './pages/AIExplanationPage';
import ChatbotPage from './pages/ChatbotPage';
import ReportHistoryPage from './pages/ReportHistoryPage';

const rootRoute = createRootRoute({
  component: AppShell
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage
});

const uploadRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/upload',
  component: ImageUploadPage
});

const resultRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/result',
  component: ResultPage
});

const explanationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/explanation',
  component: AIExplanationPage
});

const chatRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/chat',
  component: ChatbotPage
});

const historyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/history',
  component: ReportHistoryPage
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  uploadRoute,
  resultRoute,
  explanationRoute,
  chatRoute,
  historyRoute
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
