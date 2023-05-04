# image-resizing
This is a scalable typescript project that resizes images based on user input

# Scripts to run
To get started with the application, run <code>npm install</code> in your console.

To build the application, run <code>npm run build</code>.

To test the application, run <code>npm run test</code>.

# Endpoints
The main endpoint for this application is: `/api/resize?filename=**The file to resize**&width=**The width you want**&height=**The height you want**`

# Parameters
The following parameters need to be accurately passed into the URL to avoid errors:
- *filename*
- *width*
- *height*

# Important things to note
- When you clone this repository, you would need to place the picture you want to resize in the `"full"` Folder. That way, when you are using this programme to resize the image through the given endpoint, the system is aware of what the filename is.

**Hope you enjoy this application 😉**
