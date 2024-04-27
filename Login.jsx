import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    return ( 
        <div className="w-full max-w-2xl">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-grey-700 text-sm font-bold mb-2">Email</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="email"
                        id="email"
                        name="email"
                        required="required"
                        placeholder="Your email"
                        value={email}
                        onChange={((e) => setEmail(e.target.value) )}
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="password" className="block text-grey-700 text-sm font-bold mb-2">Password</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="password"
                        id="password"
                        name="password"
                        required="required"
                        placeholder="Your password"
                        value={password}
                        onChange={((e) => setPassword(e.target.value))}
                    />
                    <p className="text-red-500 text-xs italic">Please choose a password</p>
                    <Link to={props.linkfg} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Forgot Password?</Link>
                </div>
                <div className="flex items-center justify-between">
                    <Link to={props.link} className="inline-block align-baseline font-bold text-sm text-white px-3 py-2 rounded bg-blue-500 hover:bg-blue-800">Log in</Link>
                    <Link to={props.linkcreate} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Create an account</Link>
                </div>
            </form>
        </div>
     );
}
 
export default Login;