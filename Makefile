install:
	npm install

start:
	npx node src/bin/brain-progression.js

start1:
	npx node src/bin/brain-calc.js	

publish:
	npm publish --dry-run

lint:
	npx eslint .

