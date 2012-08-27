mortar:
	rm -rf .app-stub-temp
	./vendor/mortar/bin/build app-stub .app-stub-temp
	- cp -an .app-stub-temp/www/. public/.
	rm -rf .app-stub-temp public/.htaccess public/404.html public/index.html
