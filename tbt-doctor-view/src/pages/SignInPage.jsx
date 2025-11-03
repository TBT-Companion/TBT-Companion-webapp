import { useState } from 'react';
import './SignInPage.css';
import OSULogo from '../assets/wexner.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from '../firebase-config';

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);


    const handleGoogleSignIn = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);

            const user = result.user;
            const idToken = await user.getIdToken();
            console.log(idToken)
            localStorage.setItem('idToken', idToken);

            // ✅ Step 3: Verify user in backend
            const response = await fetch('http://localhost:3000/api/users/me', {
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user info');
            }

            const userData = await response.json();
            console.log('✅ User role:', userData.role);

            // ✅ Step 4: Redirect based on role
            if (userData.role === 'admin') {
                window.location.href = 'http://nodejs-env.eba-ggmcwhgm.us-east-2.elasticbeanstalk.com/index.html';
            } else if (userData.role === 'doctor') {
                window.location.href = '/dashboard';
            } else {
                setError('Access denied: this portal is only for doctors or admins.');
                await auth.signOut();
                localStorage.removeItem('idToken');
            }

        } catch (err) {
            console.error("Google Sign-In Error:", err);
            setError("Failed to sign in with Google.");
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            // Step 1: Firebase login
            const userCred = await signInWithEmailAndPassword(auth, email, password);
            const user = userCred.user;

            // Step 2: Get ID token
            const idToken = await user.getIdToken();
            localStorage.setItem('idToken', idToken);

            // Step 3: Verify user in backend
            const response = await fetch('http://localhost:3000/api/users/me', {
                headers: {
                    'Authorization': `Bearer ${idToken}`,
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch user info');
            }

            const userData = await response.json();
            console.log('✅ User role:', userData.role);

            // Step 4: Redirect based on role
            if (userData.role === 'admin') {
                // Redirect to your coworker’s existing admin HTML page
                window.location.href = 'http://localhost:3000/admin-dashboard.html';
            } else if (userData.role === 'doctor') {
                // React dashboard
                window.location.href = '/dashboard';
            } else {
                setError('Access denied: this portal is only for doctors or admins.');
                await auth.signOut();
                localStorage.removeItem('idToken');
            }
        } catch (err) {
            console.error('❌ Login error:', err);
            setError('Login failed. Please check your credentials.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="signin-container">
            <div
                className="osu-header"
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '24px 0',
                }}
            >
                <img
                    src={OSULogo}
                    alt="Ohio State University Logo"
                    className="osu-logo"
                    style={{ width: '360px', maxWidth: '90%', height: 'auto', display: 'block' }}
                />
            </div>

            <div className="signin-card">
                <h2>Doctor Sign In</h2>
                <br />
                <form onSubmit={handleSubmit} className="signin-form">
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    {error && <p className="error-text">{error}</p>}
                    <button type="submit" disabled={loading}>
                        {loading ? 'Signing in...' : 'Sign In'}
                    </button>
                    <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="google-btn"
                    >
                        Sign in with Google
                    </button>
                </form>
            </div>
        </div>
    );
}

export default SignInPage;
