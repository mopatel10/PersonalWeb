---
layout: layouts/base.hbs
title: Assignment 1
---

# Assignment 1


<div class="container">

### Helpful Links

[11ty Docs](https://www.11ty.dev/docs/)

### General Information

-   Rubric
    -   /5 Functionality
    -   /5 Creativity and Design
    -   /5 Documentation
    -   /5 Understanding of Project Requirements
    -   -5 (25%) Late
    -   -20 (100%) More than 72 hours late


### Requirements

You will create an 11ty project demonstrating the concepts of modern web development practices.

-   Decide on a theme and build your application around it.
-   Your header should have links to your lab/assignment instructions, write-ups, and other content pages.
-   You must have at least one data file that has a list of things relevant to your theme.

### Your project will:

-   Utilize a eleventy.config.js file for configuration
    -   Store your application code in a `src` folder, and your build artifacts in a `dist` folder.
    -   Use `passthroughCopy` to ensure your css and images are copied into your `dist` folder.
    -   Add a watch target to your `css` folder so that when your styles change, the watch server automatically rebuilds.
        -   For a bonus point, configure `SASS` and create at least 5 custom styles with it to show that it works and you understand what it's doing.
    -   Listen for the `eleventy.before` event and have it delete your entire `dist` folder before your build step starts.

-   Use a template engine that's not Nunjucks.
-   Use front matter in content files for metadata.
-   Reuse layout files to maintain structural consistency.
-   Handle static assets, your site should include some images and some custom styles.
-   Create `header` and `footer` partials.
    -   Your main navigation should live in your `header` file.
    -   The footer should include your full name, a copyright symbol, and the current year.  Use JavaScript to put the year here so it stays up to date over time.
        -   If you want, add links to your socials in the footer.
-   Create other static pages, 
    -   An `about` page that includes some details about yourself.  Include a way for potential employers to contact you.
    -   A `404` page that gets redirected to when a page is not found.  Configure the 11ty server so that it uses this page.
    -   A `terms-and-conditions` page, you can use GenAI or grab a template from online to populate this page.
        -   Put a link to this page in your footer.

-   Organize content with the use of collections and pagination.
    -   Create a partial template for your pagination control.
    -   Style the control with bootstrap classes.
    -   The page number you're currently on should be `active`.
    -   Include `Next` and `Previous` buttons.
        -   If you're on the first page, `Previous` should be disabled.
        -   If you're on the last page, `Next` should be disabled.


The theme/content of your site is your own to choose.  Be as creative as you’d like.  You may look at the starter project for inspiration, but your final project should be substantially different.

Further you will provide documentation that indicates all key aspects of the project and guidance on how to maintain. If the scope of the project has significantly shifted since Lab 1, this is not necessarily a problem, but indicate how and why.

### Grading Summary

For specifics, see the assignment rubric on DC Connect.

-   /5 functionality
-   /5 creativity and design
-   /5 documentation
-   /5 understanding of project requirements

-   -5 (25%) late
-   -20 (100%) more than 72 hours late

</div>