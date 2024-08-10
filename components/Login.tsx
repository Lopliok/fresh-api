export function Login() {
    return (<div class="flex justify-center p-6">

      <form method="post" action="/api/login">
        <div class="flex flex-col w-36 space-y-2">   <input class="border border-gray-800" type="text" name="username" />
        <input class="border border-gray-800" type="password" name="password" />
        <button class="" type="submit">Submit</button>

        </div>
     
      </form>
            
    </div>
    );
  }