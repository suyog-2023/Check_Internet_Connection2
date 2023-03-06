// Selecting all required elements

const wrapper = document.querySelector(".wrapper");
toast = wrapper.querySelector(".toast");
wifiIcon = wrapper.querySelector(".icon");
title = wrapper.querySelector("span");
subTitle = wrapper.querySelector("p");
closeIcon = wrapper.querySelector(".close-icon");

window.onload = () => { // Once window loaded
    function ajax() {
        let xhr = new XMLHttpRequest(); // creating new xml object
        xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true);  // sending get request to this url
        xhr.onload = () => { // Once ajax loaded
            // Here, If ajax status is equal to 200 & less than 300 that means user is getting data or response from that provided URL. 
            // OR user is online so he / she is getting response or 200 status code
            if (xhr.status == 200 && xhr.status < 300) {
                toast.classList.remove("offline");  
                title.innerText = "You are Online now";
                subTitle.innerText = "Hurray!! Internet is connected";

                closeIcon.onclick = () => {
                    wrapper.classList.add("hide");
                }

                // setTimeout(() => {
                //     wrapper.classList.add("hide");
                // }, 3000);  // after 3 seconds toast msg will hidden automatically.

            }
            else { // User is not online or may getting something other error
                offline(); // Calling offline function. 
            }
        }
        xhr.onerror = () => { // If the passed URL is incorrect or returning 404 or other error
            offline(); // Calling offline function.
        }
        xhr.send();
    }

    function offline() { // creating offline function
        wrapper.classList.remove("hide"); // If user goes offline then show the toast msg.
        toast.classList.add("offline");  
        title.innerText = "You are Offline now";
        subTitle.innerText = "Oops!! Internet is disconnected";
    }
 
    // Put ajax call inside setInterval function so we can call it after every 100ms 
    // So we don't need to refresh the page to see the updated status

    setInterval(() => {
        ajax(); // calling ajax function
    }, 100); 
}
