// Asynchronous and await - basically promise is created but the consumption of promises is done using async and await

//this function is used to get some data maybe a database call or any API call
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Simulating a user data response
      resolve({ name: "Sneha", url: "https://www.google.com" });
      // To simulate an error, comment out the above line and uncomment below:
      //reject("Failed to fetch user data...");
    }, 2000);
  });
}

//async tells that a specific task needs some time and await tells that it needs to wait for the result and the processing is happening. await can only be used inside an async function.
//await pauses the execution of a function until the promise is resolved
//user data fetched successfully shows that only after the processing is done maybe sending data to database and not making any changes on screen be it anything then only the next line will be executed.
async function getUserData() {
  try {
    console.log("Fetching user data...");
    const userData = await fetchUserData();
    console.log("User data fetched successfully...");

    console.log("User Data:", userData);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
}
getUserData(); //the function must be called to see the response

//if we had use reject instead of resolve in promise definition then the output would be:
//Fetching user data...
//Error fetching user data: Failed to fetch user data...




// Fetching 2 functions data together 
function fetchPostData(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("Post Data fetched...");
        }, 2000);
    });
}

function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment Data fetched...");
    }, 3000);
  });
}

async function getBlogData(){
    try {
        console.log("Fetching blog data...");
        //1st way is this
        // const postData = await fetchPostData();
        // const commentData = await fetchCommentData();

        //2nd way and more better way is using Promise.all which takes array as a parameter in which we can pass functions as array elements.
        const [postData, commentData] = await Promise.all([fetchPostData(), fetchCommentData()]);
        console.log(postData);
        console.log(commentData);

        console.log("Blog data fetched successfully...");
    } catch (error) {
        console.error("Error fetching blog data:", error);
    }
}
getBlogData(); //the function must be called to see the response

//Promise.all() waits for all promises in an array to be resolved or one to be rejected