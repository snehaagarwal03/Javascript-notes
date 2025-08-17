// dom and bom
dom manipulation with js 
automate whatever you like on webpage with help of it 
automation of login, download data in pdf , excel 
yes there are some open source tools for that like puppeteer and crawlee
help you to easify the task 
but we will study how its done
how we attach our code with html and create an element like h1 or anything and add remove anything in that 



| Path           | What it means                                                  |
| -------------- | -------------------------------------------------------------- |
| `script.js`    | Look in the current folder                                     |
| `./script.js`  | Start in the current folder, go to `script.js`                 |
| `../script.js` | Go **one folder up**, then find `script.js`                    |
| `/script.js`   | Go to the **root folder of the server**, not your local folder |

<script src="./script.js"></script>
this one is standard and preferred to use
You're telling the browser:

“Hey browser, go to the current folder (part7), and from there, open script.js.”

<script src="script.js"></script>
It means the same thing, because the browser already looks in the current folder by default.

So in this case:
✅ script.js = ./script.js




now where should be place the script tag there are different ways and through that we can differ loading:
actually it can be placed in head section
in body section at the top (maybe you want button )
in body section at the last
it depends on when you want your js executable part to be loaded like for example if you want a button to be immediately available to click then obviously i will load that executable part in the head 
<script defer src="./script.js"></script>
we can even write keywords like "defer" to tell the browser that javascript can be loaded later or you can differ the loading when it feels to like

but we have a strong problem that is web element manipulation (flow chart in notebook )

web element manipulation - window > bom

console.log(window);
so this will show us what actually this window object contains and you can see that it has a lot of properties and methods and you can see that by inspect > dev tools > console
this way you can access the screen navigator location basically bom part of it but yes it has dom also and they are not ripped apart 

in console you can just test out window.outerWidth and window.outerHeight and it gives exact width and height of the browser window - this comes under screen object

navigator object can be used and the most common you would be using is the userAgent property
console.log(navigator.userAgent);
this will give you the user agent string which is a string that contains information about the browser and operating system
output - Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1 Edg/138.0.0.0

search for navigator mdn and you will see it has so many properties like cookieEnabled, geolocation, pdfViewerEnabled, plugins, and so on and these are basically web APIs that are available in the browser and you can use them to get information about the browser and the device

location object obviously has ton of apis and use them to find out like 
console.log(location.hostname);
console.log(location.href);

search for location mdn and there are also crazy amount of properties and methods that you can use to manipulate the URL and get information about the current page

now this part was basically bom and javascript we already studied now comes dom and turns out in every single js we have this element

every element is just like a tree
now we want to study how can i access these tags buttons and diffrent elements 
currently i have only one chidren that is h1 tag and now i will access this element through dom 

console.log(document)
see what this document contains on console

console.log(document.getElementsByTagName("h1"));
we can extract the text content of the first h1 element called "innertext" and also there is some property innerHTML

study about these apis all that bom and dom has

dom manipulation
learn about al kinds of event listeners by searching events in js mdn
just like we have add(2,3) like 2 parameters 
the event listeners also takes 2 parameters one is what it is has to perform and the other is for functionality (yes it takes a function- a higher order function)
we use higher order functions only we dont use arrow functions because when we call console.log(this) inside the function then on console on clicking the button this keyword gives current context that is the change button context who is calling it
but if we call console.log(this) using arrow function then this keyword context is window object it points to global this and not the current one
so for these event listeners higher order functions are helpful 


DOM and HTML are different 
HTML is a markup language
DOM is processed elements in document tree in memory
Whatever you do in your markup language that piece of code is taken by browser and then browser internally runs c++ and through that a document tree is generated in the memory and, that tree is DOM



Now we go to any website and can make our own changes 
Demonstration on console:
document.getElementByTagname("h1");
>> HTMLCollection [h1]

We can't use .textcontent just like we used for getelementbyid, sometimes we would be getting a collection sometimes a node list and here [h1] is actually array , we can verify it by 
> document.getElementByTagname("h1").length;
>> 1
> document.getElementByTagname("h1")[0];
>> <h1>InputEvent</h1>
> document.getElementByTagname("h1")[0].textContent;
>> "InputEvent"
> document.getElementByTagname("h1")[0].textContent = "Chaicode";
>> "Chaicode"
// This is changed on the website also


Now let's test out on <a> tags
> let anchorElements = document.getElementByTagname("a");
>> undefined
> anchorElements
>> HTMLCollection[138]
// 138 <a> tags being used on website page

> for(let index = 0; index < 15; index++){
    console.log(anchorElements[index].textContent);
}
>> Gives all 15 links textcontent

// This is how you do web scrapping also
So basically on a website we get HTMLCollections but sometimes there are node list which looks like an array but not an array , it needs to be converted into an array to perform the operations.


