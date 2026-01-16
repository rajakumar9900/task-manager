import '../styles/LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="loading-container" role="status" aria-label="Loading">
      <div className="spinner"></div>
      <p className="loading-text">Loading tasks...</p>
    </div>
  );
};

export default LoadingSpinner;
