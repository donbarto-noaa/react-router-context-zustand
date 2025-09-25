import { useToast } from '@nwsconnect/atmosphere';

export function ToastExample() {
  const { addToast } = useToast();

  const showSuccessToast = () => {
    addToast({
      type: 'success',
      title: 'Success!',
      message: 'Operation completed successfully.'
    });
  };

  const showErrorToast = () => {
    addToast({
      type: 'error',
      title: 'Error',
      message: 'Something went wrong.'
    });
  };

  return (
    <div className="space-x-4">
      <button onClick={showSuccessToast} className="px-4 py-2 bg-green-500 text-white rounded">
        Show Success Toast
      </button>
      <button onClick={showErrorToast} className="px-4 py-2 bg-red-500 text-white rounded">
        Show Error Toast
      </button>
    </div>
  );
}