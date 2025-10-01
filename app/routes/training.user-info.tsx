import { useState } from 'react';
import { useAuth } from '~/contexts/AuthContext';
import { Button } from '@nwsconnect/atmosphere';


export function UserInfo() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { user, isAuthenticated, login, logout } = useAuth();

    const handleLogin = async () => {
    
    await login(email, password);
  };

    if (isAuthenticated) {
        return (
            <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Email: {user?.email}
                </p>
                <Button type='button' onPress={logout}>Log in</Button>
            </div>
        );
    } else {
        return (
            <div className="mt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Not logged in
                </p>
                <Button type='button' onPress={handleLogin}>Log in</Button>
            </div>
        );
    }
}