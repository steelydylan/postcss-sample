# PostCSS Sample

You can learn PostCSS from this sample


## post-cssnext
You can use latest CSS syntax like variables

before
```css
:root {
	--primary-color: #e86100;
	--secondary-color: #2c3e50;
	--base-fontsize: 1rem;
}
.h1 {
	color: var(--primary-color);
}
```

after
```css
.h1 {
	color: #e86100;
}
```

## postcss-nested

before
```css
.phone {
	&Title {
		width: 100px;

		&.titleRight {
			float: right;

			.link {
				color: $red;
			}
		}
	}
}
```

after
```css
.phoneTitle {
	width: 100px;
}
.phoneTitle.titleRight {
	float: right;
}
.phoneTitle.titleRight .link {
	color: #f00;
}
```

## postcss-mixins
before
```css
@define-mixin icon $name {
		padding-left: 16px;

	&::after {
		content: "";
		background-url: url(/icons/$(name).png);
	}
}
.search {
	@mixin icon search ;
}
```

after
```css
.search {
	padding-left: 16px;
}

.search::after {
	content: "";
	background-url: url(/icons/search.png);
}
```

## postcss-simplevars

before
```css
$dir:    top;
$blue:   #056ef0;
$column: 200px;

.menu_link {
    background: $blue;
    width: $column;
}
.menu {
    width: calc(4 * $column);
    margin-$(dir): 10px;
}
```

after
```css
.menu_link {
    background: #056ef0;
    width: 200px;
}
.menu {
    width: calc(4 * 200px);
    margin-top: 10px;
}
```
