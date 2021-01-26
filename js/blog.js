let myBlogs =
    [
        {
            id: 0,
            title: "My First Blog",
            date: "Jan 21 2020",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et magna vitae metus fermentum interdum. Nulla sapien turpis, ultricies sit amet tristique id, congue eu mauris. Donec fringilla leo a augue congue, non interdum lorem bibendum. Vivamus lobortis nulla mi, in auctor enim rutrum quis. Nunc luctus orci et mi cursus congue. Pellentesque ultrices mi vitae maximus ullamcorper. Aliquam neque lectus, aliquet sit amet scelerisque nec, facilisis in metus. Sed nec diam sed urna rutrum lobortis. `,
            coverImage: "image-19.jpg",
            images: [
                { filename: "image-19.jpg", caption: "19 image" },
                { filename: "image-20.jpg", caption: "20 image" }
            ]
        },

        {
            id: 1,
            title: "My Second Blog",
            date: "Jan 22 2020",
            text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean et magna vitae metus fermentum interdum. Nulla sapien turpis, ultricies sit amet tristique id, congue eu mauris. Donec fringilla leo a augue congue, non interdum lorem bibendum. Vivamus lobortis nulla mi, in auctor enim rutrum quis.Nunc luctus orci et mi cursus congue. Pellentesque ultrices mi vitae maximus ullamcorper.Aliquam neque lectus, aliquet sit amet scelerisque nec, facilisis in metus. Sed nec diam sed urna rutrum lobortis. Cras nunc libero, laoreet in nibh eu, dapibus dictum nunc. Vivamus non euismod mauris, eu consectetur purus. Quisque volutpat et diam quis tempus.
            
            Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin porttitor tempus neque sit amet tincidunt. Duis sed ante sit amet ante tristique tristique. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas massa dui, consequat sed sem nec, pellentesque gravida mi. Sed id libero quis arcu sodales hendrerit. Donec vel dictum magna. Mauris mollis mattis enim, quis luctus sapien fermentum vitae. Mauris pellentesque, justo ac vehicula ultrices, dolor erat blandit est, ut tincidunt nibh libero quis felis. Vivamus in laoreet mi, vel posuere risus. Nunc aliquam sapien et libero hendrerit posuere. Nullam egestas, lectus et posuere accumsan, lacus leo facilisis leo, ac lobortis diam diam non lacus. Proin convallis est at sodales dignissim. Etiam ut bibendum ipsum. Nunc in vulputate ex.`,
            coverImage: "image-22.jpg",
            images: [
                { filename: "image-21.jpg", caption: "21 image" },
                { filename: "image-22.jpg", caption: "22 image" },
                { filename: "image-23.jpg", caption: "23 image" }
            ]
        }
    ];

var loc = window.location.pathname;
if (!loc.includes('blog-detail')) {
    // On blog page
    _addBlogsToDocument(myBlogs);
}
else {
    // On blog detail page
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const blogId = urlParams.get('blogId')
    if (blogId)
        _addBlogDetailsToDocument(myBlogs[blogId]);
}



function _addBlogsToDocument(myBlogs) {
    let blogContainer = document.getElementById("blogs");
    let timeline = document.getElementById("timeline-ul");

    myBlogs.forEach(function (blog) {
        // Add date to timeline
        let blogTimelineDate = document.createElement('li');
        blogTimelineDate.innerText = blog.date;
        timeline.appendChild(blogTimelineDate);

        // Now add blog
        // Create blog wrapper
        let blogWrapper = document.createElement('div');
        blogWrapper.className = 'blog-wrapper row';
        blogContainer.appendChild(blogWrapper);
        // Title
        let title = document.createElement("h2");
        title.innerText = blog.title;
        blogWrapper.appendChild(title);
        // Left col
        let leftCol = document.createElement('div');
        leftCol.className = "col-md-8 ta-center";
        blogWrapper.appendChild(leftCol);
        // Blog text
        let blogText = document.createElement('p');
        blogText.innerText = blog.text;
        leftCol.appendChild(blogText);
        // Read More button
        let moreButton = document.createElement('button');
        moreButton.blogId = blog.id;
        moreButton.onclick = onBlogReadMoreClicked;
        moreButton.innerText = "View full blog...";
        leftCol.appendChild(moreButton);
        // Right col
        let rightCol = document.createElement('div');
        rightCol.className = 'col-md-4';
        blogWrapper.appendChild(rightCol);
        // Cover image
        let coverImg = document.createElement('img');
        coverImg.className = "hidden-xs";
        coverImg.src = `images/blogs/${blog.id}/${blog.coverImage}`;
        rightCol.appendChild(coverImg);
    });
}


function onBlogNavClicked(e) {
}

function onBlogReadMoreClicked(e) {
    console.log("Blog clicked");
    let blogId = e.target.blogId;
    console.log(e.target.blogId);
    console.log(myBlogs[blogId])

    window.location.href = `blog-detail.html?blogId=${blogId}`;
}

function _addBlogDetailsToDocument(blog) {
    let blogDetailContainer = document.getElementById("blog-details");

    let title = document.createElement('h2');
    title.innerText = blog.title;
    blogDetailContainer.appendChild(title);

    let date = document.createElement('h4');
    date.innerText = blog.date;
    blogDetailContainer.appendChild(date);

    let blogText = document.createElement('p');
    blogText.innerText = blog.text;
    blogDetailContainer.appendChild(blogText);

    let imagesContainer = document.createElement('div');
    imagesContainer.className = 'blog-images-container';
    blogDetailContainer.appendChild(imagesContainer);

    blog.images.forEach(function (image) {
        let imageWrapper = document.createElement('div')
        imageWrapper.className = 'image-wrapper';
        imagesContainer.appendChild(imageWrapper);

        let img = document.createElement('img')
        img.src = `images/blogs/${blog.id}/${image.filename}`;
        imageWrapper.appendChild(img);

        if (image.caption) {
            let caption = document.createElement('span')
            caption.innerText = image.caption;
            imageWrapper.appendChild(caption);
        }
    });
}