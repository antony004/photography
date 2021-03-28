# Photography

A hobby website showcasing my various photos and blogs

### To add a blog...

- Open `js > blog.js`
  - Add your blog in the following format to the variable called `myBlogs` on line `1`
  - ```
    {
            id: 0,
            title: "My First Blog",
            date: "Jan 21 2020",
            text: `Lorem ipsum dolor sit amet.`,
            coverImage: "image-19.jpg",
            images: [
                { filename: "image-19.jpg", caption: "This is a description shown below the image." },
                { filename: "image-20.jpg", caption: "This is a different caption" }
            ]
    }
    ```
  - The `id` should always be unique to the other blogs
  - The images should be in a folder named `id` within the `images` folder
    - i.e. If `id` is `2` then `image-19.jpg` and `image-20.jpg` should be inside `images > 2`

### To change style of the blog

- Open `css > blog.css`
- Or change the code in `blog.js`
  - The code is dynamically added from `blog.js` to `blog.html`

### To change the About popup

- Open `index.html`
- Go to line `121`
- Add a `<div>` for each paragraph
  - i.e.
  ```
   <div class="col-xs-12 col-md-6">About Title</div>
   <div class="col-xs-12 col-md-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
   <div class="col-xs-12 col-md-6">Cras pulvinar mattis nunc sed blandit libero volutpat sed. Aliquam nulla facilisi cras fermentum odio. Integer eget aliquet nibh praesent tristique. </div>
   <div class="col-xs-12 col-md-6">Aliquam ultrices sagittis orci a scelerisque purus semper.</div>
   <div class="col-xs-12 col-md-6">Proin sagittis nisl rhoncus mattis rhoncus. At tellus at urna condimentum mattis pellentesque id nibh tortor.</div>

  ```

### To change the style of the About popup

- Change styles in `main.css`
