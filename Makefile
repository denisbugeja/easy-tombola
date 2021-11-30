build:
	cp generator.html image.png ./dist/
	sed -i "s|<link.*data-inline.*|<style>`cat style.min.css`</style>|g" ./dist/generator.html
