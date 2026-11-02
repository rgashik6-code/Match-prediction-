
import React, { Component, type ReactNode, type ErrorInfo } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

type State = {
  error: string | null;
};

class ErrorBoundary extends Component<
  { children: ReactNode },
  State
> {
  state: State = {
    error: null
  };

  static getDerivedStateFromError(error: Error): State {
    return { error: error.message || String(error) };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('GoalPredict Error:', error, info);
  }

  render() {
    if (this.state.error) {
      return (
        <div style={{
          background: '#080d0a',
          color: 'white',
          minHeight: '100vh',
          padding: '24px',
          fontFamily: 'sans-serif'
        }}>
          <h2 style={{ color: '#ff5252' }}>
            GoalPredict Error
          </h2>
          <p>অ্যাপ চালু হতে সমস্যা হয়েছে:</p>
          <pre style={{
            whiteSpace: 'pre-wrap',
            overflowWrap: 'anywhere',
            background: '#222',
            padding: '15px',
            borderRadius: '8px'
          }}>
            {this.state.error}
          </pre>
        </div>
      );
    }

    return this.props.children;
  }
}

window.addEventListener('error', (event) => {
  console.error('JavaScript Error:', event.message);
});

window.addEventListener('unhandledrejection', (event) => {
  console.error('Promise Error:', event.reason);
});

const rootElement = document.getElementById('root');

if (!rootElement) {
  document.body.innerHTML =
    '<h2 style="color:red;padding:20px">Error: Root element not found!</h2>';
} else {
  createRoot(rootElement).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
}
