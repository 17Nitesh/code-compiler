FROM gcc:latest

WORKDIR /app

CMD gcc main.c -o main && ./main
