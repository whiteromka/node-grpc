Простой grpc сервер на node

Для установки выполнить команды в папке с проектом:
docker compose up --build
docker compose up -d

Провалиться в контейнер:
docker exec -it grpc-server sh

Смотреть лог в реальном времени:
docker logs -f grpc-server