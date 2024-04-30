import { useState } from 'react';
import { Button, Flex } from 'antd';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle the login logic here
        console.log('Login with:', email, password);
    };

    return (
        <div className="login-container" style={{ textAlign: 'center' }}>
            <h1>New QCM Plus</h1>
            <div className="login-form" style={{ margin: 'auto', width: 'fit-content', padding: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
                <h2>Se connecter</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                            style={{ width: '200px', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Mot de passe"
                            style={{ width: '200px', padding: '10px', margin: '5px 0', border: '1px solid #ccc', borderRadius: '5px' }}
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <a href="/forgot-password">Mot de passe oublié ? Cliquer sur ce lien</a>
                    </div>
                    <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                        SE CONNECTER
                    </button>

                    <Flex gap="small" wrap="wrap">
                        <Button type="primary" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Primary Button</Button>
                    </Flex>
                </form>
            </div>
        </div>
    );
};

export default Login;


