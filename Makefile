publish:
	npm publish --dry-run
install:
	npm ci
brain-games:
	node bin/brain-games.js
install:
	npm ci
publish:
	npm publish --dry-run
lint: 
	npx eslint .