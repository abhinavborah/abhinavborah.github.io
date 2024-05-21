---
title: "Inception"
date: 2024-05-20T03:01:57+05:30
draft: false
toc: false
images:
tags:
  - meta
  - philo
  - tech
---

> After putting it off for a while, I finally took the plunge and built this site. It's been a while since I posted anything, and that, combined with my love for clean dev blogs motivated me to get started.

## **_well, here goes nothing_**

I had a general idea for the design, but I wanted to keep things flexible. My inspiration comes from the minimal dev blogs in the format of a documentation where you can spend hours reading through the content. For the color scheme I decided to go with the classic [gruvbox](https://github.com/morhetz/gruvbox), it was an easy pick considering (at the time of writing this), most of my [ricing](https://excaliburzero.gitbooks.io/an-introduction-to-linux-ricing/content/ricing.html) is some variation on the theme.

## **_the nuts and bolts_**

[Jamstack](https://jamstack.org/) is an architectural approach to building websites that emphasize speed, security and scalability by separating the web experience layer from the business layer. Considering my website would primarily consist of static markup files, [Hugo](https://gohugo.io/) seemed like a good fit because I can write everything in markdown and the SSG will render its contents resulting in faster loading times and making the overall site more performant. It also offers a good SEO support out of the box and enables you to add more functionality to your markdown files using their [shortcodes](https://gohugo.io/content-management/shortcodes/) feature.

> _"But then it must be very tedious to set up, right?"_

Here is a video showing how anyone can deploy a Hugo site under 2 minutes:

{{< youtube w7Ft2ymGmfc >}}

**_tl;dw_** the code below is from the official Hugo [docs](https://gohugo.io/getting-started/quick-start/):

```bash
$ hugo new site site_name && cd site_name # or site name can be path/to/site
$ git init
$ git submodule add https://github.com/theNewDynamic/gohugo-theme-ananke.git themes/ananke # could be any other theme of your liking.
$ echo "theme = 'ananke'" >> hugo.toml
$ hugo new post/post_name.md # this will create a new markdown file in content/post/post_name.md where you can put your content.
$ hugo server -D # runs a local server (usually on the port 1313). -D is for --buildDrafts. Please see the docs for more info.
```

**(OR)** My preferred method:

```bash
$ hugo new site site_name && cd site_name
$ hugo mod init module_path # (optional) to initialise the project as a module.
$ echo "[module]
[[module.imports]]
path = "github.com/theNewDynamic/gohugo-theme-ananke"
disable = false" >> hugo.toml # so that you dont have to git clone the theme.
$ echo "theme = 'ananke'" >> hugo.toml
$ hugo new post/post_name.md
$ hugo server -D
```

For further configuration, check out the theme docs (usually provided in their repo's `README.md`) and customize the `hugo.toml` file in the root directory of your project.

## **_what led to this?_**

> The inherent ephemerality of our mortal coil compels us to engage in the Sisyphean task of constructing an enduring monument to the self, a defiant riposte against the encroaching oblivion that awaits us all.
>
> ~ some pretense dude on the internet

I constantly have the urge to explore new interests. There's only so many things you can excel at in a lifetime. Some call it "the jack of all trades", some others "a generalist". This blog isn't built around a specific theme or niche, instead think of it as a blank slate. Let's see where the rabbit hole of knowledge leads us. It's all about following the breadcrumbs of curiosity and sharing the adventure with anyone who wants to join.

We humans have this itch, this burning need to etch our names onto the world. We want our work to echo through the ages, sparking debate or admiration centuries later. I'm just leaving a digital breadcrumb here for my future self. Maybe if I visit this exact article a decade later, I'll have a cringe at it.

#### _The insatiable wellspring of knowledge beckons, yet the sands of time slip swiftly through my grasp._
