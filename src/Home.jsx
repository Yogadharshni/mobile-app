import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useFormik } from "formik";

export function Home() {
  return (
    <div>
      <h1>Welcome to Mobile App 📱 </h1>
      <LoginForm/>
    </div>
  );
}

function LoginForm(){
  useFormik({
    initialValues:{username:'shruthi',password:'shruthi@123'}
  })
  return(
    <form className="login-form">
      <h2>Login</h2>
      <div className="login-form-div">
      <TextField  label="Username" variant="outlined" />
      <TextField  label="Password" variant="outlined" />
      <Button variant="contained">Submit</Button>
      </div>
    </form>
  )
}
