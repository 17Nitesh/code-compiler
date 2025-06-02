FROM gcc:latest

WORKDIR /app

CMD g++ main.cpp -o main && ./main
