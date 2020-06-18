clean:
	docker-compose down

dev-front:
	npm run start --prefix front

dev-back:
	docker-compose up db adminer & \
	npm run dev --prefix back

dev-storybook:
	npm run storybook --prefix back
