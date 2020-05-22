# Project Details
---
```
	Project Name: [TEMPLATE-NAME]
	Date Commence: [DATE]
	Repository URL: https://bitbucket.org/mark_calderon/template_html/src/master/
	Project Sheet: [URL]
	Project Flow: [URL]
```

# Table of Content:
0. [Back to Main Directory](../../wiki/Home/)
1. [Features](#markdown-header-features)
2. [Requirements](#markdown-header-requirements)
3. [Project tree Structure](#markdown-header-project-tree-structure)
4. [How-To's](#how-to-new-template-for-skeletonnew-project)
5. [Git Tags](#markdown-header-git-tags)
6. [Class Structure](#markdown-header-class-structure)
7. [Guides](#markdown-header-guides)
8. [Coding Rules](#markdown-header-coding-rules)

# Features
```
	*Prepos
	*BEM Compliant
	*SCSS(SASS)
	*PUGJS(Jade)
	*Mixins
		z-index organizer
		content holder management
		font management
		flex management
		mobile responsive include code
```

# Requirements
```
	1. Prepos 7
	1. Experience in SCSS, MIXINS, PUGJS
	3. NPM Knowledge for Bitbucket Pipelines
```

# Project tree Structure
	* Empty/blank files or folders should be in public/distribution.
	* Files that are not used in public/dist should be removed/disabled or commented out.
	* PUGJS, SCSS folder and Production/Source Files should not be placed in public/distribution.
```

	-> projectname (Git Project Name)
		-> projectname-html / projectname-wp (Git Repository, - Development Environment/CLI Directory opens/starts here...)
			-> public
				-> assets
					-> libs (Third party libraries like Swiper, AOS.js, Fonts, including css and js)
						-> Fonts
					-> img (Compressed Images)
					-> js (Distribution-ready)
					-> css (Distribution-ready)
					-> video 
				-> index.html (top)
				-> child (child)
					->index.html(child)
			-> src
				-> index
					-> inc
						-> meta.pug
						-> config.pug
						-> section
							-> section01.pug
							-> section02.pug
					-> index.pug (top)
				-> child
					-> inc
						-> config.pug
						-> meta.pug
						-> section
							-> section01.pug
							-> section02.pug
					-> index.pug(child)
				-> common
					-> header.pug
					-> footer.pug
					-> config.pug
			-> htaccess
				-> .htaccess
				-> .htpasswd
			-> .git-ftp-ignore
			-> .gitignore
			-> bitbucket-pipelines.yml
			-> prepos.config
			-> package.json
			-> readme.md
```

### How to New Template (for skeleton/new project)
```
	1. Understand Project Structure and Requirements
	2. Set Site Authentication @htaccess folder
	3. Set output of Source files 'main.scss' and 'pug files' to Public accordingly.
```

#  Git Tags
Commit tags to identify process
```
	[feat] - new features/ functions added
	[edit] - changes to existing information
	[clean] - removal of unneeded variables, files, syntax or code blocks
	[fix] - for corrections/fixes of breaking changes
	[merge] - for merging of branches
	[snap] - for backup or for precompilation of production files
	[wip] - work in progress
```

# Class Structure
---

### Top/KV pages or Slider
```
<!-- SINGLE LANDING KV -->
Main should have a style applied: display: block to work properly.

<main>
	<section class="kvSection">
		<section class="kvSection__inner">
			<figure class="kvSection__imageArea"></figure>
			<div class="kvSection__textArea01">
				<p class="kvSection__textArea01__text01"></p>
			</div>
			<div class="kvSection__textArea02">
				<p class="kvSection__textArea02__text01"></p>
			</div>
		</section>
	</section>
</main>

<!-- SLIDER -->

<section class="kvSection">
	<section class="kvSection__inner">
		<section class="kvSection__slider">

			<!-- SLIDE 1 -->
			<article class="kvSection__slider__slide">
				<figure class="kvSection__slider__slide__imageArea">
					<img class="kvSection__slider__slide__imageArea__kv" alt="kv image src="#">
				</figure>
				<div class="kvSection__slider__slide__textArea01">
					<p class="kvSection__slider__slide__textArea01__text01"></p>
				</div>
				<div class="kvSection__slider__slide__textArea02">
					<p class="kvSection__slider__slide__textArea02__text01"></p>
				</div>
			</article>

			<!-- SLIDE 2 -->
			<article class="kvSection__slider__slide">
				<figure class="kvSection__slider__slide__imageArea">
					<img class="kvSection__slider__slide__imageArea__kv" alt="kv image src="#">
				</figure>
				<div class="kvSection__slider__slide__textArea01">
					<p class="kvSection__slider__slide__textArea01__text01"></p>
				</div>
				<div class="kvSection__slider__slide__textArea02">
					<p class="kvSection__slider__slide__textArea02__text01"></p>
				</div>
			</article>
		
		</section>
	</section>
</section>
```

### Child pages
```
<main class="child">
	<section class="mainSection">
		<section class="mainSection__container">
			<aside class="mainSection__container__aside"></aside>
			<section class="mainSection__container__content">
				<!-- Add page/section for specific page rules (topSection) -->
				<div class="mainSection__container__content__inner topSection"></div>
			</section>
		</section>
	</section>
</main>
```

### Section content
```
<section class="section01">
	<hgroup>
		<h2 class="section01__header"></h2>
		<h3 class="section01__subheader"></h3>
	</hgroup>
	<section class="section01__inner"></section>
</section>
```

### Listings
```
<section class="productList">
	<article class="productList__item"></article>
	<article class="productList__item"></article>
	<article class="productList__item"></article>
</section>
```


### Image Container
```
<figure class="imageArea">
	<img class="imageArea__thumbnail" alt="image" src="/">
	<figcaption>I am a caption</figcaption
</figure>
```

### Text Container
```
<div class="textArea01">
	<p class="textArea01__text01"></p>
</div>
<div class="textArea02">
	<p class="textArea02__text01"></p>
	<p class="textArea02__text02"></p>
</div>
```

### Table Container
```
<table class="tableArea">
	<thead>
		<tr>
			<th>label</th>
			<th>label</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<th class="label"></td>
			<td class="content"></td>
		</tr>
	</tbody>
	<tfoot>
		<tr>
			<td>footer</td>
			<td>footer</td>
		</tr>
	</tfoot>
</table>
```

### List 
```
<dl>
	<dt>Coffee</dt>
	<dd>Black hot drink</dd>
	<dt>Milk</dt>
	<dd>White cold drink</dd>
</dl>
```

### Address
```
<address>
	Address 12345
	Street, Building
</address>
```

### Telephone 
```
<a href="tel:000000">000-123-1234</a>
```

### Footer, Copyright
```
<footer>
	<small> Copyright &copy; 2019 #{site_name} All Rights Reserved.</small>
</footer>
```

# Guides
---
### Using Prepos, for FTP upload
(Auto FTP may be enable, disable before updating or saving to avoid overwriting files on test/live site)
```
	FTP settings
	Remote Path: /html/
	Upload Timeout: 20000
	Upload on Change(WARNING: UNCHECK when in development phase, it may overwrite test/live files)
	Host: ...
	Post: 21
	Username: ...
	Password: ...

```

### Using nodeJS CLI, for compiling SCSS/SASS
```
	1. Navigate towards Projects Folder >> html >> assets
	2. Type: sass --watch scss:css 
	3. sass -w src/scss:dist/_assets/css --no-cache --style compact - to ouput to the dist/_assets/css/ folder
```

### HTACCESS 
```
	1. Edit and Replace [REPLACED] text with actual server name
	2. 	Username: projectname
		Password: test
	3. Place .htaccess and .htpasswd to root>>html
```

### Image Compression
```
	1. Go to https://tinypng.com/
	2. Place files you want to compressed onto the task list
	3. Append '-min' to file name(This may depend on project).
```

### Image Type 
```
	1. Check whether image is required to have transparency or rounded edges. If yes, export as PNG otherwise, use JPEG type format
```

### Git Usage
```
	(When merging, pulling or pushing, it is recommended to check what is your current branch)
	(Before pushing, make sure that, there are no recent requests to pull or branch is up to date)

	Initial Setup
	1. Get initial git url from Bitbucket
	2. Navigate towards htdocs>>projectname-html/wp>>[repository]
	git clone https://mark_calderon@bitbucket.org/mark_calderon/template_html.git
	3. [Apply changes]
	4. git add .
	5. git commit -m "[wip] initial structure"`

	4. Other Commands
		git add . - adds all untracked and modified files.
		git commit -m "[commit tag] message here...".
		git push origin master - push local changes to remote master branch
		git push origin [branch name] push local changes to remote [branch name]
		git pull origin master - pull remote changes to local master branch
		git pull origin [branch name] - pull remote branch to local current branch 
		git checkout - switches to branch
		git reset --hard - returns to last commit pushed
		git remote set-url origin [git url] - changes the existing url of current repository
		git checkout -b [branch name] - creates a new branch and switched to it
		git branch - check current branch

```

#### Font Guide
(Font guide can be accessed here)
```
https://drive.google.com/file/d/1ucyb9Z9ADDO8WP3PZFhDCtE8UO0wzmi9/view?usp=sharing
```

### Using Google Tag Manager for Click Events (As of 11/04/2019)
```
1. Check if Google Tag Analytics is added to <head> and <body>
2. Get Google Analytics Tracking ID
3. Log into Google Tag Manager https://tagmanager.google.com/
4. Set Variables
	-> Built-in variables 
		-> Click on 'Configure'
			-> Under Clicks (Check the following checkboxes)
				-> [x] Click Element
				-> [x] Click Classes
				-> [x] Click ID
				-> [x] Click Target
				-> [x] Click URL
				-> [x] Click Text
5. Set Triggers
	-> Click on 'New'
			-> Change 'Untitled Trigger' to a different name
			-> Click on 'Trigger Configuration'
					-> All Elements
			-> This trigger fires on [x] Some Clicks
			-> Select 'Click Classes', 'contains', 'className'

6. Set Tags
	-> Click on 'New'
	-> Click on 'Tag Configuration'
			-> Select 'Google Analytics: Universal Analytics'
			-> Change Track type to 'Event'
			-> Type 'categoryName' as category
			-> Type 'actionName' as Action
			-> Check [x] Enable overriding settings in this tag.
			-> Enter Tracking ID as given in Google Analytics
	-> Click on 'Triggering'
			-> Select the trigger you have created.
7. Click on 'Preview' to test on site while viewing the Google Analytics tools
8. Click on Publish, once everything is set.

```

### Mixins(For Development)
(Take note of the default values)

#### z-index
(Managing z-index order)
```
	@include z-index(nameOfVariable);
	Register elementName/Variable in variable.scss or similar
```

#### dFont
(Managing font assignments)
```
	@include dFont($fw: 100, $fs: 1rem, $flh: 1.5, $fc: $black, $ff: $fontFamily, $ls: normal);
```
Variables:
```
	$fw - font weight
	$fs - font size
	$flh - line height
	$fc - font color
	$ff - font family
	$ls - letter spacing
```

#### dContent 
(Managing content containers and image containers)
```
	@include dContent($w: 100%, $pl: 23px, $pr: 23px, $bgc: $white, $fa: left, $m: auto);
```
Variables:
```
	$w - max-width
	$pl - padding left
	$pr - padding right
	$bgc - background color
	$fa - font alignment
	$m - margin

	It has a built in @include mRes to switch to 100% when in mobile size
```

#### dCenter
(For centering an element like in a banner or kv container);
```
	@include dCenter($w: auto, $pl: 0, $pr: 0);
	$w - max-width
	$pl - padding left
	$pr - padding right
```

#### dFlexValue
(For display flex)
```
	@include dFlexValue(variable);
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
```
Variables:
``` 
	(1) type--all 
		>>
		align-items: center;
		justify-content: center

	(2) type--vertical
		>>
		align-items: center;

	(3) type--horizontal
		>>
		justfify-content: center;

	(4) type--direction--column
		>> 
		flex-direction: column;

	(5) type--all--column
		>> 
		flex-direction: column;
		align-items: center;
		justify-content: center;
```
#### mRes
(For MQ/ Mobile size or SP query)
```
	@include mRes {
		// It makes width to 100%
	}
```

#### hoverOpacity
(For hover animation - opacity fade)
```

	@include hoverOpacity;

```
# Coding Rules
---

#### CSS Placement of Rules
(Organize/Separate/Place specific rules to each specific file. This may depend on project specifications)
```
	* header > _header.scss
	* footer > _header.scss
	* common > _common.scss (Universal rules for all pages or components)
	* top > _top.scss (For first page in the hirearchy)
	* main > main.scss (For importing additional scss files)
```

#### URL Path usage
(Development structure may depend on project)
```
		* https://bitbucket.org/index.html (Absolute)
		* ./index.html (Relative) 
		* /index.html (Root) - Local viewing/test may not work, unless using http server/xampp/test site
```

#### Javascript Rules
```
	* Place javascript before the </body> tag
	* Functions will be placed at the top, and called at the bottom.
```

#### Readability Rules (P1 of P4)
```
	* All tags should have class names for easy maintainability.
	* Use a maximum of 2 decimal spaces (1.xx) for digit values(0.1 can be .1)
	* All colours, styling or fonts should be place at the base.scss
	* Font styling or colours should be done on the inner text tags and not on containers (<h1>-<h6>,<p>, and so on.)
	* Measurements should be checked through the browser ruler.
	* For box shadow, backgrounds with or without opacity use rgba() format for cross browser compatibility.
		For IE compatibility, it is recommended to have the background/object with shadow as an image.
	* Use shorthand values whenever possible.
		* Font (Always use the complete set)
			* > font: 500 10px/1.2 $fontFamily 
		* Background
			* > background: center / cover no-repeat url('./../image.png')
		* Margin/padding/animation/background
			* > margin: 0px 0px 0px 0px
			* > padding: 0px 0px 0px 0px
			* > animation: myName 1s ease;
			* > background: center center / cover no-repeat url('/image.png');

	* Space between parenthesis and space for improved readability.
		element__1 { }
		<SPACE>
		element__2<SPACE>{ }
		<TABSPACE>
			element__3<SPACE>{ }
```

#### ID or CLASS naming (P2 OF P4)
```
	* Use lower case only

	* Use double underscore (__) when naming classes
		.hello__good__morning
		#my__name__is

	* Use one hyphen (-) when creating modifiers
		&.txt-right
		&.color-blue
		&.content-circle
```

#### HTML Attribute Hierarchy (P4 OF P5)
(Position as follows from top > bottom)
```
		id
		class
		name
		data-*
		src, for, type, href, value
		title, alt
		aria-*, role
```

#### CSS Structure Hierarchy (P4 OF P5)
(Position as follows from top > bottom)
```
		border
	 	margin
	 	padding
		width
		height
		display
		position
			top 
			right 
			bottom 
			left 
		background values
		color
		font values
```

#### Image Naming Convention (P5 OF P5)
```
	* Use the image naming convention (This naming convension may depend on project)
	* Set alt according to the image displayed, for decorative elements, use (&nbsp;)
	* Use jpeg when transparency is not needed
	* Use png when transparency is needed
	* [pagename]_[typeofimage]_[01~].png or jpg
		Optional [typeofimage]: 
		bg Image used in background
		logo Images like company logo
		side Image used in side navgiation
		kv Image used in kv
		btn Image used with btn button
		ico Image used with ico icon
		bnr banner image
		tit heading image
		line line image
		txt On design, text to be imaged
		thumb Image used in thumbnail
		pht Photos and illustrations
```
