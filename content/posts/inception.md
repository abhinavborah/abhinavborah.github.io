---
title: "Inception"
date: 2024-05-20T03:01:57+05:30
draft: false
toc: false
images:
tags:
  - meta
---

After putting it off for a while, I finally took the plunge and built this site. It's been a while since I posted anything, and that, combined with my love for clean developer portfolios motivated me to get started.

## Well, here goes nothing

I had a general idea for the design, but I wanted to keep things flexible. My inspiration comes from the minimal documentation styled portoflios where you can spend hours reading through the content. For the color scheme I decided to go with the classic [gruvbox](https://github.com/morhetz/gruvbox), it was an easy pick considering (at the time of writing this), most of my [ricing](https://excaliburzero.gitbooks.io/an-introduction-to-linux-ricing/content/ricing.html) is some variation on the theme.

[Jamstack](https://jamstack.org/) is an architectural approach to building websites that emphasize speed, security and scalability by separating the web experience layer from the business layer. Considering my website would mostly function as a blogging site, [Hugo](https://gohugo.io/) seemed like a good fit because I can write everything in markdown files and the SSG will render the contents resulting in faster loading times and making the overall site more performant. It also offers a good SEO support out of the box and enables you to add more functionality to your markdown files using their [shortcodes](https://gohugo.io/content-management/shortcodes/) feature.

> _"But then it must be very tedious to set up, right?"_

Here is a video showing how anyone can deploy a Hugo site under 2 minutes:

{{< youtube w7Ft2ymGmfc >}}

**_tl;dw_** the code below is from the official Hugo [docs](https://gohugo.io/getting-started/quick-start/):

```bash
$ hugo new site site_name && cd site_name # or site name can be path/to/site
$ git init
$ git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke # could be any other theme of your liking.
$ echo "theme = 'ananke'" >> hugo.toml
$ hugo new post/post_name.md # this will create a new markdown file in content/post/post_name.md. edit the file to your liking.
$ hugo server -D # runs a local server (usually on the port 1313). -D is for --buildDrafts
```

**(OR)** My preferred method:

```bash
$ hugo new site site_name && cd site_name # or site name can be path/to/site
$ hugo mod init module_path # (optional) to initialise the project as a module (module_path can be the link to your repo). generated a go.mod file.
$ echo "[module]
[[module.imports]]
path = "github.com/theNewDynamic/gohugo-theme-ananke"
disable = false" >> hugo.toml # (or any other theme of your liking) you dont have to git clone the theme using this method.
$ echo "theme = 'ananke'" >> hugo.toml
$ hugo new post/post_name.md # this will create a new markdown file in content/post/post_name.md. edit the file to your liking.
$ hugo server -D # runs a local server (usually on the port 1313).
```

For further tweaking, check out the theme docs (usually provided in their repo's README.md; assuming you're using a theme) and customise the `hugo.toml` file in your root directory of the project.
