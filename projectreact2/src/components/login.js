import React,{ Component} from 'react';


class Login extends Component{
    constructor(props){
        super(props);this.state = {
            username:'',
            password: ''

        }
        this.login = this.login.bind(this);
        this.onchage = this.onchage.bind(this);
        }

    login(){
        console.log('Logged in successfully');

    }

    onchangee(e){
 
        this.setState({
            [e.target.name]: e.target.value
        });

        console.log(this.state);
    }

    render(){
        return(
            <div>
                <header>
                    <h1>Login</h1>
                    <h1></h1>
                </header>
                <div>
                    <p>
                        <label>Username: </label>
                        <input type = "text" name ="username" onchange={this.onchange}></input>
                    </p>
                    <p>
                        <label>Password: </label>
                        <input type = "password" name="password" onchange></input>
                    </p>

                    <input type="button" onClick = {this.login} name="login" value="Login"/>
                </div>
            </div>
        );
    }
}
export default Login;