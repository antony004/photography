// Called when script is loaded
$(() => {
    let myBlogs = [];
    myBlogs.push({
        id: 0,
        title: "My First Blog",
        date: "Jan 21 2020",
        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit.
         Sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        coverImage: "image-19.jpg",
        images: [{ filename: "image-19.jpg", caption: "First image" }]
    })

    // Add HTML dynamically
    _addBlogsToDocument(myBlogs);
})

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
        leftCol.className = "col-md-7 ta-center";
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
        rightCol.className = 'col-md-5';
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
    console.log(e.target.blogId);
}

// $(() => {
//     let stickyTop = 0,
//         scrollTarget = false

//     let timeline = $('.timeline__nav'),
//         items = $('li', timeline),
//         milestones = $('.timeline__section .milestone'),
//         offsetTop = parseInt(timeline.css('top'))

//     const TIMELINE_VALUES = {
//         start: 190,
//         step: 30
//     }

//     $(window).resize(function () {
//         timeline.removeClass('fixed')

//         stickyTop = timeline.offset().top - offsetTop

//         $(window).trigger('scroll')
//     }).trigger('resize')

//     $(window).scroll(function () {
//         if ($(window).scrollTop() > stickyTop) {
//             timeline.addClass('fixed')
//         } else {
//             timeline.removeClass('fixed')
//         }
//     }).trigger('scroll')

//     items.find('span').click(function () {
//         let li = $(this).parent(),
//             index = li.index(),
//             milestone = milestones.eq(index)

//         if (!li.hasClass('active') && milestone.length) {
//             scrollTarget = index

//             let scrollTargetTop = milestone.offset().top - 80

//             $('html, body').animate({ scrollTop: scrollTargetTop }, {
//                 duration: 400,
//                 complete: function complete() {
//                     scrollTarget = false
//                 }
//             })
//         }
//     })

//     $(window).scroll(function () {
//         let viewLine = $(window).scrollTop() + $(window).height() / 3,
//             active = -1

//         if (scrollTarget === false) {
//             milestones.each(function () {
//                 if ($(this).offset().top - viewLine > 0) {
//                     return false
//                 }

//                 active++
//             })
//         } else {
//             active = scrollTarget
//         }

//         timeline.css('top', -1 * active * TIMELINE_VALUES.step + TIMELINE_VALUES.start + 'px')

//         items.filter('.active').removeClass('active')

//         items.eq(active != -1 ? active : 0).addClass('active')
//     }).trigger('scroll')
// })