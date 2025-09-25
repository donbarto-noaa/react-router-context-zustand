import { useToast } from '@nwsconnect/atmosphere';
import { Button } from '@nwsconnect/atmosphere';

export default function ToastDemo() {
  const { addToast } = useToast();

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Toast Demo</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Button
          onPress={() => addToast({
            variant: 'success',
            title: 'Success!',
            message: 'Operation completed successfully.'
          })}
        >
          Success Toast
        </Button>
        
        <Button
          onPress={() => addToast({
            variant: 'error',
            title: 'Error!',
            message: 'Something went wrong.'
          })}
        >
          Error Toast
        </Button>
        
        <Button
          onPress={() => addToast({
            variant: 'info',
            title: 'Info',
            message: 'Here is some information.'
          })}
        >
          Info Toast
        </Button>
        
        <Button
          onPress={() => addToast({
            variant: 'warning',
            title: 'Warning',
            message: 'Please be careful.'
          })}
        >
          Warning Toast
        </Button>
      </div>
    </div>
  );
}