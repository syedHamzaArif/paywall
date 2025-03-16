export const handleApiError = (error) => {
    let errorMessage = "An unexpected error occurred. Please try again.";
  
    if (error.response) {
      const { status, data } = error.response;
      if (data?.message) {
        errorMessage = data.message;
      }
    } else if (error.request) {
      errorMessage = "No response from the server. Please check your connection.";
    } else if (error.message) {
      errorMessage = error.message;
    }
  
    return errorMessage;
  };