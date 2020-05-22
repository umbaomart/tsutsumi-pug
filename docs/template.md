# **Top page(index.pug)**
* Include Paths based on current directory, if the file is located at the upper directory then ../ should be added. 
* Element attributes can only be accepted between brackets (id="" tag="", src="", class="")
* //- are comments that will not be included during compilation (they output as <!-- COMMENT -->)
* Regular comments are also accepted in PUG but use it wisely
* // are comments that will be included during compilation

```
include pug_includes/settings.pug
```
* For these template, the Settings.pug file controls what script, style seo include/exclude condition

```
doctype html
|
html(lang="ja")
    |
    // head
```
* Include is used to specify to add that component or part into the page during compilation. 
* meta contains the SEO settings for a specific page 
* head contains the accessibility tag, style tags and language tags of a page 
* header contains the navigation bar, sp menu bar
* sectionkv contains the landing page slider, image or messages
* section01~ contains the content per section

```
    include pug_includes/topsection/meta.pug
    include pug_includes/head.pug
    // / head
    |
    |
    body(id="pagetop")
        // header
        include pug_includes/header.pug
        // / header
        |
        |
        // main
        .mainsection
            .mainsection-container
                .mainsection-container-content
                    .mainsection-container-content-inner(class="topcontent")
                        |
                        |
                        // section kv
                        include pug_includes/topsection/sectionKV.pug
                        // / section kv
                        |
                        |
                        // section01
                        include pug_includes/topsection/section01.pug
                        // / section01
                        |
                        |
            |
            |
```

* footer contains the scripts tags and footer content

```
            // footer
            include pug_includes/footer.pug
            // / footer
        // / main

```

# ** head.pug** 

* if statements is a condition, if true, what is indented inside will be included during compilation
* #{value} these are variables similar to ES6 literals concatenations
* =value another way in calling when applying to a attribute value


```
head 
    if isGoogleTagManager
        |
        |
        <!-- Google Tag Manager -->
```

* For script tags with javascript inside, [use script.] and indent once before typing the script functions.

```
        script.
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-KBCPNSS');
        |
        |
        <!-- End Google Tag Manager -->
        |
        |
    meta(name="content-language" content="ja")
    meta(http-equiv="Content-Type" content="text/html; charset=utf-8")
    meta(http-equiv="X-UA-Compatible" content="IE=edge")
    meta(name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=2.0,user-scalable=yes")
    |
    |
    |
```
* PUG supports javascript. Most of the content like page_description are variables. For this structure, the variables comes from the included pug file named: meta.pug
* For these template, the Settings.pug file controls what script, style seo include/exclude condition

```
    <!-- meta infomation -->
    title #{page_title}
    meta(name="description", content=page_description)
    meta(name="keywords", content=page_keyword)
    |
    |
    |
    <!-- canonical url -->
    link(rel="canonical", href=page_url)
    //- SEO CONFIGURATION [SET DIRECTORY ONLY]
    if isSocialSEO
    |
    |
    <!-- ogp meta infomation -->
    meta(property="og:url", content=page_url)
    meta(property="og:type", content=page_type)
    meta(property="og:title", content=page_title)
    meta(property="og:locale", content=page_locale)
    meta(property="og:image", content=page_image)
    meta(property="og:description", content=page_description)
    meta(property="og:site_name", content=site_name)
    |
    meta(name="twitter:card", content=tw_app_card)
    meta(name="twitter:title", content=page_title)
    meta(name="twitter:description", content=page_description)
    meta(name="twitter:url", content=page_url)
    meta(name="twitter:image", content=page_image)
    //- END OF STYLE CONFIGURATION
    |
    |
    |
    <!-- include style sheet -->
    |
    //- STYLE CONFIGURATION [SET DIRECTORY ONLY]
    if isSwiper
        link(href="/assets/libs/swiper.min.css" rel="stylesheet")
    if isAOE
        link(href="/assets/libs/aos.css" rel="stylesheet")
    if isSlick
        link(href="/assets/libs/slick.css" rel="stylesheet")
        link(href="/assets/libs/slick-theme.css" rel="stylesheet")
    if isSlideBar
        link(href="/assets/libs/slidebars.css" rel="stylesheet")
    //- END OF STYLE CONFIGURATION
    |
    link(href="/assets/css/main.css" rel="stylesheet")
    |
    |
    <!-- include shortcut icon -->
    if isFavicon
        link(rel="icon" href="/assets/img/common/favicon.ico" type="image/x-icon")
        link(rel="shortcut icon" href="/assets/img/common/favicon.ico" type="image/x-icon")
        link(rel="apple-touch-icon" href="/assets/img/common/apple-touch-icon-152x152.png" sizes="152x152" type="image/x-icon")
    |
    |

```