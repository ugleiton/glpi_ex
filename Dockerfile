FROM ugleiton/glpi:9.2.3

#alterações
COPY change/inc/* /var/www/html/inc/
COPY change/js/* /var/www/html/js/
COPY change/locales/* /var/www/html/locales/