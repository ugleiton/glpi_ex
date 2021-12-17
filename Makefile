DOCKER-COMPOSE=docker-compose -f docker-compose-dev.yml

.PHONY: restart
restart:
	$(DOCKER-COMPOSE) restart

.PHONY: up
up:
	$(DOCKER-COMPOSE) up -d

.PHONY: down
down:
	$(DOCKER-COMPOSE) down


.PHONY: logs
logs:
	$(DOCKER-COMPOSE) logs -f --tail=100 glpi

.PHONY: recreate
recreate:translate
	$(DOCKER-COMPOSE) build
	$(DOCKER-COMPOSE) up -d glpi

#traducoes baixadas de https://www.transifex.com/glpi/GLPI/language/pt_BR/
#depende de gettext - > apt-get install gettext
.PHONY: translate
translate:
	msgfmt base/locales/for_use_GLPI_glpipot92_pt_BR.po -o change/locales/pt_BR.mo

