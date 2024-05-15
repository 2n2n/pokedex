const LoaderComponent = ({ children, loading = true }) => {
  if (loading) {
    return (
      <center flex={1}>
        <div class="spinner-border text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </center>
    );
  } else {
    return children;
  }
};

export default LoaderComponent;
