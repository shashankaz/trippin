"use client";

const ErrorBoundary: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div>{children}</div>;
};

export default ErrorBoundary;
