#include <stdio.h>
#include <string.h>

int my_printf(char *format_string, char *param) {
  for (int i = 0; i < strlen(format_string); i++) {
    if ((format_string[i] == '#') && (format_string[i + 1] == 'k')) {
      i++;
      for (int j = 0; j < strlen(param); j++) {
        char letter = param[j];
        if (letter > 65 && letter < 90) {
          letter = letter + 32;
        } else if (letter > 97 && letter < 122) {
          letter = letter - 32;
        }
        putchar(letter);
      }
    } else if ((format_string[i] == '#') && (format_string[i + 1] == '.')) {
      i += 2;
      char tab_with_number[1024];
      for (int j = 0; j < strlen(format_string); j++) {
        if (format_string[i + j] == 'k') {
          break;
        }
        tab_with_number[j] = format_string[i + j];
      }
      i++;
      int number = atoi(tab_with_number);

      for (int j = 0; j < number; j++) {
        char letter = param[j];
        if (letter > 65 && letter < 90) {
          letter = letter + 32;
        } else if (letter > 97 && letter < 122) {
          letter = letter - 32;
        }
        putchar(letter);
      }
    }  else {
      putchar(format_string[i]);
    }
  }
  puts("");
}

int main(int argc, char *argv[]) {
  char buf[1024], buf2[1024];
  while (gets(buf)) {
    gets(buf2);
    my_printf(buf, buf2);
  }
  return 0;
}
