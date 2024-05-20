# My website

> _“All nature is but art, unknown to thee;
> All chance, direction, which thou canst not see;"_

This website is a dynamic and iterative exploration of my evolving consciousness. It serves as a persistent platform for the dissemination of my ideas, experiences, and intellectual pursuits across a diverse range of subjects.

Well, that sounds pretentious.

Nevertheless, I'll try to frequently update the site with new content as I gain more insight into things. If you have any questions or comments, please [contact me](https://twitter.com/abhinavexists) on Twitter.

## General

I love the [Jamstack](https://jamstack.org/), and [Hugo](https://gohugo.io/) offers so many features, there's nothing to lose here really.

## How to start

```bash
$ git clone https://github.com/abhinavborah/borah
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
