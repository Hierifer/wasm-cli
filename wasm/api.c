//api_example.c
#include <stdio.h>
#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
void sayHi() {
  int count = 0;
  for(int i = 0; i < 1000000; i++){
    count += 2;
  }
  printf("result: %d\n",count);
}

EMSCRIPTEN_KEEPALIVE
int daysInWeek() {
  return 7;
}