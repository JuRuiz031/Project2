#!/bin/bash

docker cp ./seed/mongodump polls-mongodb:/tmp/mongodump && \
docker exec -it polls-mongodb bash -lc '
  mongorestore \
    -u root -p password --authenticationDatabase admin \
    --nsFrom="calendario.polls" \
    --nsTo="polls_db.polls" \
    --drop \
    /tmp/mongodump
'
# Zu Verbindung herstellen:
# Port: 27018
# Benutzername: root
# Passwort: password
