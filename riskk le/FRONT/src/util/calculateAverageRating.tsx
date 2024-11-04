export const calculateAverageRating = (feedbacks: any[]) => {
    const total = feedbacks.reduce((sum, feedback) => sum + (feedback.rating || 0), 0);
    return feedbacks.length > 0 ? total / feedbacks.length : 0;
  };
