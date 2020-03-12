install:
	npm install

start:
	npx node bin/brain-progression.js

start1:
	npx node bin/brain-calc.js	

publish:
	npm publish --dry-run

lint:
	npx eslint .

