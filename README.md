# My website

This is an ever evolving project where I attempt to maintain a journal and update the site with new content as I gain more insight about life. If you have any questions or comments, please [connect with me](https://twitter.com/abhinavexists) on Twitter.

## General

Built with [Hugo](https://gohugo.io/) and a passion for writing.

## How to start (WIP)

Option #1: Clone it directly to your local machine

```bash
$ git clone https://github.com/abhinavborah/abhinavborah.github.io
```

## Credits:

The design for the website is based off the [hello-friend-ng](https://themes.gohugo.io/themes/hugo-theme-hello-friend-ng/) hugo theme.

## Features (WIP):

### Image shortcode

- the image shortcode supports captions now.

Properties:

- `src` (required)
- `alt` (optional)
- `position` (optional, default: `left`, options: [`left`, `center`, `right`])
- `style`

NOTE: Captions are center-aligned by default. If you want to change the default behavior, you can edit the `layouts/shortcodes/image.html` file.

Example:

```golang
{{< image src="/img/hello.png" alt="Hello Friend" position="center" style="border-radius: 8px;" caption="Your caption text here." >}}
```

## TODOS:

- write more about the site
- ~~create a section to download my resume~~
- work on the footer
