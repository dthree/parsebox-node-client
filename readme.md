# ParseBox Node.js Client

A client library for programmatically accessing [parsebox.io](https://parsebox.io) Boxes as an API.


```
import parsebox from "parsebox";

(async () => {

    const helloBox = parsebox.box('dthree/uuqajgpvwavr');
    const result = await helloBox.exec('fellow coder');

    console.log(result);
    // { success: true, data: "Hello fellow coder!" }

})()
```
[Example Box](https://parsebox.io/dthree/uuqajgpvwavr)
 
## What's ParseBox?

All we know is that it's coming soon!

## License

MIT © [DC](https://github.com/dthree)