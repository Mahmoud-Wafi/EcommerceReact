import '../loginStyle.css'

function Login(){
     const navbarHeight = '56px';  // Define the Navbar height here

  const containerStyle = {
    paddingTop: navbarHeight,
  };

    return (
        <>
       <div class="container login-container">
    <div class="card login-card">
        <h1 class="card-title text-center mb-4">Login</h1>
        <form action="#">
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input id="username" type="text" class="form-control" placeholder="Enter your username" />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input id="password" type="password" class="form-control" placeholder="••••••••" />
            </div>
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="form-check">
                    <input id="remember" type="checkbox" class="form-check-input" />
                    <label for="remember" class="form-check-label">Remember me</label>
                </div>
                <a href="#" class="text-decoration-none">Forgot password?</a>
            </div>
            <button type="submit" class="btn btn-primary submit-btn">Sign in</button>
            <p class="mt-3 mb-0 text-center">
                Don’t have an account yet? <a href="#" class="text-primary text-decoration-none">Sign up</a>
            </p>
        </form>
    </div>
</div>
        </>
    )
}


export default Login ; 