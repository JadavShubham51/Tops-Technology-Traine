import React, { createContext, useState } from 'react';


const Themes = {
    dark:{
        forground:"white",
        background:"grey",
    },
    light:{
        forground:"grey",
        background:"white"
    }
};


const ThemeContext = createContext(Themes.dark);



function Login(props) {
    const[theme,settheme]=useState(Themes.dark);
    const chnagedata =()=> {
        settheme(theme === Themes.light ? Themes.dark : Themes.light);
      };
    return (
        <>
            <ThemeContext.Provider value={theme}>
            <div className="container mt-5">
                <div className="row mt-5">
                    <div className="col-4 mx-auto" style={{
                        background: theme.background,
                        color: theme.forground
                    }}>
                        <h1>Login in</h1>
                        <form method='get'>
                            <label>Email</label><br />
                            <input type="Email" /><br />
                            <label>Password</label><br />
                            <input type="password" /><br />
                            <button className='btn btn-primary w-25 mt-3'>Login in</button>
                        </form>
                    </div>
                    <div className="col-6">
                        <button className='btn btn-danger' onClick={chnagedata}>changethem</button>
                    </div>
                </div>
            </div>
            </ThemeContext.Provider>
        </>
    );
}

export default Login;