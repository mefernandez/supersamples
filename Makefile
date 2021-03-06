clean:
	@rm -rf example-docs

# run the "example" tests with the api-swatch reporter
example-docs: example lib
	@node_modules/.bin/mocha --compilers coffee:coffee-script --reporter supersamples example/test

# shortcut to open the generated example docs
open:
	open example-docs/index.html

# deploy the example docs to https://github.com/rprieto/api-swatch
deploy: example-docs
	git commit example-docs -m "Regenerate example docs"
	git subtree split --prefix example-docs -b gh-pages
	git push -f origin gh-pages:gh-pages
	git branch -D gh-pages

.PHONY: clean open deploy
