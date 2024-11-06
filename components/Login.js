import { login, cekToken } from "../services/auth.service.js";

const Login = () => {
  return `<div class="flex min-h-screen justify-center items-center">
  <div class="container mx-auto px-4 md:px-8 xl:px-16">
      <div class="mx-auto max-w-xs rounded-md bg-white px-4 py-8 shadow-sm xl:max-w-sm xl:px-8">
        <div class="">
          <svg class="mx-auto w-16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 26">
            <path fill="#000" d="M45.8 9.087a5.323 5.323 0 1 1-7.528-7.528A5.323 5.323 0 0 1 45.8 9.087Z" opacity=".4" />
            <path fill="#000" d="M45.795 9.086a5.323 5.323 0 0 1-7.528 0l-7.434-7.434a5.323 5.323 0 1 0-7.528 7.528l7.434 7.434a5.323 5.323 0 0 0 7.528 0l7.528-7.528Z" opacity=".6" />
            <path fill="#000" d="M38.267 16.615a5.323 5.323 0 0 1-7.528 0L16.311 2.187a7.097 7.097 0 0 0-10.038 0L0 8.46a5.323 5.323 0 0 1 7.528 0L23.21 24.143a5.323 5.323 0 0 0 7.528 0l7.528-7.528Z" />
          </svg>
        </div>

        <form class="mx-auto flex flex-col gap-2" name="login" method="post">
          <div class="flex flex-col gap-1">
            <label class="font-bold text-slate-700" for="username">Username</label>
            <input class="h-8 rounded-md border border-slate-600 px-2" type="text" name="username" placeholder="johnd" />
          </div>
          <div class="flex flex-col gap-1">
            <label class="font-bold text-slate-700" for="password">Password</label>
            <input class="h-8 rounded-md border border-slate-600 px-2" type="password" name="password" placeholder="m38rmF$" />
          </div>
          <div class="mt-2">
            <button id="login-button" class="w-full rounded-md bg-black py-2.5 font-medium text-white">Login</button>
          </div>
          <div class="text-center">
          <p id="login-status" class="font-medium text-sm hidden text-red-500">Invalid Username or Password, Please try again</p>
            <span class="text-sm">
              Don't have an Accout?
              <a class="font-medium" href="">Sign Up</a>
            </span>
          </div>
        </form>
      </div>
      </div>
    </div>`;
};

const loginOnMount = () => {
  const form = document.querySelector("form[name=login]");
  form.addEventListener("submit", async (event) => {
    const statusText = document.getElementById("login-status");
    statusText.classList.add("hidden");
    event.preventDefault();
    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");

    const result = await login(username, password);
    if (!result.status) {
      statusText.classList.remove("hidden");
    } else {
      localStorage.setItem("token", result.data.token);
      cekToken();
    }
  });
};

export { Login, loginOnMount };
