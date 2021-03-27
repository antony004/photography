let myBlogs =
    [
        {
            id: 0,



<<<<<<< Updated upstream
The short: look for the jetties.
The long: look for the jetties. They make it easier and less tiring to paddle out. The current along them will pull you in further to the deep and all there is to do is lay on the board and enjoy the ride. A couple popular beaches with a few of them also happen to have surf shops nearby, <a href="https://www.lakeeffectsurfshop.com"> Lake Effect shop in Milwaukee, WI </a> and {link} Third Coast shop in St. Joseph, MI. They will be glad to guide anyone in the process of getting started. If you want to try the sport, they have the equipment to rent for a day. If you happen to fall in love with it, then it’s highly recommended to invest in your own gear. That way you can explore different parts of the lake.
=======
>>>>>>> Stashed changes








            coverImage: "image-000.jpg",
            images: [
<<<<<<< Updated upstream
                { filename: "image-001.jpg" },
                { filename: "image-002.jpg" },
                { filename: "image-003.jpg" }

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
=======
>>>>>>> Stashed changes
            ]
        },

        
    ];

// This automaitcally gets called when the script loads since it isn't nested
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
    else
        window.location.replace('blog.html'); // If no paramater, then redirect to blog page
}



function _addBlogsToDocument(myBlogs) {
    let blogContainer = document.getElementById("blogs");
    let timeline = document.getElementById("timeline-ul");

    myBlogs.forEach(function (blog) {
        // Add date to timeline
        let blogTimelineDate = document.createElement('li');
        blogTimelineDate.blogId = blog.id;
        blogTimelineDate.innerText = blog.date;
        blogTimelineDate.onclick = onBlogNavClicked;
        timeline.appendChild(blogTimelineDate);

        // Now add blog
        // Create blog wrapper
        let blogWrapper = document.createElement('div');
        blogWrapper.id = `b-${blog.id}`
        blogWrapper.className = 'blog-wrapper row';
        blogContainer.appendChild(blogWrapper);
        // Title
        let title = document.createElement("h2");
        title.innerText = blog.title;
        blogWrapper.appendChild(title);
        // Date
        let date = document.createElement("h4");
        date.innerText = blog.date;
        blogWrapper.appendChild(date);
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
        coverImg.src = `media/blogs/${blog.id}/${blog.coverImage}`;
        rightCol.appendChild(coverImg);
    });
}


function onBlogNavClicked(e) {
    let clickedId = e.target.blogId;
    let scrollToBlog = document.getElementById(`b-${clickedId}`);
    scrollToBlog.scrollIntoView({ behavior: 'smooth', block: 'center' }); //https://usefulangle.com/post/156/javascript-scroll-to-element
}

function onBlogReadMoreClicked(e) {
    // console.log("Blog clicked");
    let blogId = e.target.blogId;
    // console.log(e.target.blogId);
    // console.log(myBlogs[blogId])
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

<<<<<<< Updated upstream
    if (blog.video) {
        let video = document.createElement('video');
        video.controls = true;
        let source = document.createElement('source');
        source.src = blog.video;
        source.type = "video/mp4";
        video.appendChild(source);
        blogDetailContainer.appendChild(video);
    }

    let blogText = document.createElement('div');
    blogText.className = 'blog-text';
    var reg = /(<a href=".*?">.*?<\/a>)/gm;
    let splitText = blog.text.split(reg); // Convert text into array of groupings
    console.log(splitText);
    splitText.forEach(group => {
        if (reg.test(group)) {
            // this is a link tag
            let linkTag = document.createElement('a');
            linkTag.innerText = blog.text;
            let linkMatch = /"(.*?)"/m.exec(group); // get the website
            linkTag.href = `${linkMatch[1]}`;
            let textMatch = />(.*?)<\/a>/m.exec(group); // get the inner text
            //console.log(textMatch);
            linkTag.innerText = textMatch[1];
            linkTag.style.display = 'inline';
            blogText.appendChild(linkTag);
        } else {
            // this is regular text
            let blogInnerText = document.createElement('span');
            blogInnerText.innerText = group;
            blogInnerText.style.display = 'inline';
            blogText.appendChild(blogInnerText);
        }
    });
    //console.log(blogText)
=======
>>>>>>> Stashed changes
    blogDetailContainer.appendChild(blogText);

    let imagesContainer = document.createElement('div');
    imagesContainer.className = 'blog-images-container';
    blogDetailContainer.appendChild(imagesContainer);

    blog.images.forEach(function (image) {
        let imageWrapper = document.createElement('div')
        imageWrapper.className = 'image-wrapper';
        imagesContainer.appendChild(imageWrapper);

        let img = document.createElement('img')
        img.src = `media/blogs/${blog.id}/${image.filename}`;
        imageWrapper.appendChild(img);

        if (image.caption) {
            let caption = document.createElement('span')
            caption.innerText = image.caption;
            imageWrapper.appendChild(caption);
        }
    });
}