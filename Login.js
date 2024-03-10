import axios from 'axios'

export default function Login({store}) {

    function handleSubmit() {
        console.log({
            un: document.getElementById("idun").value,
            pw: document.getElementsByName("pw")[0].value
        })
        axios.post('http://localhost:8081/check', {
            un: document.getElementById("idun").value,
            pw: document.getElementsByName("pw")[0].value
        }).then((response) => {
            console.log(response.data);
            if(response.data != "fail") {
                store.dispatch({"type":"login", "data":{"un":response.data.name, "role":response.data.role}})
            }
        })
    }
    function handleMouseOver() {
        document.getElementById("idlogin").style.boxShadow = "10px 10px 15px grey";
    }
    function handleMouseLeave() {
        document.getElementById("idlogin").style.boxShadow = "0px 0px 0px grey";
    }

    const divStyle = {
        backgroundImage: 'url("https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '100vh', // Adjust this according to your need
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    return(
        <div style={divStyle}>
            <div id="idlogin" className="login-form" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                <p style={{ textShadow: "1px 2px 2px red, -1px -2px 2px yellow", fontSize: "25px" }}>Login Page</p> <br/>
                username: <input type="text" name="un" id="idun" /> <br/><br/>
                password: <input type="password" name="pw" id="idpw" /><br/><br/><br/>
                <button onClick={handleSubmit}> Login </button>
            </div>
        </div>
    );
}
